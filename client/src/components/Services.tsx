import { 
  Home, 
  Building2, 
  Droplets, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Crystal-clear windows for your home, inside and out. Whether it's a single-story house or a two-story property, we handle it with care and precision.",
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: "First impressions matter. Keep your storefront or office looking sharp with regular professional cleaning that won't disrupt your business.",
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
            Professional window cleaning solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 shadow-md bg-card overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
              
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
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
