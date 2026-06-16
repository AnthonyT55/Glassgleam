import { 
  Droplets, 
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden flex flex-col items-center justify-center w-full">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 md:px-6 relative z-10 w-full flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl w-full mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Our Professional Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Complete exterior restoration solutions tailored to your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 shadow-md bg-card overflow-hidden relative flex flex-col pt-4 items-center text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-10" />
              
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base text-foreground/80 leading-relaxed max-w-sm mx-auto">
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
