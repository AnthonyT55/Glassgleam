import { Button } from "@/components/ui/button";
import { Mail, MapPin, Share2 } from "lucide-react";
import qrCode from "@assets/ggqrcode_1767738636450.png";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/30 flex flex-col items-center justify-center w-full">
      <div className="container px-4 md:px-6 w-full flex flex-col items-center justify-center">
        <div className="text-center w-full mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            We serve Greensboro, NC and the surrounding communities with pride. Scan our digital business card to save our contact info instantly.
          </p>
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 flex flex-col md:flex-row items-center justify-center gap-12 text-center max-w-5xl w-full mx-auto">
          
          <div className="space-y-8 flex flex-col items-center w-full">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0">
                <Mail className="w-7 h-7" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-xl mb-1">Email Us</h3>
                <a 
                  href="mailto:contact@glassgleamwindows.com" 
                  className="text-muted-foreground hover:text-primary transition-colors text-lg break-all sm:break-normal"
                >
                  contact@glassgleamwindows.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-xl text-primary shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-xl mb-1">Service Area</h3>
                <p className="text-muted-foreground text-lg">Greensboro, NC & surrounding areas</p>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="shrink-0 bg-background rounded-2xl p-6 shadow-md border border-border/50 flex flex-col items-center text-center w-full max-w-[240px]">
            <div className="bg-white p-3 rounded-xl shadow-inner mb-4 ring-1 ring-border">
              <img 
                src={qrCode} 
                alt="Glass Gleam Digital Business Card" 
                className="w-24 h-24 object-contain"
              />
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
              <Share2 size={12} />
              DIGITAL CARD
            </div>
            
            <h3 className="text-lg font-bold mb-1">Scan to Connect</h3>
            <p className="text-muted-foreground text-xs">
              Save our contact details instantly.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}