import { Heart, Instagram, Youtube, MessageCircle } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-primary">
              Crochê da Pâmela
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando linhas em arte. Aprenda a criar lindos vestidinhos de crochê 
              com técnicas exclusivas e muito carinho.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="h-4 w-4 fill-primary text-primary" />
              <span>para você</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">
              Acesso Rápido
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#lessons" className="text-muted-foreground hover:text-primary transition-colors">
                  📚 Aulas Gratuitas
                </a>
              </li>
              <li>
                <a href="#materials" className="text-muted-foreground hover:text-primary transition-colors">
                  📐 Moldes e Materiais
                </a>
              </li>
              <li>
                <a href="#premium" className="text-muted-foreground hover:text-primary transition-colors">
                  👑 Conteúdo Premium
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">
              Fale Comigo
            </h4>
            <p className="text-muted-foreground text-sm">
              Dúvidas ou sugestões? Entre em contato! 🐝
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Crochê da Pâmela. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Criado com carinho para transformar sua arte 🧶
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
