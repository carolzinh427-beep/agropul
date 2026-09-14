import React from 'react';
import { Cpu, Wrench, Compass, Activity, Crosshair, Cog, ArrowRight, ShieldCheck } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5535998200364?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20CR%20Agro.';

  const solutions = [
    {
      title: 'Pulverizadores Agrícolas',
      category: 'EQUIPAMENTOS',
      icon: Activity,
      description: 'Pulverizadores turbo e de barras projetados para máxima eficiência de calda, redução de desperdício e cobertura uniforme da lavoura.',
      features: ['Modelos turbo acoplados e de arraste', 'Tanques em Polietileno e Fibra de Vidro', 'Comandos de 2 vias VAR de alta vazão'],
      accent: 'border-l-4 border-l-[#FF6B00]',
    },
    {
      title: 'Barras Hidráulicas',
      category: 'ESTRUTURAS DE APLICAÇÃO',
      icon: Wrench,
      description: 'Sistemas de barras hidráulicas dobráveis e reforçadas para alto rendimento operacional com regulagem precisa de altura e abertura.',
      features: ['Alcance de 2,35m a 3,62m', 'Acionamento hidráulico suave', 'Chassi reforçado com pintura Epóxi'],
      accent: 'border-l-4 border-l-white',
    },
    {
      title: 'GPS Agrícola de Precisão',
      category: 'TECNOLOGIA E NAVEGAÇÃO',
      icon: Compass,
      description: 'Oriente suas passadas no campo eliminando sobreposições e falhas de aplicação de defensivos ou fertilizantes.',
      features: ['Orientação por coordenadas e satélite', 'Maior economia de insumos', 'Integração facilitada'],
      accent: 'border-l-4 border-l-gray-500',
    },
    {
      title: 'Monitoramento & Plantio',
      category: 'AUTOMAÇÃO',
      icon: Cpu,
      description: 'Sistemas inteligentes para controle de fluxo de sementes, pressão de pulverização e monitoramento instantâneo em cabine.',
      features: ['Telemetria e controle de vazão', 'Alertas instantâneos de entupimento', 'Otimização de tempo e recursos'],
      accent: 'border-l-4 border-l-[#FF6B00]',
    },
    {
      title: 'Micron / Plantadeiras',
      category: 'SOLUÇÕES DE SEGUNDA LINHA',
      icon: Crosshair,
      description: 'Kits e componentes Micron para pulverização ultrabaixo volume e adaptações de precisão para plantadeiras.',
      features: ['Gotas de tamanho uniforme', 'Aplicação concentrada', 'Componentes de alta resistência'],
      accent: 'border-l-4 border-l-white',
    },
    {
      title: 'Peças & Reposição Original',
      category: 'COMPONENTES',
      icon: Cog,
      description: 'Estoque de peças originais para pronta entrega: bombas, filtros FVS, comandos VAR, bicos, mangueiras e conexões de alta pressão.',
      features: ['Filtros de sucção FVS 100 e FVS 200', 'Bombas AG40 e AG1000', 'Pronta entrega com envio rápido'],
      accent: 'border-l-4 border-l-gray-500',
    },
  ];

  return (
    <section id="solucoes" className="py-24 bg-[#121418] bg-tech-grid relative border-b border-[#2A2E38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#1C1F26] border border-[#2A2E38] px-3 py-1 rounded text-xs font-mono text-[#FF6B00]">
            <ShieldCheck className="w-4 h-4" /> TECNOLOGIA INTEGRADA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            SOLUÇÕES PARA O CAMPO
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            "Desenvolvemos e fornecemos tecnologias e estruturas projetadas para elevar o rendimento do produtor rural."
          </p>
        </div>

        {/* Asymmetrical 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.title}
                className={`bg-[#14161B] border border-[#2A2E38] p-6 sm:p-8 rounded-xl shadow-xl hover:border-[#FF6B00]/50 transition-all duration-300 flex flex-col justify-between group ${sol.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#1C1F26] border border-[#2A2E38] rounded-lg group-hover:border-[#FF6B00] transition-colors">
                      <Icon className="w-6 h-6 text-[#FF6B00]" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 bg-[#0B0C0E] border border-[#2A2E38] px-2.5 py-1 rounded tracking-wider">
                      {sol.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2 font-sans group-hover:text-[#FF6B00] transition-colors">
                    {sol.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {sol.description}
                  </p>

                  <ul className="space-y-2 border-t border-[#2A2E38] pt-4 mb-6">
                    {sol.features.map((feat, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-center gap-2 font-mono">
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
                  className="inline-flex items-center justify-between text-xs font-bold text-gray-300 group-hover:text-[#FF6B00] tracking-wider uppercase pt-4 border-t border-[#2A2E38] transition-colors"
                >
                  <span>CONSULTAR SOLUÇÃO</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
