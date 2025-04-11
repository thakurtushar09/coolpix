import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CircleUserRound } from "lucide-react";

export function CardSpotlightDemo() {
  return (
    <CardSpotlight className="h-96 w-96 flex flex-col items-center justify-center p-8 gap-6">
      <div className="p-4 rounded-full bg-primary/10">
        <CircleUserRound size={48} className="text-primary" />
      </div>
      
      <h3 className="text-2xl font-bold text-center">Professional Services</h3>
      
      <p className="text-muted-foreground text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
    </CardSpotlight>
  );
}