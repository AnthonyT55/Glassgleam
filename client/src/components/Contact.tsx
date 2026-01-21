import { Button } from "@/components/ui/button";
import { Mail, MapPin, Share2 } from "lucide-react";
import qrCode from "@assets/ggqrcode_1767738636450.png";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Ready for a Brighter View?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We serve Danville, VA and the surrounding communities with pride. Scan my digital business card to save my contact info instantly.
            </p>

            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-12">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Mail className="text-primary" size={20} />
                Get a Free Estimate
              </h3>
              <p className="text-muted-foreground">
                Shoot me an email at <span className="text-primary font-semibold">glassgleamwindowclean@outlook.com</span> to get a free, no-obligation estimate for your home or business.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <a 
                    href="mailto:glassgleamwindowclean@outlook.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    glassgleamwindowclean@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Service Area</h3>
                  <p className="text-muted-foreground">Danville, VA & surrounding areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Call to Action */}
          <div className="bg-card rounded-3xl p-8 shadow-xl border border-white/50 relative overflow-hidden group max-w-sm mx-auto">
            {/* Decorative background for the QR card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="bg-white p-3 rounded-xl shadow-inner mb-4 ring-1 ring-border">
                <img 
                  src={qrCode} 
                  alt="Glass Gleam Digital Business Card" 
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                <Share2 size={12} />
                DIGITAL BUSINESS CARD
              </div>
              
              <h3 className="text-xl font-bold mb-2">Scan to Connect</h3>
              <p className="text-muted-foreground text-sm">
                Scan to save our contact details instantly.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Button */}
        <div className="mt-20 text-center">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl h-16 px-12 font-bold shadow-lg hover:scale-105 transition-all"
            asChild
          >
            <a href="https://forms.gle/Gi8WJRp5z2ne5hue6" target="_blank" rel="noopener noreferrer">
              Request a Free Quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
