import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      
      <footer className="bg-foreground text-white py-12 border-t border-white/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Sparkles size={20} />
              </div>
              <span className="font-heading font-bold text-xl">Glass Gleam</span>
            </div>
            
            <div className="text-sm text-white/60">
              © {new Date().getFullYear()} Glass Gleam Window Cleaning. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
