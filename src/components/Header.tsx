import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchDialog from "@/components/SearchDialog";

const Header = () => {
  const [open, setOpen] = useState(false);
  
  const menuItems = [
    { label: "Portfólio", href: "/#portfolio" },
    { label: "Consultoria", href: "/consultorias" },
    { label: "Contato", href: "/#contato" },
  ];
  
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-[#005CA9] font-extrabold italic text-3xl sm:text-4xl md:text-5xl tracking-tight">
              SEBRAE
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <SearchDialog 
              trigger={
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Buscar</span>
                </Button>
              }
            />
            
            <Button 
              variant="outline" 
              className="hidden sm:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Fale Conosco
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <span className="text-[#005CA9] font-extrabold italic text-3xl tracking-tight">
                      SEBRAE
                    </span>
                  </div>
                  
                  <nav className="flex flex-col gap-4 flex-1">
                    {menuItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border hover:border-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto"
                    size="lg"
                  >
                    Fale Conosco
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
