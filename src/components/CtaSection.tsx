import React from 'react';
import { ArrowUpRight, PhoneCall, MapPin } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5535998200364?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20CR%20Agro%20Pulverizadores%20e%20solicitar%20um%20or%C3%A7amento.';

  return (
    <section id="contato" className="py-12 sm:py-20 bg-black text-white border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 sm:p-10 text-center space-y-5">
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase leading-tight font-sans">
            A SOLUÇÃO CERTA <br />
            <span className="text-[#FF6B00]">COMEÇA COM UMA CONVERSA.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
            "Fale com a CR Agro Pulverizadores e solicite seu orçamento."
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold tracking-wider uppercase px-8 py-3.5 rounded transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>SOLICITAR ORÇAMENTO</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" /> Alpinópolis — MG (CEP 37940-000)
            </span>
            <span>•</span>
            <span className="text-white font-bold">
              (35) 99820-0364
            </span>
            <span>•</span>
            <span>
              @cragropulverizadores
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
