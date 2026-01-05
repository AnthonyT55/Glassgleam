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
    description: "Interior and exterior window cleaning for homes of all sizes. We handle screens, sills, and tracks too.",
    price: "From $149"
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: "Keep your storefront or office building looking professional. Flexible scheduling for minimal disruption.",
    price: "Custom Quote"
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description: "Restore your driveways, sidewalks, and siding. Remove years of dirt, mold, and grime instantly.",
    price: "From $199"
  },
  {
    icon: Sparkles,
    title: "Gutter Cleaning",
    description: "Prevent water damage with our thorough gutter cleaning service. We remove all debris and flush downspouts.",
    price: "From $129"
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
            Our Premium Services
          </h2>
          <p className="text-muted-foreground text-lg">
            More than just window cleaning. We offer a full suite of exterior cleaning solutions to make your property shine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none shadow-md bg-card/50 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
              
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  {service.description}
                </CardDescription>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-semibold text-primary">{service.price}</span>
                  <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent text-muted-foreground hover:text-primary">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
