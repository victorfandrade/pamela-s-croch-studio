import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const getEmbedUrl = (url: string): string => {
  // YouTube
  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/
  );
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`;
  }

  // Google Drive
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (driveMatch) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }

  return url;
};

export const VideoModal = ({
  isOpen,
  onClose,
  videoUrl,
  title,
}: VideoModalProps) => {
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
        className="relative z-10 w-full max-w-4xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl text-background">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-full bg-background/10 p-2 text-background transition-colors hover:bg-background/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Container */}
        <div className="aspect-video overflow-hidden rounded-2xl bg-foreground shadow-2xl">
          <iframe
            src={getEmbedUrl(videoUrl)}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        </div>
      </div>
    </div>
  );
};
