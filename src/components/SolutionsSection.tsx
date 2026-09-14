import React from 'react';
import { Cpu, Wrench, Compass, Activity, Crosshair, Cog, ArrowRight } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5535998200364?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20CR%20Agro.';

  const solutions = [
    {
      title: 'Pulverizadores Agrícolas',
      category: 'EQUIPAMENTOS',
      icon: Activity,
      description: 'Pulverizadores turbo e de barras projetados para máxima eficiência de calda, redução de desperdício e cobertura uniforme da lavoura.',
      features: ['Modelos turbo acoplados e de arraste', 'Tanques em Polietileno e Fibra de Vidro', 'Comandos de 2 vias VAR de alta vazão'],
    },
    {
      title: 'Barras Hidráulicas',
      category: 'ESTRUTURAS',
      icon: Wrench,
      description: 'Sistemas de barras hidráulicas dobráveis e reforçadas para alto rendimento operacional com regulagem precisa de altura e abertura.',
      features: ['Alcance de 2,35m a 3,62m', 'Acionamento hidráulico suave', 'Chassi reforçado com pintura Epóxi'],
    },
    {
      title: 'GPS Agrícola de Precisão',
      category: 'TECNOLOGIA',
      icon: Compass,
      description: 'Oriente suas passadas no campo eliminando sobreposições e falhas de aplicação de defensivos ou fertilizantes.',
      features: ['Orientação por coordenadas e satélite', 'Maior economia de insumos', 'Integração facilitada'],
    },
    {
      title: 'Monitoramento & Plantio',
      category: 'AUTOMAÇÃO',
      icon: Cpu,
      description: 'Sistemas inteligentes para controle de fluxo de sementes, pressão de pulverização e monitoramento instantâneo em cabine.',
      features: ['Telemetria e controle de vazão', 'Alertas instantâneos de entupimento', 'Otimização de tempo e recursos'],
    },
    {
      title: 'Micron / Plantadeiras',
      category: 'SOLUÇÕES',
      icon: Crosshair,
      description: 'Kits e componentes Micron para pulverização ultrabaixo volume e adaptações de precisão para plantadeiras.',
      features: ['Gotas de tamanho uniforme', 'Aplicação concentrada', 'Componentes de alta resistência'],
    },
    {
      title: 'Peças & Reposição Original',
      category: 'COMPONENTES',
      icon: Cog,
      description: 'Estoque de peças originais para pronta entrega: bombas, filtros FVS, comandos VAR, bicos, mangueiras e conexões de alta pressão.',
      features: ['Filtros de sucção FVS 100 e FVS 200', 'Bombas AG40 e AG1000', 'Pronta entrega com envio rápido'],
    },
  ];

  return (
    <section id="solucoes" className="py-12 sm:py-20 bg-black text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-zinc-800">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
            SOLUÇÕES PARA O CAMPO
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-1.5 max-w-2xl">
            "Desenvolvemos e fornecemos tecnologias e estruturas projetadas para elevar o rendimento do produtor rural."
          </p>
        </div>

        {/* Structured 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.title}
                className="bg-zinc-900 border border-zinc-800 p-5 sm:p-6 rounded-lg flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-black border border-zinc-800 rounded">
                      <Icon className="w-5 h-5 text-[#FF6B00]" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">
                      {sol.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-sans">
                    {sol.title}
                  </h3>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {sol.description}
                  </p>

                  <ul className="space-y-1.5 border-t border-zinc-800 pt-3 mb-4">
                    {sol.features.map((feat, i) => (
                      <li key={i} className="text-xs text-zinc-400 flex items-center gap-2 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-bold text-zinc-300 hover:text-[#FF6B00] uppercase pt-3 border-t border-zinc-800 transition-colors"
                >
                  <span>CONSULTAR SOLUÇÃO</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
