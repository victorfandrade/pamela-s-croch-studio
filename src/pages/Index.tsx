import { useState, useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { LessonCard } from "@/components/LessonCard";
import { VideoModal } from "@/components/VideoModal";
import { PaymentModal } from "@/components/PaymentModal";
import { MaterialsSection } from "@/components/MaterialsSection";
import { PaymentSection } from "@/components/PaymentSection";
import { Crown } from "lucide-react";

// Import thumbnails
import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";
import thumb5 from "@/assets/thumb-5.jpg";
import thumb6 from "@/assets/thumb-6.jpg";
import thumb7 from "@/assets/thumb-7.jpg";
import thumb8 from "@/assets/thumb-8.jpg";
import thumb9 from "@/assets/thumb-9.jpg";
import thumb10 from "@/assets/thumb-10.jpg";
import thumb11 from "@/assets/thumb-11.jpg";
import thumb12 from "@/assets/thumb-12.jpg";

interface Lesson {
  number: number;
  title: string;
  url: string;
  thumbnail?: string;
  isPremium?: boolean;
}

const freeLessons: Lesson[] = [
  { number: 1, title: "Vestido Lisa Black Pink", url: "https://youtu.be/nPRnC6QM45M", thumbnail: thumb1 },
  { number: 2, title: "Vestido Verão", url: "https://youtu.be/QLxRBTw2RfE", thumbnail: thumb2 },
  { number: 3, title: "Vestido Poly", url: "https://youtu.be/ujSZmVLieOM", thumbnail: thumb3 },
  { number: 4, title: "Vestido Valentina de Crochê", url: "https://youtu.be/tZW8jPDPxco", thumbnail: thumb4 },
  { number: 5, title: "Saída de Praia Iara", url: "https://youtu.be/AB0VNso1yBo", thumbnail: thumb5 },
  { number: 6, title: "Vestido Vitrais", url: "https://youtu.be/BSw-dczdLfw", thumbnail: thumb6 },
  { number: 7, title: "Vestido Branco", url: "https://drive.google.com/file/d/13wBbHiOR_8_oLPWJ3HmoqIPdHFueK6jy/view", thumbnail: thumb7 },
  { number: 8, title: "Vestido Branca de Neve", url: "https://drive.google.com/file/d/1bPnhgs5N8KRusKlvQPueqym2w0Y8z8jP/view", thumbnail: thumb8 },
  { number: 9, title: "Vestido com Laço", url: "https://drive.google.com/file/d/16ufU8MytgqyPr4Fo7pzAdOO0dRz6LaTa/view", thumbnail: thumb9 },
];

const premiumLessons: Lesson[] = [
  { number: 10, title: "Vestido Natal", url: "", isPremium: true, thumbnail: thumb10 },
  { number: 11, title: "Vestido Moderno", url: "", isPremium: true, thumbnail: thumb11 },
  { number: 12, title: "Vestido Ano Novo", url: "", isPremium: true, thumbnail: thumb12 },
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
      // Premium content - do nothing (no modal)
      return;
    }
    setVideoModal({
      isOpen: true,
      url: lesson.url,
      title: `Aula ${lesson.number.toString().padStart(2, "0")} - ${lesson.title}`,
    });
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
                thumbnail={lesson.thumbnail}
                onClick={() => handleLessonClick(lesson)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Premium Lessons */}
      <section className="container pb-16">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5">
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
                thumbnail={lesson.thumbnail}
                isPremium
                onClick={() => handleLessonClick(lesson)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Materials */}
      <MaterialsSection />

      {/* Payment Section */}
      <PaymentSection />

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