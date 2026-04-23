import { Button } from "@/components/ui/button";
import { Sparkles, Sun, Shield, Home } from "lucide-react";
import beforeAfter2 from "@assets/IMG_5880_1773424270710.jpg";
import beforeAfter3 from "@assets/image_1773424277487.jpeg";

export default function ValueProps() {
  return (
    <>
      {/* Hero / Transformations Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container px-4 mx-auto text-center max-w-5xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 tracking-tight">
            Your Exterior Deserves Better
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional exterior restoration that transforms your property. From cloudy windows to grimy driveways, we deliver real results. Partner with Glass Gleam to revitalize your property today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border group relative aspect-[4/5] bg-muted">
              <img 
                src={beforeAfter2} 
                alt="Commercial window cleaning before and after" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 p-4 rounded-xl shadow-lg border border-border/50 text-left">
                <h3 className="font-bold text-lg">Commercial Storefront</h3>
                <p className="text-sm text-muted-foreground">Heavy buildup removed, restoring crystal clarity.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border group relative aspect-[4/5] bg-muted">
              <img 
                src={beforeAfter3} 
                alt="Residential window cleaning before and after" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 p-4 rounded-xl shadow-lg border border-border/50 text-left">
                <h3 className="font-bold text-lg">Residential Home</h3>
                <p className="text-sm text-muted-foreground">Years of dirt washed away for a perfect view.</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="text-xl h-16 px-12 font-bold shadow-xl hover:scale-105 transition-all w-full sm:w-auto" asChild>
            <a href="https://forms.gle/Gi8WJRp5z2ne5hue6" target="_blank" rel="noopener noreferrer">
              Get Your Free Quote Today!
            </a>
          </Button>
        </div>
      </section>

      {/* Why Need Cleaning Section */}
      <section className="py-24 border-y border-border/50">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              More Than Just A Quick Wash
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most people don't realize how much dirt, algae, and grime are quietly degrading their property's value and curb appeal over time. Partner with us to solve the problem before it's permanent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">01</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Curb Appeal That Sells</h3>
              <p className="text-muted-foreground leading-relaxed">Clean windows and freshly washed driveways are the fastest ways to improve how your home looks from the street. Instantly.</p>
            </div>
            
            <div className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">02</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Prevent Costly Damage</h3>
              <p className="text-muted-foreground leading-relaxed">Dirt, algae, and hard water can permanently etch glass and erode concrete or siding. Regular cleaning protects your biggest investment.</p>
            </div>
            
            <div className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">03</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">First Impressions Matter</h3>
              <p className="text-muted-foreground leading-relaxed">For businesses, your exterior is the first thing customers see. A spotless storefront and clean walkways signal professionalism before they ever walk in.</p>
            </div>
            
            <div className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">04</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Healthier Environment</h3>
              <p className="text-muted-foreground leading-relaxed">We eliminate slippery algae on walkways and mold/mildew around your home, creating a safer, healthier space for your family or customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10">
          <Sparkles className="w-96 h-96" />
        </div>
        
        <div className="container px-4 mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Why Smart Property Owners Go Professional
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
          
          <div className="mt-16 text-center">
            <p className="text-2xl font-bold mb-8">Ready to see the world clearly again?</p>
            <Button size="lg" variant="secondary" className="text-xl h-16 px-12 font-bold shadow-2xl hover:scale-105 transition-all w-full sm:w-auto" asChild>
              <a href="https://forms.gle/Gi8WJRp5z2ne5hue6" target="_blank" rel="noopener noreferrer">
                Get Your Free Quote Today!
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
