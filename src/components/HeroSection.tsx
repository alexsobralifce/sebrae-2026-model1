import heroCollage from "@/assets/hero-collage.png";
import innovationImg from "@/assets/innovation-abstract.jpg";
import managementImg from "@/assets/management-abstract.jpg";
import sustainabilityImg from "@/assets/sustainability-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-glow/10 via-accent/5 to-coral/10 py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-block">
              <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                Portfólio 2026
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              O Futuro do Seu Negócio{" "}
              <span className="text-primary">Começa Aqui</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Descubra soluções inovadoras, consultoria especializada e ferramentas digitais 
              que transformam a gestão da sua empresa.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="relative group rounded-2xl overflow-hidden aspect-square shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={innovationImg} 
                  alt="Inovação e Tecnologia" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white text-sm font-bold">
                    Inovação
                  </div>
                </div>
              </div>
              
              <div className="relative group rounded-2xl overflow-hidden aspect-square shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={managementImg} 
                  alt="Gestão e Pessoas" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coral/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white text-sm font-bold">
                    Gestão
                  </div>
                </div>
              </div>
              
              <div className="relative group rounded-2xl overflow-hidden aspect-square shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={sustainabilityImg} 
                  alt="Sustentabilidade" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white text-sm font-bold">
                    Sustentabilidade
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroCollage} 
                alt="Portfólio Sebrae 2026" 
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
