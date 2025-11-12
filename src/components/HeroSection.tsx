import heroCollage from "@/assets/hero-collage-new.jpg";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const HeroSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section 
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-primary-glow/10 via-accent/5 to-coral/10 py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 order-2 lg:order-1 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="inline-block">
              <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                Sebrae 2026
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="text-primary">Portfólio Sebrae CE</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Apoiamos você a gerir e desenvolver negócios em qualquer fase da jornada empreendedora dos nossos clientes.
            </p>
          </div>
          
          <div className={`order-1 lg:order-2 relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroCollage} 
                alt="Sistema de Fichas Técnicas Sebrae" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
