import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

interface HeroSectionProps {
  onStartClick: () => void;
}

export const HeroSection = ({ onStartClick }: HeroSectionProps) => {
  return (
    <header className="relative overflow-hidden gradient-hero">
      {/* Decorative elements */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative py-16 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5">
            <Scissors className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Curso Online de Crochê
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-4">
            Crochê da{" "}
            <span className="text-primary">Pâmela</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto">
            Aprenda a fazer lindos vestidinhos de crochê do zero!
          </p>

          {/* Delivery Section */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-2xl bg-card border border-border px-6 py-3 shadow-sm">
            <span className="text-xl">👗</span>
            <span className="text-base font-medium text-foreground">
              Aulas + Moldes + Certificado
            </span>
          </div>

          {/* CTA */}
          <div>
            <Button
              variant="hero"
              size="xl"
              onClick={onStartClick}
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </header>
  );
};