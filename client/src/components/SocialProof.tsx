import img1 from "@assets/IMG_5881_1773423832133.jpg";
import img2 from "@assets/IMG_5879_1773423838388.jpg";

export default function SocialProof() {
  const images = [
    { src: img1, alt: "Window cleaning before and after" },
    { src: img2, alt: "Window cleaning in action" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Our Work Speaks for Itself
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from homes and businesses in Danville, VA. 
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-2xl shadow-lg group">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
          {/* Placeholder for more pictures */}
          <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-dashed border-muted-foreground/30 bg-muted/50 flex flex-col items-center justify-center p-6 text-center">
             <p className="text-muted-foreground font-medium">More photos coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
