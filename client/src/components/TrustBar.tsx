import { ShieldCheck, Star, MapPin, Clock } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      icon: ShieldCheck,
      label: "Fully Insured"
    },
    {
      icon: Star,
      label: "5-Star Rated Service"
    },
    {
      icon: MapPin,
      label: "Serving Danville, VA & Surrounding Areas"
    },
    {
      icon: Clock,
      label: "One-Time & Recurring Plans Available"
    }
  ];

  return (
    <section className="py-12 bg-card/50 backdrop-blur-sm border-y border-white/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm md:text-base font-medium text-foreground">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
