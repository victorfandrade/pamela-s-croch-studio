import { X, Copy, Crown, Check, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentModal = ({ isOpen, onClose }: PaymentModalProps) => {
  const [copied, setCopied] = useState(false);
  const pixKey = "05119849288";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      toast.success("Chave PIX copiada com sucesso!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Erro ao copiar chave");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-md animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-3xl bg-card shadow-2xl">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-primary to-primary/80 px-6 py-8 text-primary-foreground">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center justify-center gap-2 mb-3">
              <Crown className="h-6 w-6" />
              <Sparkles className="h-4 w-4" />
            </div>

            <h2 className="font-display text-2xl font-semibold text-center mb-2">
              Acesso Completo VIP
            </h2>
            <p className="text-center text-primary-foreground/80 text-sm">
              Desbloqueie todas as aulas premium e moldes exclusivos
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Price */}
            <div className="mb-6 text-center">
              <p className="text-muted-foreground text-sm mb-1">
                <span className="line-through">De R$ 97,00</span>
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-muted-foreground text-lg">Por</span>
                <span className="font-display text-5xl font-bold text-primary">
                  R$ 25
                </span>
                <span className="text-muted-foreground">,00</span>
              </div>
              <p className="mt-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                Oferta por tempo limitado
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-6 space-y-2">
              {[
                "Acesso às 3 aulas premium",
                "Moldes exclusivos em alta definição",
                "Suporte prioritário",
                "Acesso vitalício",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* PIX Box */}
            <div className="rounded-2xl border border-border bg-muted/50 p-4 mb-4">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Dados para pagamento via PIX
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Chave PIX</p>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 rounded-lg bg-background px-3 py-2 font-mono text-sm text-foreground">
                      {pixKey}
                    </code>
                    <Button
                      variant="subtle"
                      size="sm"
                      onClick={copyPixKey}
                      className="shrink-0"
                    >
                      {copied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">Beneficiário</p>
                  <p className="text-sm font-medium text-foreground">
                    Victor Figueiredo Andrade
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Envie o comprovante para liberar seu acesso imediatamente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
