import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@assets/watermark_removed_27952569-407f-4be4-857e-b444aa3e96ed_1773762715364.mp4";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[550px] aspect-square max-h-[75vh] md:max-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto relative z-10 px-4 md:px-6 pt-20 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Restore your property's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-accent">value and curb appeal</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
              Partner with us and watch your property transform
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-background/95 backdrop-blur-md border-t border-border/50 py-3 overflow-hidden z-20">
        <div className="flex w-max animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8 text-foreground/80 text-sm md:text-base font-bold uppercase tracking-widest whitespace-nowrap">
              <span>Seasonal Plans</span>
              <span className="text-accent">•</span>
              <span>Same Week Guarantee</span>
              <span className="text-accent">•</span>
              <span>Transparent Pricing</span>
              <span className="text-accent">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
