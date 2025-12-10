import { Heart, Instagram, Youtube, MessageCircle, Mail, Phone, MapPin, Sparkles, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-card via-card to-muted/50 border-t border-border">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Main Footer Content */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Crochê da Pâmela
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transformando linhas em arte. Aprenda a criar peças únicas e exclusivas de crochê com técnicas profissionais e muito carinho.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#" 
                className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-5">
            <h4 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="h-1 w-6 bg-primary rounded-full" />
              Acesso Rápido
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#lessons" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                Aulas Gratuitas
              </a>
              <a href="#materials" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                Moldes e Materiais
              </a>
              <a href="#premium" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                Conteúdo Premium
              </a>
              <a href="#payment" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                Como Apoiar
              </a>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-5">
            <h4 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="h-1 w-6 bg-primary rounded-full" />
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground group">
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">contato@crochedapamela.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground group">
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground group">
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">São Paulo, Brasil</span>
              </div>
            </div>
          </div>

          {/* Newsletter/CTA Column */}
          <div className="space-y-5">
            <h4 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="h-1 w-6 bg-primary rounded-full" />
              Sobre o Projeto
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Este projeto foi criado com amor para ajudar mulheres a aprenderem crochê e criarem peças incríveis. Sua contribuição ajuda a manter o conteúdo gratuito e acessível! 🐝
            </p>
            <Button 
              onClick={scrollToTop}
              variant="outline"
              className="w-full border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Voltar ao Topo
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/30">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Crochê da Pâmela. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              Feito com <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> para você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
