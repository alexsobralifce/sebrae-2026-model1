import logoSebraeSmall from "@/assets/logo-sebrae-small.png";
import logoSebraeMedium from "@/assets/logo-sebrae-medium.png";
import logoSebraeLarge from "@/assets/logo-sebrae-large.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <picture>
              <source media="(min-width: 1024px)" srcSet={logoSebraeLarge} />
              <source media="(min-width: 640px)" srcSet={logoSebraeMedium} />
              <img 
                src={logoSebraeSmall}
                alt="Sebrae Logo" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto brightness-0 invert"
              />
            </picture>
            <p className="text-primary-foreground/80 text-sm">
              Transformando o futuro dos negócios brasileiros desde 1972.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#portfolio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <Link to="/consultorias" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Consultoria
                </Link>
              </li>
              <li>
                <a href="/#contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>0800 570 0800</li>
              <li>atendimento@sebrae.com.br</li>
              <li>www.sebrae.com.br</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2026 Sebrae - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
