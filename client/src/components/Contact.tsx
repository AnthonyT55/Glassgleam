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
              <p className="text-muted-foreground mb-4">
                Shoot me an email to get a free, no-obligation estimate for your home or business.
              </p>
              <Button asChild className="w-full sm:w-auto">
                <a href="mailto:glassgleamwindowclean@outlook.com">
                  Send Email
                </a>
              </Button>
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
          <div className="bg-card rounded-3xl p-10 shadow-2xl border border-white/50 relative overflow-hidden group">
            {/* Decorative background for the QR card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-2xl shadow-inner mb-6 ring-1 ring-border">
                <img 
                  src={qrCode} 
                  alt="Glass Gleam Digital Business Card" 
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
                />
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                <Share2 size={14} />
                DIGITAL BUSINESS CARD
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Scan to Connect</h3>
              <p className="text-muted-foreground max-w-xs">
                Scan this code with your phone camera to instantly save our contact details and request a quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
