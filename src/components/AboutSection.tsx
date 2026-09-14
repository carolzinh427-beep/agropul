import React from 'react';
import { MapPin, Phone, CheckCircle, Shield, Cpu, Factory } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#0B0C0E] bg-tech-grid relative border-b border-[#2A2E38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Logo Visual Frame */}
          <div className="lg:col-span-5">
            <div className="bg-[#14161B] border border-[#2A2E38] rounded-2xl p-8 relative overflow-hidden shadow-2xl space-y-6">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/10 rounded-full blur-2xl" />

              {/* High precision logo box matching real logo */}
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-xs mx-auto border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center font-bold tracking-tighter text-2xl mb-2">
                  <span className="bg-black text-white px-3 py-1.5 rounded font-black text-3xl">
                    C
                  </span>
                  <span className="text-black font-extrabold px-3 text-2xl tracking-tight">
                    CR AGRO
                  </span>
                </div>
                <div className="text-xs uppercase font-extrabold tracking-widest text-black border-t border-gray-300 pt-2 font-mono">
                  pulverizadores
                </div>
              </div>

              {/* Location Badge */}
              <div className="bg-[#1C1F26] border border-[#2A2E38] p-4 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B00] font-bold">
                  <MapPin className="w-4 h-4" /> LOCALIZAÇÃO SEDE
                </div>
                <p className="text-sm font-bold text-white">Alpinópolis - MG</p>
                <p className="text-xs font-mono text-gray-400">CEP: 37940-000</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://wa.me/5535998200364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1C1F26] hover:bg-[#2A2E38] border border-[#2A2E38] p-3 rounded-lg flex items-center gap-2 text-xs font-mono text-gray-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FF6B00]" />
                  <span>(35) 99820-0364</span>
                </a>

                <a
                  href="https://instagram.com/cragropulverizadores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1C1F26] hover:bg-[#2A2E38] border border-[#2A2E38] p-3 rounded-lg flex items-center gap-2 text-xs font-mono text-gray-200 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#FF6B00]" />
                  <span>@cragropulverizadores</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Institutional Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#1C1F26] border border-[#2A2E38] px-3.5 py-1.5 rounded text-xs font-mono text-[#FF6B00] font-bold">
              <Factory className="w-4 h-4" /> A CR AGRO
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase font-sans">
              CR AGRO PULVERIZADORES
            </h2>

            <p className="text-lg sm:text-xl text-[#FF6B00] font-bold font-mono border-l-4 border-[#FF6B00] pl-4">
              "Equipamentos e soluções para quem trabalha com eficiência no campo."
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Sediada em Alpinópolis — MG, a CR Agro Pulverizadores atua no fornecimento de equipamentos agrícolas de alta performance e durabilidade. Desenvolvemos pulverizadores turbo e de barras hidráulicas construídos para suportar o trabalho pesado e garantir aplicação precisa e eficiente de defensivos na lavoura.
            </p>

            {/* Core commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-[#14161B] border border-[#2A2E38] p-4 rounded-xl flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white font-mono uppercase">Construção Robusta</h3>
                  <p className="text-xs text-gray-400 mt-1">Chassis reforçados com pintura Epóxi e tanques de alta durabilidade.</p>
                </div>
              </div>

              <div className="bg-[#14161B] border border-[#2A2E38] p-4 rounded-xl flex items-start gap-3">
                <Cpu className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white font-mono uppercase">Precisão de Aplicação</h3>
                  <p className="text-xs text-gray-400 mt-1">Sistemas de bombas e comandos calibrados para máxima vazão e economia.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
