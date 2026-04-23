import { 
  Droplets, 
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import pwImage from "@assets/Untitled_design_1776976059608.png";

const services = [
  {
    icon: Sparkles,
    title: "Window Cleaning",
    description: "Crystal-clear, streak-free windows for your home or business. We carefully remove hard water stains, dirt, and buildup to let the natural light shine through, enhancing both your view and your interior ambiance.",
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description: "Restore your driveways, walkways, siding, and patios. We safely blast away years of embedded dirt, algae, and mildew to instantly renew your property's exterior. See the difference a deep clean can make.",
    image: pwImage
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Our Professional Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Complete exterior restoration solutions tailored to your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 shadow-md bg-card overflow-hidden relative flex flex-col">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 z-10" />
              
              {service.image && (
                <div className="w-full h-56 overflow-hidden border-b border-border/50">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              )}
              
              <CardHeader className={service.image ? "pt-6" : ""}>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon size={24} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base text-foreground/80 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
