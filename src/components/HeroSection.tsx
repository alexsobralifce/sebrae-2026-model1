import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, TrendingUp, Users } from "lucide-react";

const HeroSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  
  const services = [
    { icon: Briefcase, text: "Consultoria Especializada" },
    { icon: TrendingUp, text: "Crescimento de Negócios" },
    { icon: Users, text: "Capacitação Empresarial" }
  ];
  
  return (
    <section 
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-secondary py-24 lg:py-32"
    >
      {/* Círculos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="inline-block">
              <span className="text-accent font-bold text-sm uppercase tracking-wider bg-white/10 px-4 py-2 rounded-full">
                Sebrae 2026
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Apoiamos você a{" "}
              <span className="text-accent">gerir e desenvolver</span>
              <br />
              negócios em qualquer fase da jornada empreendedora
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Consultoria especializada, cursos, ferramentas e atendimento personalizado 
              para transformar seu negócio e impulsionar resultados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/consultorias">
                <Button 
                  variant="golden" 
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform w-full sm:w-auto"
                >
                  Ver Fichas Técnicas
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 rounded-full border-2 border-white text-white hover:bg-white hover:text-primary transition-all w-full sm:w-auto"
              >
                Fale Conosco
              </Button>
            </div>
            
            {/* Cards de serviços */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition-all duration-500 hover:bg-white/20 hover:scale-105 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <IconComponent className="w-10 h-10 text-accent mx-auto mb-3" />
                    <p className="text-white font-semibold text-center">{service.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
