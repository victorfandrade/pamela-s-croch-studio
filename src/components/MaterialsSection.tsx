import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export const MaterialsSection = () => {
  const driveLink =
    "https://drive.google.com/drive/folders/1PNMb0jry1HOuh5CsbdVOw0xCd7-aBSnn";

  return (
    <section className="container py-16">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/10">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Icon */}
            <div className="shrink-0">
              <div className="rounded-2xl bg-primary/10 p-6">
                <FileText className="h-12 w-12 text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
                📚 Mais de 100 Moldes de Vestidos Adultos
              </h2>
              <p className="text-muted-foreground max-w-lg">
                Acesse nossa biblioteca completa de moldes profissionais para
                criar peças incríveis. Downloads gratuitos em alta qualidade.
              </p>
            </div>

            {/* Button */}
            <div className="shrink-0">
              <Button
                variant="hero"
                size="lg"
                asChild
              >
                <a
                  href={driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" />
                  Baixar no Drive
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
