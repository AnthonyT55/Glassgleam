import beforeAfter2 from "@assets/IMG_5880_1773424270710.jpg";
import beforeAfter3 from "@assets/image_1773424277487.jpeg";
import drivewayImg from "@assets/Untitled_design_1776976059608.png";

export default function Transformations() {
  return (
    <section className="py-16 md:py-24 bg-muted/20 border-y border-border/50">
      <div className="container px-4 mx-auto text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 tracking-tight">
          Real Results, Real Impact
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          See the difference our complete exterior restoration makes for homes and businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border group relative aspect-[4/5] bg-muted">
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
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border group relative aspect-[4/5] bg-muted">
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
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border group relative aspect-[4/5] bg-muted">
            <img 
              src={drivewayImg} 
              alt="Driveway pressure washing" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-background/95 p-4 rounded-xl shadow-lg border border-border/50 text-left">
              <h3 className="font-bold text-lg">Concrete Renewal</h3>
              <p className="text-sm text-muted-foreground">Deep pressure washing removes embedded grime and algae.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}