import { Link } from "react-router-dom";
import { Home, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-center">
            <div>
              <h3 className="font-bold mb-4 text-center">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    <Home className="w-4 h-4" />
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/consultorias" className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    <FileText className="w-4 h-4" />
                    Fichas Técnicas
                  </Link>
                </li>
              </ul>
            </div>
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
