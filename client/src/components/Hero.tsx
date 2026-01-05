import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/modern_home_with_sparkling_clean_windows.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Clean modern home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              Serving Danville & Surrounding Areas
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              See the World <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-accent">Clearly Again</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
              Premium window cleaning for homes and businesses. We bring the sparkle back to your view with professional, streak-free service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base h-12 px-8">
                Get a Free Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm text-base h-12">
                View Our Services
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-white/80">
              {['Fully Insured', 'Satisfaction Guaranteed', 'Eco-Friendly'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
