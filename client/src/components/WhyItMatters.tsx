import { Sparkles, Home, Sun, Shield } from "lucide-react";

export default function WhyItMatters() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10">
        <Sparkles className="w-96 h-96" />
      </div>
      
      <div className="container px-4 mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Why Smart Property Owners Work With Us
          </h2>
          <p className="text-xl text-primary-foreground/80">
            DIY cleaning looks fine, until you see what a professional restoration actually looks like. Glass Gleam brings the expertise and equipment needed for a perfect finish.
          </p>
        </div>
        
        <div className="space-y-8 bg-black/40 p-8 md:p-12 rounded-3xl border border-white/10">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="bg-white/20 p-4 rounded-2xl shrink-0">
              <Home className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">74%</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">Of homeowners who try DIY window cleaning report streaks, smears, or missed spots on the first attempt.</p>
            </div>
          </div>
          
          <div className="w-full h-px bg-white/10 my-4" />
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="bg-white/20 p-4 rounded-2xl shrink-0">
              <Sun className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">40%</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">More natural light enters a room after a professional deep clean versus a standard DIY wipe down.</p>
            </div>
          </div>
          
          <div className="w-full h-px bg-white/10 my-4" />
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="bg-white/20 p-4 rounded-2xl shrink-0">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">2x</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">Longer window lifespan when maintained with regular professional cleaning, hard water and oxidation permanently etch untreated glass.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}