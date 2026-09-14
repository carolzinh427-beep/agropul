import React from 'react';
import { ArrowUpRight, MessageSquare, PhoneCall, MapPin } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5535998200364?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20CR%20Agro%20Pulverizadores%20e%20solicitar%20um%20or%C3%A7amento.';

  return (
    <section id="contato" className="py-24 bg-[#0B0C0E] bg-tech-grid relative overflow-hidden border-b border-[#2A2E38]">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#14161B] border-2 border-[#FF6B00]/40 rounded-3xl p-8 sm:p-14 text-center space-y-8 shadow-2xl orange-glow relative overflow-hidden">
          
          {/* Top subtle line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent" />

          <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/30 px-4 py-1.5 rounded-full text-xs font-mono font-extrabold text-[#FF6B00]">
            <MessageSquare className="w-4 h-4" /> ATENDIMENTO DIRETO DE FÁBRICA
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-[1.15] font-sans">
            A SOLUÇÃO CERTA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-white">
              COMEÇA COM UMA CONVERSA.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            "Fale com a CR Agro Pulverizadores e solicite seu orçamento."
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FF6B00] hover:bg-[#E05A00] text-white text-sm font-extrabold tracking-widest uppercase px-10 py-5 rounded shadow-2xl orange-glow hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              <PhoneCall className="w-5 h-5" />
              <span>SOLICITAR ORÇAMENTO</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-6 border-t border-[#2A2E38] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FF6B00]" /> Alpinópolis — MG (CEP 37940-000)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-white font-bold">
              WhatsApp: (35) 99820-0364
            </span>
            <span>•</span>
            <span className="text-gray-400">
              @cragropulverizadores
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
