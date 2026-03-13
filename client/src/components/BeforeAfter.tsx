import beforeAfter2 from "@assets/IMG_5880_1773424270710.jpg";
import beforeAfter3 from "@assets/image_1773424277487.jpeg";

export default function BeforeAfter() {
  const images = [
    { src: beforeAfter2, alt: "Commercial window cleaning before and after" },
    { src: beforeAfter3, alt: "Residential window cleaning before and after" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Transform Your Windows
          </h2>
          <p className="text-muted-foreground text-lg">
            See the difference professional cleaning makes. Real results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {images.map((img, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-xl border border-border group relative aspect-[4/5] bg-muted">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
