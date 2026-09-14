import React from 'react';
import { Wrench, PhoneCall, ArrowUpRight, ShieldCheck, MapPin, Clock } from 'lucide-react';

export const TechSupportSection: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5535998200364?text=Ol%C3%A1!%20Preciso%20de%20assist%C3%AAncia%20t%C3%A9cnica%20em%20campo%20para%20equipamento%20da%20CR%20Agro.';

  return (
    <section id="assistencia" className="py-12 sm:py-20 bg-white text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Content Area */}
          <div className="lg:col-span-7 space-y-4">
            
            <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase">
              ASSISTÊNCIA TÉCNICA EM CAMPO
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-black uppercase leading-tight font-sans">
              SUPORTE PARA MANTER <br className="hidden sm:inline" />
              <span className="text-[#FF6B00]">SUA OPERAÇÃO EM MOVIMENTO.</span>
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed border-l-2 border-[#FF6B00] pl-3">
              "Conte com assistência técnica em campo para suporte aos equipamentos e soluções da CR Agro."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-gray-50 border border-gray-200 p-3 rounded flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-black font-mono uppercase">Diagnóstico Especializado</h3>
                  <p className="text-xs text-gray-600 mt-0.5">Avaliação presencial direta do sistema de pulverização.</p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-3 rounded flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-black font-mono uppercase">Atendimento Regional</h3>
                  <p className="text-xs text-gray-600 mt-0.5">Suporte ágil direto de Alpinópolis — MG para a região.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold tracking-wider uppercase px-6 py-3.5 rounded transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>FALAR COM UM ESPECIALISTA</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="text-xs font-mono text-gray-500 text-center sm:text-left flex items-center justify-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#FF6B00]" /> Resposta via WhatsApp
              </span>
            </div>

          </div>

          {/* Right Image Visual - Compact on Mobile */}
          <div className="lg:col-span-5">
            <div className="bg-black p-2 rounded-lg border border-gray-300 shadow-sm">
              <img
                src="/images/cr-turbo-400-side.png"
                alt="Assistência Técnica CR Agro"
                className="w-full h-44 sm:h-64 lg:h-72 object-cover rounded"
              />
              <div className="p-3 bg-zinc-900 border-t border-zinc-800 rounded-b flex items-center justify-between text-xs text-white font-mono mt-2">
                <span>CR AGRO ALPINÓPOLIS</span>
                <span className="text-[#FF6B00] font-bold">(35) 99820-0364</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
