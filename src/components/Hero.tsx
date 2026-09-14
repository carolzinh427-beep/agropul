import React from 'react';
import { ArrowUpRight, MapPin, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5535998200364?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20equipamentos%20da%20CR%20Agro.';

  return (
    <section id="inicio" className="bg-black text-white pt-24 pb-12 sm:pt-32 sm:pb-20 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content Area */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Location & Brand label */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-[#FF6B00] font-bold uppercase">CR AGRO PULVERIZADORES</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin className="w-3 h-3 text-[#FF6B00]" /> ALPINÓPOLIS — MG
              </span>
            </div>

            {/* Main Headline (Solid colors, no gradient) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
              TECNOLOGIA E PRECISÃO <br className="hidden sm:inline" />
              <span className="text-[#FF6B00]">PARA O CAMPO.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-zinc-300 max-w-xl leading-relaxed border-l-2 border-[#FF6B00] pl-3.5">
              "Equipamentos e soluções agrícolas para tornar sua operação mais eficiente, precisa e produtiva."
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold tracking-wider uppercase px-6 py-3.5 rounded transition-colors"
              >
                <span>SOLICITAR ORÇAMENTO</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#equipamentos"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-xs font-bold tracking-wider uppercase px-6 py-3.5 rounded transition-colors"
              >
                <span>VER EQUIPAMENTOS</span>
              </a>
            </div>

            {/* Key Info Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-900">
              <div>
                <span className="text-[10px] text-zinc-500 font-mono uppercase block">ESTRUTURA</span>
                <span className="text-xs font-bold text-zinc-200">Chassi Epóxi PO</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 font-mono uppercase block">DESEMPENHO</span>
                <span className="text-xs font-bold text-zinc-200">Até 500 ha</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[10px] text-zinc-500 font-mono uppercase block">ATENDIMENTO</span>
                <span className="text-xs font-bold text-zinc-200">Alpinópolis - MG</span>
              </div>
            </div>

          </div>

          {/* Featured Hero Machine (Compact on Mobile) */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 sm:p-4 max-w-md mx-auto lg:max-w-none">
              
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 text-xs font-mono">
                <span className="text-zinc-200 font-bold">CR-TURBO 2000</span>
                <span className="text-[#FF6B00]">2000 L</span>
              </div>

              {/* Real Equipment Image - Compact height on mobile */}
              <div className="relative bg-black rounded overflow-hidden border border-zinc-800">
                <img
                  src="/images/cr-turbo-2000-trailed.png"
                  alt="CR-TURBO 2000"
                  className="w-full h-44 sm:h-64 object-cover object-center"
                />
              </div>

              {/* Secondary thumbnail preview grid */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-black border border-zinc-800 rounded p-1.5 flex items-center gap-2">
                  <img
                    src="/images/cr-turbo-400-fan.png"
                    alt="CR-TURBO 400"
                    className="w-10 h-10 object-cover rounded bg-zinc-900 shrink-0"
                  />
                  <div className="truncate">
                    <p className="text-[11px] font-bold text-white truncate">CR-TURBO 400</p>
                    <p className="text-[9px] text-zinc-400 font-mono">400 L</p>
                  </div>
                </div>

                <div className="bg-black border border-zinc-800 rounded p-1.5 flex items-center gap-2">
                  <img
                    src="/images/cr-ph-400-mounted.png"
                    alt="CR-PH 400"
                    className="w-10 h-10 object-cover rounded bg-zinc-900 shrink-0"
                  />
                  <div className="truncate">
                    <p className="text-[11px] font-bold text-white truncate">CR-PH 400</p>
                    <p className="text-[9px] text-zinc-400 font-mono">Barras</p>
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
