import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-violet-500/30 font-sans">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Reviews />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
