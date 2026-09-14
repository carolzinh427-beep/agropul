import React from 'react';
import { MapPin, Phone, Shield, Cpu } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-12 sm:py-20 bg-black text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Box */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-4">
              
              {/* Logo box */}
              <div className="bg-white p-5 rounded border border-gray-300 max-w-xs mx-auto text-center">
                <div className="inline-flex items-center justify-center font-bold tracking-tighter text-xl mb-1">
                  <span className="bg-black text-white px-2.5 py-1 rounded-sm font-black text-2xl">
                    C
                  </span>
                  <span className="text-black font-extrabold px-2 text-xl tracking-tight">
                    CR AGRO
                  </span>
                </div>
                <div className="text-[10px] uppercase font-extrabold tracking-widest text-black border-t border-gray-300 pt-1 font-mono">
                  pulverizadores
                </div>
              </div>

              {/* Location Box */}
              <div className="bg-black border border-zinc-800 p-3 rounded space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF6B00] font-bold">
                  <MapPin className="w-3.5 h-3.5" /> Alpinópolis - MG
                </div>
                <p className="text-xs font-mono text-zinc-400">CEP: 37940-000</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href="https://wa.me/5535998200364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-zinc-800 border border-zinc-800 p-2.5 rounded flex items-center gap-2 text-xs font-mono text-zinc-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>(35) 99820-0364</span>
                </a>

                <a
                  href="https://instagram.com/cragropulverizadores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-zinc-800 border border-zinc-800 p-2.5 rounded flex items-center gap-2 text-xs font-mono text-zinc-300 transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span className="truncate">@cragropulverizadores</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Information */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase">
              A CR AGRO
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-sans">
              CR AGRO PULVERIZADORES
            </h2>

            <p className="text-sm sm:text-base text-[#FF6B00] font-bold font-mono border-l-2 border-[#FF6B00] pl-3">
              "Equipamentos e soluções para quem trabalha com eficiência no campo."
            </p>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Sediada em Alpinópolis — MG, a CR Agro Pulverizadores atua no fornecimento de equipamentos agrícolas de alta performance e durabilidade. Desenvolvemos pulverizadores turbo e de barras hidráulicas construídos para suportar o trabalho pesado e garantir aplicação precisa e eficiente de defensivos na lavoura.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-zinc-900 border border-zinc-800 p-3 rounded flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white font-mono uppercase">Construção Robusta</h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Chassis reforçados com pintura Epóxi e tanques resistentes.</p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-3 rounded flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white font-mono uppercase">Precisão de Aplicação</h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Sistemas de bombas e comandos calibrados para máxima vazão.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
