import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      
      <footer className="bg-foreground text-white py-12 border-t border-white/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <span className="font-heading font-bold text-xl">Glass Gleam</span>
            
            <div className="text-sm text-white/60">
              © {new Date().getFullYear()} Glass Gleam Window Cleaning. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
