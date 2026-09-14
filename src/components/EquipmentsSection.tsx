import React, { useState } from 'react';
import { EQUIPMENTS, Equipment } from '../data/equipments';
import { EquipmentModal } from './EquipmentModal';
import { ArrowUpRight, Eye } from 'lucide-react';

export const EquipmentsSection: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

  return (
    <section id="equipamentos" className="py-12 sm:py-20 bg-white text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Section Header (No decorative tags) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black uppercase font-sans">
              EQUIPAMENTOS
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-1.5 max-w-xl">
              "Conheça algumas das soluções da CR Agro Pulverizadores."
            </p>
          </div>

          <div className="mt-2 md:mt-0 text-left md:text-right">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block">
              ALPINÓPOLIS — MG
            </span>
          </div>
        </div>

        {/* Equipment List Grid - Compact Mobile Cards */}
        <div className="grid grid-cols-1 gap-8">
          {EQUIPMENTS.map((item, index) => {
            const isEven = index % 2 === 0;
            const whatsappUrl = `https://wa.me/5535998200364?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20do%20equipamento%20${encodeURIComponent(
              item.name
            )}.`;

            return (
              <div
                key={item.id}
                className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:border-gray-400 transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  
                  {/* Image Column - Compact image height on mobile */}
                  <div
                    className={`lg:col-span-6 bg-black relative p-2 sm:p-4 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img
                      src={item.mainImage}
                      alt={item.name}
                      className="w-full h-44 sm:h-64 lg:h-72 object-cover object-center rounded border border-zinc-800"
                    />
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 p-4 sm:p-6 lg:p-8 flex flex-col justify-between space-y-4 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#FF6B00] uppercase font-mono">
                          {item.category}
                        </span>
                        <span className="text-[11px] font-mono text-gray-500">CR AGRO</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight font-sans">
                        {item.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-gray-700 font-mono">
                        {item.tagline}
                      </p>

                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Technical Specs Preview */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-gray-200 mt-3">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="bg-white p-2 rounded border border-gray-200 text-center">
                            <p className="text-[9px] font-mono text-gray-500 uppercase">{h.label}</p>
                            <p className="text-xs font-bold text-black mt-0.5">{h.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-3 border-t border-gray-200">
                      <button
                        onClick={() => setSelectedEquipment(item)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white hover:bg-gray-100 text-black border border-gray-300 text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#FF6B00]" />
                        <span>VER ESPECIFICAÇÕES</span>
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded shadow-sm transition-colors"
                      >
                        <span>SOLICITAR ORÇAMENTO</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
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
