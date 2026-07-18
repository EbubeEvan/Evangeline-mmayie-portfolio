'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const deterministicValue = (index: number, offset: number) => {
  const value = Math.sin(index * 12.9898 + offset * 78.233) * 43758.5453;
  return value - Math.floor(value);
};

const getFramingProfile = (width: number) => {
  if (width < 768) return { cameraX: 0, cameraZ: 9.5, worldX: 0.75, scale: 0.68 };
  if (width < 1024) return { cameraX: 0.3, cameraZ: 9.2, worldX: 1, scale: 0.72 };
  if (width < 1440) return { cameraX: 0.4, cameraZ: 9.3, worldX: 0.9, scale: 0.7 };
  return { cameraX: 1.4, cameraZ: 8, worldX: 2.15, scale: 1 };
};

export const CommandScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const initialWidth = mount.clientWidth;
    const compact = initialWidth < 768;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050706, 0.09);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !compact });
    } catch {
      setCanvasReady(false);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, compact ? 1.25 : 1.75));
    renderer.setClearColor(0x050706, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);
    setCanvasReady(true);

    const world = new THREE.Group();
    scene.add(world);

    const coreGeometry = new THREE.IcosahedronGeometry(compact ? 1.25 : 1.65, 2);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x244431,
      emissive: 0x245d36,
      emissiveIntensity: 1.05,
      metalness: 0.78,
      roughness: 0.25,
      transparent: true,
      opacity: 0.96,
      wireframe: true,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    world.add(core);

    const innerGeometry = new THREE.IcosahedronGeometry(compact ? 0.78 : 1.02, 1);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x9dffb4,
      transparent: true,
      opacity: 0.23,
    });
    const inner = new THREE.Mesh(innerGeometry, innerMaterial);
    world.add(inner);

    const rings = [
      { radius: compact ? 1.9 : 2.5, color: 0x9dffb4, rotation: [1.2, 0.2, 0.1] },
      { radius: compact ? 2.3 : 3.05, color: 0x6dd9e7, rotation: [0.3, 1.1, 0.5] },
      { radius: compact ? 2.7 : 3.6, color: 0xffbd59, rotation: [0.8, 0.6, 1.2] },
    ];

    const ringMeshes = rings.map(({ radius, color, rotation }) => {
      const geometry = new THREE.TorusGeometry(radius, 0.012, 6, compact ? 96 : 160);
      const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.48 });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
      world.add(mesh);
      return mesh;
    });

    const starCount = compact ? 260 : 560;
    const starPositions = new Float32Array(starCount * 3);
    for (let index = 0; index < starCount; index += 1) {
      const radius = 3.4 + deterministicValue(index, 1) * 7;
      const theta = deterministicValue(index, 2) * Math.PI * 2;
      const phi = Math.acos(2 * deterministicValue(index, 3) - 1);
      starPositions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[index * 3 + 2] = radius * Math.cos(phi) - 2;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0x9dffb4,
      size: compact ? 0.018 : 0.024,
      transparent: true,
      opacity: 0.58,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const keyLight = new THREE.PointLight(0x9dffb4, 24, 16);
    keyLight.position.set(3, 2, 4);
    scene.add(keyLight);
    const cyanLight = new THREE.PointLight(0x6dd9e7, 14, 14);
    cyanLight.position.set(-3, -2, 2);
    scene.add(cyanLight);

    const pointer = new THREE.Vector2();
    const handlePointer = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.55;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.35;
    };

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      const profile = getFramingProfile(clientWidth);

      camera.position.set(profile.cameraX, 0, profile.cameraZ);
      world.position.x = profile.worldX;
      world.scale.setScalar(profile.scale);
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
    };
    resize();

    let frame = 0;
    let visible = !document.hidden;
    const animationStart = performance.now();
    const renderFrame = () => {
      if (!visible) return;
      const elapsed = (performance.now() - animationStart) / 1000;
      world.rotation.y += (pointer.x - world.rotation.y) * 0.025;
      world.rotation.x += (-pointer.y - world.rotation.x) * 0.025;
      core.rotation.y = elapsed * 0.12;
      core.rotation.z = elapsed * 0.045;
      inner.rotation.y = -elapsed * 0.18;
      ringMeshes.forEach((ring, index) => {
        ring.rotation.z += 0.0008 + index * 0.00045;
      });
      stars.rotation.y = elapsed * 0.006;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(renderFrame);
    };

    const handleVisibility = () => {
      visible = !document.hidden;
      if (visible && !reduceMotion) {
        frame = window.requestAnimationFrame(renderFrame);
      } else {
        window.cancelAnimationFrame(frame);
      }
    };

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      visible = false;
      window.cancelAnimationFrame(frame);
      setCanvasReady(false);
    };

    window.addEventListener('resize', resize);
    if (!reduceMotion) window.addEventListener('pointermove', handlePointer, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost);

    if (reduceMotion) {
      world.rotation.set(-0.08, 0.18, 0);
      renderer.render(scene, camera);
    } else {
      frame = window.requestAnimationFrame(renderFrame);
    }

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointer);
      document.removeEventListener('visibilitychange', handleVisibility);
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ringMeshes.forEach((ring) => {
        ring.geometry.dispose();
        (ring.material as THREE.Material).dispose();
      });
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className={`absolute inset-0 transition-opacity duration-500 ${canvasReady ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute right-[-18%] top-[18%] aspect-square w-[72%] rounded-full border border-[#9dffb4]/25 shadow-[0_0_90px_rgba(157,255,180,0.08)] md:right-[-8%] md:top-[8%] md:w-[58%]" />
        <div className="absolute right-[-8%] top-[28%] aspect-square w-[52%] rotate-45 border border-[#6dd9e7]/20 md:right-[2%] md:top-[20%] md:w-[40%]" />
        <div className="absolute right-[7%] top-[42%] h-28 w-28 rotate-45 border border-[#9dffb4]/35 bg-[#9dffb4]/5 shadow-[0_0_55px_rgba(157,255,180,0.12)] md:right-[18%] md:h-44 md:w-44" />
      </div>
      <div ref={mountRef} className="absolute inset-0" />
    </div>
  );
};