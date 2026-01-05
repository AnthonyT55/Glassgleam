import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner in Danville",
    content: "I didn't realize how dirty my windows were until Glass Gleam finished. The difference is night and day! Professional, polite, and efficient.",
    rating: 5
  },
  {
    name: "Michael Ross",
    role: "Local Business Owner",
    content: "We've used several cleaning services for our storefront, but none compare to the attention to detail these guys have. Highly recommended!",
    rating: 5
  },
  {
    name: "Emily Chen",
    role: "Resident",
    content: "They even cleaned the tracks and screens, which most companies charge extra for. My whole house feels brighter now.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
              What Our Neighbors Say
            </h2>
            <p className="text-white/80 text-lg">
              We take pride in every streak-free shine. Here's what the Danville community has to say about our work.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <div className="flex gap-1 text-accent">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} fill="currentColor" size={20} />
              ))}
            </div>
            <span className="font-semibold ml-2">5.0 Star Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={16} />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent border border-accent/50">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
