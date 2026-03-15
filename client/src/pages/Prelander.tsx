import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles, Sun, Shield, Home } from "lucide-react";
import beforeAfter2 from "@assets/IMG_5880_1773424270710.jpg";
import beforeAfter3 from "@assets/image_1773424277487.jpeg";

export default function Prelander() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="py-6 px-4 border-b bg-background">
        <div className="container mx-auto flex justify-between items-center max-w-5xl">
          <div className="flex items-center gap-2 text-2xl font-heading font-bold text-primary">
            Glass Gleam
          </div>
          <Button variant="outline" asChild>
             <Link href="/landing">
              Get Quote
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero / Transformations Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 mx-auto text-center max-w-5xl">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-full mb-6 text-sm">
            Professional Window Cleaning
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 tracking-tight">
            Instantly Transform Your Property's Appearance
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            See the night-and-day difference professional window cleaning makes. Real results for homes and businesses in Danville.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border group relative aspect-[4/5] bg-muted">
              <img 
                src={beforeAfter2} 
                alt="Commercial window cleaning before and after" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border/50 text-left">
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
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border/50 text-left">
                <h3 className="font-bold text-lg">Residential Home</h3>
                <p className="text-sm text-muted-foreground">Years of dirt washed away for a perfect view.</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="text-xl h-16 px-12 font-bold shadow-xl hover:scale-105 transition-all w-full sm:w-auto" asChild>
            <Link href="/landing">
              Get Your Free Quote Today!
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Need Cleaning Section */}
      <section className="py-24 border-y border-border/50">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Why Do You Need Your Windows Cleaned?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Windows don't just get a little dusty—they accumulate damaging particles that ruin your view and your glass over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">01</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Hard Water Stains</h3>
              <p className="text-muted-foreground leading-relaxed">Over time, rain and sprinkler systems leave mineral deposits that embed into porous glass. If left untreated, they can permanently etch and ruin your windows.</p>
            </div>
            
            <div className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">02</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Dirt & Grime Buildup</h3>
              <p className="text-muted-foreground leading-relaxed">Dust, pollen, and pollutants cling to your glass, creating a hazy, dull film that makes your whole house look unkempt from the outside.</p>
            </div>
            
            <div className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">03</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Mold & Mildew</h3>
              <p className="text-muted-foreground leading-relaxed">Window sills and tracks trap moisture, leading to mold growth. This is not only unsightly and unhealthy, but it degrades the window seal over time.</p>
            </div>
            
            <div className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">04</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Loss of Natural Light</h3>
              <p className="text-muted-foreground leading-relaxed">Dirty windows block out up to 20% of sunlight. This makes your interior feel darker, more confined, and less inviting.</p>
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
              Why It Matters
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Clean windows do more than just look nice. They elevate your entire living space.
            </p>
          </div>
          
          <div className="space-y-8 bg-black/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="bg-white/20 p-4 rounded-2xl shrink-0">
                <Home className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Massively Boosts Curb Appeal</h3>
                <p className="text-primary-foreground/80 text-lg leading-relaxed">Clean windows are one of the most cost-effective ways to make your property look well-maintained and welcoming. It instantly upgrades your home's exterior.</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-white/10 my-4" />
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="bg-white/20 p-4 rounded-2xl shrink-0">
                <Sun className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Enhances Interior Ambiance</h3>
                <p className="text-primary-foreground/80 text-lg leading-relaxed">Maximizing natural light makes rooms feel larger, warmer, and more inviting. It has a proven positive impact on your mood and energy levels.</p>
              </div>
            </div>
            
            <div className="w-full h-px bg-white/10 my-4" />
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="bg-white/20 p-4 rounded-2xl shrink-0">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Protects Your Investment</h3>
                <p className="text-primary-foreground/80 text-lg leading-relaxed">Removing corrosive contaminants extends the lifespan of your glass, frames, and seals. You save money by avoiding expensive early replacements.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-2xl font-bold mb-8">Ready to see the world clearly again?</p>
            <Button size="lg" variant="secondary" className="text-xl h-16 px-12 font-bold shadow-2xl hover:scale-105 transition-all w-full sm:w-auto" asChild>
              <Link href="/landing">
                Get Your Free Quote Today!
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background text-center">
        <div className="container px-4">
          <div className="flex items-center justify-center gap-2 text-xl font-heading font-bold text-primary mb-4">
            Glass Gleam
          </div>
          <p className="text-muted-foreground">© {new Date().getFullYear()} Glass Gleam Window Cleaning. Serving Danville, VA.</p>
        </div>
      </footer>
    </div>
  );
}
