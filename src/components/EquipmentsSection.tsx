import React, { useState } from 'react';
import { EQUIPMENTS, Equipment } from '../data/equipments';
import { EquipmentModal } from './EquipmentModal';
import { ArrowUpRight, Eye, ShieldCheck, Gauge, Layers } from 'lucide-react';

export const EquipmentsSection: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

  return (
    <section id="equipamentos" className="py-24 bg-[#0B0C0E] bg-tech-grid-orange relative border-b border-[#2A2E38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#2A2E38] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1C1F26] border border-[#2A2E38] px-3 py-1 rounded text-xs font-mono text-[#FF6B00] mb-3">
              <Layers className="w-3.5 h-3.5" /> CATÁLOGO INDUSTRIAL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
              EQUIPAMENTOS
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mt-2 max-w-xl">
              "Conheça algumas das soluções da CR Agro Pulverizadores."
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-left md:text-right">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
              FABRICAÇÃO & MONTAGEM
            </span>
            <span className="text-sm font-bold text-white tracking-wider">
              ALPINÓPOLIS — MG
            </span>
          </div>
        </div>

        {/* Large Editorial Equipment Cards Grid */}
        <div className="grid grid-cols-1 gap-12">
          {EQUIPMENTS.map((item, index) => {
            const isEven = index % 2 === 0;
            const whatsappUrl = `https://wa.me/5535998200364?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20do%20equipamento%20${encodeURIComponent(
              item.name
            )}.`;

            return (
              <div
                key={item.id}
                className="bg-[#14161B] border border-[#2A2E38] rounded-2xl overflow-hidden shadow-2xl hover:border-[#FF6B00]/40 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 relative bg-[#0B0C0E] min-h-[320px] sm:min-h-[400px] overflow-hidden ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img
                      src={item.mainImage}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Dark gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14161B] via-transparent to-black/40" />

                    {/* Tag Overlay */}
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#2A2E38] text-[#FF6B00] px-3 py-1 rounded text-xs font-mono font-bold">
                      {item.category}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-gray-300">
                      <span className="bg-[#1C1F26]/90 border border-[#2A2E38] px-2.5 py-1 rounded flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" /> FOTO REAL DO PRODUTO
                      </span>
                      <span className="bg-[#1C1F26]/90 border border-[#2A2E38] px-2.5 py-1 rounded text-white font-bold">
                        ALPINÓPOLIS - MG
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#FF6B00] uppercase font-bold tracking-widest">
                          [ MÁQUINA DE ALTA PERFORMANCE ]
                        </span>
                        <span className="text-xs font-mono text-gray-500">CR AGRO</span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                        {item.name}
                      </h3>

                      <p className="text-sm font-semibold text-[#FF6B00] font-mono">
                        {item.tagline}
                      </p>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Technical highlights summary boxes */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#2A2E38]">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="bg-[#1C1F26] p-3 rounded border border-[#2A2E38]">
                            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{h.label}</p>
                            <p className="text-sm font-extrabold text-white mt-1">{h.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-8 mt-6 border-t border-[#2A2E38]">
                      <button
                        onClick={() => setSelectedEquipment(item)}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1C1F26] hover:bg-[#2A2E38] text-white border border-[#2A2E38] hover:border-[#FF6B00]/60 text-xs font-bold uppercase tracking-wider py-3.5 px-5 rounded transition-all"
                      >
                        <Eye className="w-4 h-4 text-[#FF6B00]" />
                        <span>VER ESPECIFICAÇÕES</span>
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#E05A00] text-white text-xs font-extrabold uppercase tracking-wider py-3.5 px-5 rounded orange-glow shadow-lg transition-all"
                      >
                        <span>SOLICITAR ORÇAMENTO</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Equipment Specification Drawer Modal */}
      <EquipmentModal
        equipment={selectedEquipment}
        onClose={() => setSelectedEquipment(null)}
      />
    </section>
  );
};
