import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os equipamentos da CR Agro Pulverizadores.");
  const whatsappUrl = `https://wa.me/5535998200364?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {/* Tooltip Badge */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-2 bg-[#14161B] text-white border border-[#2A2E38] px-3.5 py-2 rounded-full shadow-2xl text-xs font-mono font-bold hover:border-[#FF6B00] transition-all"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span>Fale com a CR Agro</span>
      </a>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group orange-glow-sm"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-green-500 opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-white text-emerald-600" />
      </a>
    </div>
  );
};
