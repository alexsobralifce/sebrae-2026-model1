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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo de texto */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Apoiamos você a{" "}
              <span className="text-accent">gerir e desenvolver</span>
              <br />
              negócios em qualquer fase da jornada empreendedora
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Consultoria especializada, cursos, ferramentas e atendimento personalizado 
              para transformar seu negócio e impulsionar resultados.
            </p>
          </div>

          {/* Imagem */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="relative group">
              <img 
                src="/img/foto_sem_fundo.png" 
                alt="Representação visual do apoio ao empreendedorismo do SEBRAE"
                className="w-full h-auto max-w-md lg:max-w-lg mx-auto rounded-2xl shadow-2xl border-2 border-white/20 transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/logo-sebrae-hq.png";
                }}
              />
              
              {/* Overlay gradient para melhor integração */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl"></div>
              
              {/* Efeito de brilho */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
