import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mulheres Empreendedoras</h3>
            <p className="text-purple-100 leading-relaxed">
              Construindo e apoiando iniciativas para empoderar empreendedoras em Rio Grande.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <Mail size={18} />
                <span>contato@riograndeporelas.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-purple-100">
                <Phone size={18} />
                <span>(53) 3233-xxxx</span>
              </div>
              <div className="flex items-center gap-3 text-purple-100">
                <MapPin size={18} />
                <span>Rio Grande - RS</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-400/30 pt-8 text-center text-purple-100">
          <p>&copy; 2024 Mulheres Empreendedoras do Rio Grande. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
