import { CheckCircle2 } from "lucide-react";

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
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            The Last Window Cleaner You'll Ever Need to Call
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            We're not just here for a one-time clean. We show up on time, treat your property with respect, and leave every pane streak-free, or we come back and fix it. No hassle, no excuses.
          </p>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
