import { Button } from "@/components/ui/button";
import consultingImg from "@/assets/consulting-gestao.jpg";
import { CheckCircle2 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Link } from "react-router-dom";

const ConsultingSection = () => {
  const { ref: imageRef, isVisible: imageVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver({ threshold: 0.2 });
  
  const benefits = [
    "Diagnóstico completo da sua empresa",
    "Planos de ação personalizados",
    "Especialistas experientes",
    "Resultados mensuráveis"
  ];
  
  return (
    <section id="consultoria" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div 
            ref={imageRef}
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${
              imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={consultingImg} 
                alt="Consultoria Especializada em Gestão" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
            </div>
            
            <div className="absolute -z-10 -top-10 -left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
          
          <div 
            ref={contentRef}
            className={`space-y-8 order-1 lg:order-2 transition-all duration-1000 delay-200 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="inline-block">
              <span className="text-secondary font-bold text-sm uppercase tracking-wider bg-secondary/10 px-4 py-2 rounded-full">
                Especialistas
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Consultoria Especializada em{" "}
              <span className="text-primary">Gestão</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nossos especialistas estão prontos para analisar, diagnosticar e construir 
              planos de ação para otimizar todas as áreas da sua empresa, da gestão 
              financeira ao marketing digital.
            </p>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Link to="/consultorias">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-[var(--shadow-coral)] font-bold text-base px-8"
                >
                  Ver Fichas Técnicas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
