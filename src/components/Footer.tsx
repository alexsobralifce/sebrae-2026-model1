import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/">
              <span className="text-white font-extrabold italic text-3xl sm:text-4xl md:text-5xl tracking-tight">
                SEBRAE
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              Sistema de apoio aos consultores - Fichas Técnicas
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/consultorias" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Fichas Técnicas
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2026 Sebrae - Uso Interno
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
