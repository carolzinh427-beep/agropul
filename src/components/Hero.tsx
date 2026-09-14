import React from 'react';
import { ArrowUpRight, ChevronDown, MapPin, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5535998200364?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20equipamentos%20da%20CR%20Agro.';

  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-16 flex items-center bg-[#0B0C0E] bg-tech-grid overflow-hidden border-b border-[#2A2E38]">
      {/* Background glow & lighting elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF6B00]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle overlay graphics */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-[#0B0C0E]/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Area */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 pt-4">
            
            {/* Discrete Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1C1F26] border border-[#2A2E38] px-3.5 py-1.5 rounded text-xs font-mono tracking-wider text-[#FF6B00]">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span className="font-extrabold uppercase">CR AGRO PULVERIZADORES</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-300 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#FF6B00]" /> ALPINÓPOLIS — MG
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
              TECNOLOGIA E PRECISÃO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-white">
                PARA O CAMPO.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed border-l-2 border-[#FF6B00] pl-4">
              "Equipamentos e soluções agrícolas para tornar sua operação mais eficiente, precisa e produtiva."
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#FF6B00] hover:bg-[#E05A00] text-white text-sm font-extrabold tracking-widest uppercase px-8 py-4 rounded shadow-xl orange-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>SOLICITAR ORÇAMENTO</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="#equipamentos"
                className="inline-flex items-center justify-center gap-2 bg-[#1C1F26] hover:bg-[#2A2E38] text-gray-200 hover:text-white border border-[#2A2E38] hover:border-[#FF6B00]/50 text-sm font-bold tracking-widest uppercase px-7 py-4 rounded transition-all"
              >
                <span>VER EQUIPAMENTOS</span>
              </a>
            </div>

            {/* Key feature highlights under Hero */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#2A2E38]/80 w-full mt-4">
              <div>
                <div className="text-xs text-gray-400 font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FF6B00]" /> ESTRUTURA REFORÇADA
                </div>
                <div className="text-sm font-bold text-white mt-1">Chassi Industrial & Epóxi</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#FF6B00]" /> ALTA PRODUTIVIDADE
                </div>
                <div className="text-sm font-bold text-white mt-1">Até 500 ha de Cobertura</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-xs text-gray-400 font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#FF6B00]" /> SUPORTE REGIONAL
                </div>
                <div className="text-sm font-bold text-white mt-1">Assistência em Alpinópolis</div>
              </div>
            </div>

          </div>

          {/* Featured Hero Product Spotlight (Real CR Agro Equipment) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B00] to-gray-700 rounded-xl opacity-30 blur-sm" />

              <div className="relative bg-[#14161B] border border-[#2A2E38] rounded-xl overflow-hidden shadow-2xl p-4">
                
                {/* Product Badge Header */}
                <div className="flex items-center justify-between border-b border-[#2A2E38] pb-3 mb-3">
                  <span className="text-xs font-mono text-[#FF6B00] uppercase font-bold tracking-widest flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B00]" /> MÁQUINA DE DESTAQUE
                  </span>
                  <span className="text-[11px] font-mono bg-[#1C1F26] border border-[#2A2E38] text-gray-300 px-2 py-0.5 rounded">
                    CR-TURBO 2000
                  </span>
                </div>

                {/* Main Hero Real Image */}
                <div className="relative bg-[#0B0C0E] rounded-lg overflow-hidden border border-[#2A2E38] group">
                  <img
                    src="/images/cr-turbo-2000-trailed.png"
                    alt="CR Agro Pulverizador CR-TURBO 2000"
                    className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-gray-400">TANQUE FIBRA DE VIDRO</span>
                      <p className="text-lg font-extrabold text-white">CR-TURBO 2000 L</p>
                    </div>
                    <span className="bg-[#FF6B00] text-white font-mono text-xs font-extrabold px-3 py-1 rounded shadow">
                      270 km/h AR
                    </span>
                  </div>
                </div>

                {/* Secondary real image preview strip */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="bg-[#0B0C0E] border border-[#2A2E38] rounded p-2 flex items-center gap-3">
                    <img
                      src="/images/cr-turbo-400-fan.png"
                      alt="CR-TURBO 400"
                      className="w-14 h-14 object-cover rounded bg-black"
                    />
                    <div>
                      <p className="text-xs font-extrabold text-white">CR-TURBO 400</p>
                      <p className="text-[10px] text-gray-400 font-mono">Ventilador 725mm</p>
                    </div>
                  </div>

                  <div className="bg-[#0B0C0E] border border-[#2A2E38] rounded p-2 flex items-center gap-3">
                    <img
                      src="/images/cr-ph-400-mounted.png"
                      alt="CR-PH 400"
                      className="w-14 h-14 object-cover rounded bg-black"
                    />
                    <div>
                      <p className="text-xs font-extrabold text-white">CR-PH 400</p>
                      <p className="text-[10px] text-gray-400 font-mono">Barras Hidráulicas</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">ROLE PARA CONHECER</span>
        <ChevronDown className="w-4 h-4 text-[#FF6B00] animate-bounce" />
      </div>
    </section>
  );
};
