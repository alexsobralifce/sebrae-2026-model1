import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, FileText } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  
  const menuItems = [
    { label: "Início", href: "/", icon: Home },
    { label: "Fichas Técnicas", href: "/consultorias", icon: FileText },
  ];
  
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 font-medium group"
                >
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          
          <Link to="/" className="flex items-center md:ml-auto">
            <span className="text-[#005CA9] font-extrabold italic text-3xl sm:text-4xl md:text-5xl tracking-tight">
              SEBRAE
            </span>
          </Link>
          
          <div className="flex items-center gap-2 md:hidden">
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
                  
                  <nav className="flex flex-col gap-4">
                    {menuItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border hover:border-primary"
                        >
                          <IconComponent className="w-5 h-5" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>
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
