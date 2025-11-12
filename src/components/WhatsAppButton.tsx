import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "5511999999999"; // Replace with actual Sebrae WhatsApp number
    const whatsappMessage = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços do Sebrae.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 p-0"
            aria-label="Contato via WhatsApp"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-foreground text-background">
          <p className="font-medium">Fale conosco no WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;
