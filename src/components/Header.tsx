import { useState } from "react";
import { Menu, X, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Projeto", href: "#projeto" },
    { name: "Empreendedoras", href: "#empreendedoras" },
    { name: "Fotos", href: "#fotos" },
    { name: "Acessar", href: "#acessar" },
    { name: "Cadastrar", href: "#cadastrar" },
    { name: "Informações", href: "#informacoes" },
    { name: "Participantes", href: "#participantes" },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-100/80 to-pink-100/80 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Rede Mulheres Empreendedoras do Rio Grande" className="h-16 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <Youtube size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-primary hover:text-accent transition-colors py-2 px-3 rounded-lg hover:bg-purple-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 px-3">
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
