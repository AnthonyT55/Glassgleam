import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhyChooseUs() {
  const reasons = [
    "Professional-grade equipment and solutions",
    "Interior & exterior cleaning available",
    "Flexible scheduling around your life",
    "Same-day response on all quote requests"
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            The Last Exterior Restoration Team You'll Ever Need
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            We're not just here for a one-time clean. We show up on time, treat your property with respect, and leave every surface spotless, or we come back and fix it. Partner with us for a hassle-free experience.
          </p>

          <div className="space-y-4 mb-12 flex flex-col items-center">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-lg text-foreground">{reason}</p>
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="text-lg h-14 px-8 shadow-xl hover:scale-105 transition-all w-full sm:w-auto"
            asChild
          >
            <a href="https://forms.gle/Gi8WJRp5z2ne5hue6" target="_blank" rel="noopener noreferrer">
              Get Your Free Quote Today!
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
