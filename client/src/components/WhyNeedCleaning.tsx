export default function WhyNeedCleaning() {
  return (
    <section className="py-24 bg-background">
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
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
              <span className="font-bold text-xl">01</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Curb Appeal That Sells</h3>
            <p className="text-muted-foreground leading-relaxed">Clean windows and freshly washed driveways are the fastest ways to improve how your home looks from the street. Instantly.</p>
          </div>
          
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-6">
              <span className="font-bold text-xl">02</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Prevent Costly Damage</h3>
            <p className="text-muted-foreground leading-relaxed">Dirt, algae, and hard water can permanently etch glass and erode concrete or siding. Regular cleaning protects your biggest investment.</p>
          </div>
          
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6">
              <span className="font-bold text-xl">03</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">First Impressions Matter</h3>
            <p className="text-muted-foreground leading-relaxed">For businesses, your exterior is the first thing customers see. A spotless storefront and clean walkways signal professionalism before they ever walk in.</p>
          </div>
          
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6">
              <span className="font-bold text-xl">04</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Healthier Environment</h3>
            <p className="text-muted-foreground leading-relaxed">We eliminate slippery algae on walkways and mold/mildew around your home, creating a safer, healthier space for your family or customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}