import { Button } from "@/components/ui/button";
import logoSebrae from "@/assets/logo-sebrae.png";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src={logoSebrae}
              alt="Sebrae" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium">
              Portfólio
            </a>
            <a href="#consultoria" className="text-foreground hover:text-primary transition-colors font-medium">
              Consultoria
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </nav>
          
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
