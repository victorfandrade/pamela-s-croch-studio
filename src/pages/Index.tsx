import { useState, useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { LessonCard } from "@/components/LessonCard";
import { VideoModal } from "@/components/VideoModal";
import { PaymentModal } from "@/components/PaymentModal";
import { MaterialsSection } from "@/components/MaterialsSection";
import { Crown } from "lucide-react";

interface Lesson {
  number: number;
  title: string;
  url: string;
  isPremium?: boolean;
}

const freeLessons: Lesson[] = [
  { number: 1, title: "Vestido Lisa Black Pink", url: "https://youtu.be/nPRnC6QM45M" },
  { number: 2, title: "Técnicas Básicas de Crochê", url: "https://youtu.be/QLxRBTw2RfE" },
  { number: 3, title: "Pontos Fundamentais", url: "https://youtu.be/ujSZmVLieOM" },
  { number: 4, title: "Montagem de Peças", url: "https://youtu.be/tZW8jPDPxco" },
  { number: 5, title: "Acabamentos Profissionais", url: "https://youtu.be/AB0VNso1yBo" },
  { number: 6, title: "Técnicas Avançadas", url: "https://youtu.be/BSw-dczdLfw" },
  { number: 7, title: "Modelagem Especial", url: "https://drive.google.com/file/d/13wBbHiOR_8_oLPWJ3HmoqIPdHFueK6jy/view" },
  { number: 8, title: "Detalhes Decorativos", url: "https://drive.google.com/file/d/1bPnhgs5N8KRusKlvQPueqym2w0Y8z8jP/view" },
  { number: 9, title: "Projeto Completo", url: "https://drive.google.com/file/d/16ufU8MytgqyPr4Fo7pzAdOO0dRz6LaTa/view" },
];

const premiumLessons: Lesson[] = [
  { number: 10, title: "Vestido Exclusivo VIP", url: "", isPremium: true },
  { number: 11, title: "Técnicas Secretas", url: "", isPremium: true },
  { number: 12, title: "Masterclass Final", url: "", isPremium: true },
];

const Index = () => {
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; url: string; title: string }>({
    isOpen: false,
    url: "",
    title: "",
  });
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const lessonsRef = useRef<HTMLElement>(null);

  const scrollToLessons = () => {
    lessonsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLessonClick = (lesson: Lesson) => {
    if (lesson.isPremium) {
      setPaymentModalOpen(true);
    } else {
      setVideoModal({
        isOpen: true,
        url: lesson.url,
        title: `Aula ${lesson.number.toString().padStart(2, "0")} - ${lesson.title}`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <HeroSection onStartClick={scrollToLessons} />

      {/* Free Lessons */}
      <section ref={lessonsRef} className="container py-16 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-3">
            Aulas do Curso
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Assista às aulas gratuitas e aprenda técnicas profissionais de crochê
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {freeLessons.map((lesson, i) => (
            <div
              key={lesson.number}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <LessonCard
                number={lesson.number}
                title={lesson.title}
                onClick={() => handleLessonClick(lesson)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Premium Lessons */}
      <section className="container pb-16">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5">
            <Crown className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Conteúdo Premium
            </span>
          </div>
          <h2 className="font-display text-3xl font-semibold text-foreground mb-3">
            Aulas Exclusivas VIP
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Desbloqueie técnicas avançadas e conteúdos exclusivos
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
          {premiumLessons.map((lesson, i) => (
            <div
              key={lesson.number}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${(i + freeLessons.length) * 50}ms` }}
            >
              <LessonCard
                number={lesson.number}
                title={lesson.title}
                isPremium
                onClick={() => handleLessonClick(lesson)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Materials */}
      <MaterialsSection />

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Crochê da Pâmela. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ isOpen: false, url: "", title: "" })}
        videoUrl={videoModal.url}
        title={videoModal.title}
      />

      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      />
    </div>
  );
};

export default Index;
