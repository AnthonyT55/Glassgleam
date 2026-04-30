import { Sparkles, Home, Shield, Droplets, AlertTriangle } from "lucide-react";

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
            DIY exterior cleaning often results in property damage, wasted weekends, and lackluster results. Here's why trusting the professionals at Glass Gleam is the better investment.
          </p>
        </div>
        
        <div className="space-y-8 bg-black/40 p-8 md:p-12 rounded-3xl border border-white/10">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="bg-white/20 p-4 rounded-2xl shrink-0 text-center min-w-[100px] flex flex-col items-center justify-center">
              <AlertTriangle className="w-8 h-8 mb-2" />
              <span className="font-bold text-xl">0</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Zero Damage Guarantee</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">Consumer pressure washers can output up to 4,000 PSI, which easily strips paint, gouges wood, and blows window seals. We use calibrated soft-washing for delicate surfaces to ensure a 100% damage-free clean.</p>
            </div>
          </div>
          
          <div className="w-full h-px bg-white/10 my-4" />
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="bg-white/20 p-4 rounded-2xl shrink-0 text-center min-w-[100px] flex flex-col items-center justify-center">
              <Droplets className="w-8 h-8 mb-2" />
              <span className="font-bold text-xl">4x</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Longer Lasting Clean</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">DIY pressure washing only blasts off the top layer of algae, meaning it grows back rapidly. Our professional-grade algaecides kill growth at the root, keeping your home cleaner up to 4 times longer.</p>
            </div>
          </div>
          
          <div className="w-full h-px bg-white/10 my-4" />

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="bg-white/20 p-4 rounded-2xl shrink-0 text-center min-w-[100px] flex flex-col items-center justify-center">
              <Home className="w-8 h-8 mb-2" />
              <span className="font-bold text-xl">40%</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">More Natural Light</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">DIY window cleaning often leaves behind microscopic streaks and smears that diffuse sunlight. Professional pure-water cleaning allows up to 40% more natural light into your home.</p>
            </div>
          </div>
          
          <div className="w-full h-px bg-white/10 my-4" />
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="bg-white/20 p-4 rounded-2xl shrink-0 text-center min-w-[100px] flex flex-col items-center justify-center">
              <Shield className="w-8 h-8 mb-2" />
              <span className="font-bold text-xl">2x</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Longer Window Lifespan</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">Regular professional cleaning prevents permanent hard water etching on glass and stops mold from deteriorating your siding and concrete surfaces, doubling their effective lifespan.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}