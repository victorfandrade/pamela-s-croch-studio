import { Copy, Check, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const PaymentSection = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "05119849288";

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

  return (
    <section className="container py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-3xl bg-card border border-border shadow-xl">
          {/* Urgent Header */}
          <div className="urgent-badge px-6 py-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <AlertTriangle className="h-5 w-5 animate-pulse" />
              <span className="font-bold text-lg uppercase tracking-wide">
                Não Perca Seu Acesso!
              </span>
              <AlertTriangle className="h-5 w-5 animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Urgency Message */}
            <div className="text-center mb-6">
              <p className="text-xl font-bold text-foreground mb-2">
                VOCÊ TEM APENAS 24 HORAS PARA APROVEITAR!
              </p>
              <p className="text-muted-foreground">
                Depois disso, o acesso será bloqueado automaticamente.
              </p>
            </div>

            {/* Message */}
            <div className="mb-6 p-4 rounded-2xl bg-muted/50 border border-border">
              <p className="text-foreground font-medium mb-3">
                Este curso é <strong>EXCLUSIVO PARA ALUNAS QUE CONFIRMAM O APOIO.</strong>
              </p>
              <p className="text-muted-foreground italic mb-4">
                Já vi muitas mulheres arrependidas por deixarem passar a chance...
              </p>
              <p className="text-primary font-bold text-lg">POR FAVOR:</p>
            </div>

            {/* Instructions */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span className="text-foreground">Faça o Pix simbólico de <strong className="text-primary text-lg">R$ 25,00</strong></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span className="text-foreground">Chave Pix (CPF): <strong>{pixKey}</strong></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span className="text-foreground">Nome: <strong>Victor Figueiredo Andrade</strong></span>
              </div>
              <p className="text-sm text-muted-foreground pl-6 italic">
                (Parte da contribuição destino ao meu filho e seu sonho de cursar direito)
              </p>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span className="text-foreground">Me envie o comprovante na hora</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span className="text-foreground font-bold">Não deixe pra depois!</span>
              </div>
            </div>

            {/* PIX Section Title */}
            <div className="text-center mb-4">
              <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider">
                PIX abaixo conforme o combinado
              </span>
            </div>

            {/* PIX Box */}
            <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-4 mb-6">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Dados para pagamento via PIX
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Chave PIX (CPF)</p>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 rounded-lg bg-card px-4 py-3 font-mono text-lg text-foreground font-bold border border-border">
                      {pixKey}
                    </code>
                    <Button
                      variant="default"
                      size="lg"
                      onClick={copyPixKey}
                      className="shrink-0"
                    >
                      {copied ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copiar
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">Beneficiário</p>
                  <p className="text-base font-bold text-foreground">
                    Victor Figueiredo Andrade
                  </p>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="text-center p-4 rounded-2xl bg-urgent/10 border border-urgent/20 mb-6">
              <p className="text-urgent font-bold flex items-center justify-center gap-2">
                <span>⚠️</span>
                É sério! Você pode perder o acesso de vez.
              </p>
            </div>

            {/* Final Message */}
            <div className="text-center space-y-3">
              <p className="text-foreground font-medium">
                Corre e me avisa pra eu confirmar o seu acesso!
              </p>
              <p className="text-muted-foreground text-sm">
                Esse valor simbólico de R$25,00 ajuda a manter o projeto acessível para mais mulheres. Obrigado pelo seu apoio! 🙏
              </p>
              <p className="text-muted-foreground text-sm">
                Qualquer dúvida, estou aqui! 🐝
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};