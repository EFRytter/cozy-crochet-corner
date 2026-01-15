import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PatternCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

const difficultyColors = {
  beginner: "bg-sage-light text-sage-dark",
  intermediate: "bg-amber-100 text-amber-800",
  advanced: "bg-rose-100 text-rose-800",
};

const PatternCard = ({
  title,
  image,
  price,
  category,
  difficulty,
}: PatternCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-medium text-foreground leading-tight">
            {title}
          </h3>
          <Badge
            variant="secondary"
            className={`${difficultyColors[difficulty]} text-xs shrink-0`}
          >
            {difficulty}
          </Badge>
        </div>
        <p className="font-body text-sm text-muted-foreground capitalize">
          {category}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-display text-xl font-semibold text-primary">
            ${price.toFixed(2)}
          </span>
          <Button size="sm" variant="subtle">
            View Pattern
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PatternCard;
