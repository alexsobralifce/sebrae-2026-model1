import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <svg 
              viewBox="0 0 200 60" 
              className="h-12 w-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="10" width="40" height="40" rx="8" className="fill-primary"/>
              <text x="60" y="40" className="fill-foreground font-bold text-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>SEBRAE</text>
            </svg>
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
