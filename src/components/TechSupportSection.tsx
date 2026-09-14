import React from 'react';
import { Wrench, PhoneCall, ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Clock } from 'lucide-react';

export const TechSupportSection: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5535998200364?text=Ol%C3%A1!%20Preciso%20de%20assist%C3%AAncia%20t%C3%A9cnica%20em%20campo%20para%20equipamento%20da%20CR%20Agro.';

  return (
    <section id="assistencia" className="py-24 bg-[#0B0C0E] relative border-b border-[#2A2E38] overflow-hidden">
      {/* Glow lighting effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#14161B] border border-[#2A2E38] rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/30 px-3.5 py-1.5 rounded text-xs font-mono font-bold text-[#FF6B00]">
                <Wrench className="w-4 h-4" /> ASSISTÊNCIA TÉCNICA EM CAMPO
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-[1.1] font-sans">
                SUPORTE PARA MANTER <br />
                <span className="text-[#FF6B00]">SUA OPERAÇÃO EM MOVIMENTO.</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed border-l-2 border-[#FF6B00] pl-4">
                "Conte com assistência técnica em campo para suporte aos equipamentos e soluções da CR Agro."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-[#1C1F26] p-4 rounded-lg border border-[#2A2E38] flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white font-mono uppercase">Diagnóstico Especializado</h3>
                    <p className="text-xs text-gray-400 mt-1">Avaliação presencial direta do sistema de pulverização e bomba.</p>
                  </div>
                </div>

                <div className="bg-[#1C1F26] p-4 rounded-lg border border-[#2A2E38] flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white font-mono uppercase">Atendimento Regional</h3>
                    <p className="text-xs text-gray-400 mt-1">Suporte ágil direto de Alpinópolis — MG para toda a região.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#FF6B00] hover:bg-[#E05A00] text-white text-xs font-extrabold tracking-widest uppercase px-8 py-4 rounded orange-glow shadow-xl hover:scale-[1.02] transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>FALAR COM UM ESPECIALISTA</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-xs font-mono text-gray-400 text-center sm:text-left flex items-center justify-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FF6B00]" /> Resposta rápida via WhatsApp
                </span>
              </div>

            </div>

            {/* Right Image Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#2A2E38] bg-[#0B0C0E] shadow-2xl group">
                <img
                  src="/images/cr-turbo-400-side.png"
                  alt="Assistência Técnica CR Agro Pulverizadores"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 bg-[#14161B]/95 backdrop-blur border border-[#2A2E38] p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-[#FF6B00] uppercase font-bold">MANUTENÇÃO & PEÇAS</p>
                      <p className="text-sm font-extrabold text-white mt-0.5">CR AGRO ALPINÓPOLIS</p>
                    </div>
                    <span className="text-xs font-mono bg-[#1C1F26] border border-[#2A2E38] text-gray-300 px-3 py-1 rounded">
                      (35) 99820-0364
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
