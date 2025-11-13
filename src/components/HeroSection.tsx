import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section 
      ref={ref}
      className="relative overflow-hidden bg-primary py-24 lg:py-32"
    >
      {/* Círculos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-glow/25 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary-glow/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-primary-glow/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase">
              <span className="block">Consultoria</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light italic border-b-2 border-white pb-2 inline-block">
                em gestão
              </span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Conheça nossas Consultorias
            </p>
            
            <Link to="/consultorias">
              <Button 
                variant="golden" 
                size="lg"
                className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
              >
                Fichas Técnicas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
