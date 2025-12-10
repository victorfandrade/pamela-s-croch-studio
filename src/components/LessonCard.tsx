import { Play, Lock, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface LessonCardProps {
  number: number;
  title: string;
  thumbnail?: string;
  isPremium?: boolean;
  onClick: () => void;
}

export const LessonCard = ({
  number,
  title,
  thumbnail,
  isPremium = false,
  onClick,
}: LessonCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-300",
        isPremium 
          ? "ring-2 ring-accent/50 cursor-default" 
          : "hover:shadow-xl hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      )}
      style={{ boxShadow: "var(--card-shadow)" }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className={cn(
              "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
              isPremium && "blur-[2px] brightness-95"
            )}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 to-primary/5">
            <span className="font-display text-4xl text-primary/40">
              {number.toString().padStart(2, "0")}
            </span>
          </div>
        )}

        {/* Premium Overlay */}
        {isPremium && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background/95 via-background/60 to-background/30">
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full bg-accent p-3 text-accent-foreground gold-glow">
                <Crown className="h-5 w-5" />
              </div>
              <span className="font-medium text-sm text-foreground">Conteúdo VIP</span>
            </div>
          </div>
        )}

        {/* Play Button Overlay */}
        {!isPremium && (
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/10">
            <div className="rounded-full bg-primary p-4 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90">
              <Play className="h-6 w-6 fill-current" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          <span className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold",
            isPremium 
              ? "bg-accent/20 text-accent" 
              : "bg-primary/15 text-primary"
          )}>
            {isPremium ? <Lock className="h-3.5 w-3.5" /> : number.toString().padStart(2, "0")}
          </span>
          <div className="text-left">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              {isPremium ? "👑 Premium" : `Aula ${number.toString().padStart(2, "0")}`}
            </p>
            <h3 className="font-display text-base font-medium text-foreground line-clamp-1">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};