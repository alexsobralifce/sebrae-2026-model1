import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import presencialImg from "@/assets/presencial-solution.jpg";
import onlineImg from "@/assets/online-solution.jpg";
import { Users, Monitor } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const PortfolioSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver({ threshold: 0.3 });
  const { ref: card1Ref, isVisible: card1Visible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: card2Ref, isVisible: card2Visible } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Tipos de <span className="text-primary">Portfólio</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Solução Presencial */}
          <div
            ref={card1Ref}
            className={`transition-all duration-1000 ${
              card1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-teal)]">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={presencialImg} 
                  alt="Solução Presencial" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80"></div>
                
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-3 rounded-full">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Solução Presencial
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  As soluções na modalidade presencial podem ocorrer nas Agências Sebrae ou em locais parceiros.
                </p>
                
                <Button 
                  size="lg" 
                  className="w-full text-white hover:opacity-90 shadow-[var(--shadow-coral)] font-bold"
                  style={{ backgroundColor: '#0f438a' }}
                >
                  Clique e acesse o portfólio
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Solução Online */}
          <div
            ref={card2Ref}
            className={`transition-all duration-1000 delay-200 ${
              card2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-teal)]">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={onlineImg} 
                  alt="Solução Online" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80"></div>
                
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-3 rounded-full">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Solução Online
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  As soluções na modalidade online ocorrem por meio de webinars, lives ou videoaulas gravadas, disponíveis no Portal do Sebrae CE.
                </p>
                
                <Button 
                  size="lg" 
                  className="w-full text-white hover:opacity-90 shadow-[var(--shadow-coral)] font-bold"
                  style={{ backgroundColor: '#69be5c' }}
                >
                  Clique e acesse os conteúdos
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
