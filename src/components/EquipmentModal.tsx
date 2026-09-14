import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import { Equipment } from '../data/equipments';

interface EquipmentModalProps {
  equipment: Equipment | null;
  onClose: () => void;
}

export const EquipmentModal: React.FC<EquipmentModalProps> = ({ equipment, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (equipment) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [equipment, onClose]);

  if (!equipment) return null;

  const whatsappUrl = `https://wa.me/5535998200364?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20equipamento%20${encodeURIComponent(
    equipment.name
  )}.`;

  // Group specs by category
  const categories = Array.from(new Set(equipment.specs.map((s) => s.category || 'Geral')));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#14161B] border border-[#2A2E38] rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2E38] bg-[#0B0C0E]/90">
          <div className="flex items-center gap-3">
            <span className="bg-[#FF6B00] text-white font-mono text-xs font-extrabold px-2.5 py-1 rounded">
              ESPECIFICAÇÕES TÉCNICAS
            </span>
            <span className="text-sm font-bold text-gray-300 hidden sm:inline">
              CR AGRO PULVERIZADORES
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded bg-[#1C1F26] border border-[#2A2E38] text-gray-400 hover:text-white hover:border-[#FF6B00] transition-colors"
            aria-label="Fechar especificações"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="overflow-y-auto p-6 space-y-8">
          
          {/* Top Info Banner */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#0B0C0E] border border-[#2A2E38] rounded-lg p-5">
            <div className="md:col-span-5 relative group">
              <img
                src={equipment.mainImage}
                alt={equipment.name}
                className="w-full h-56 object-cover rounded-lg border border-[#2A2E38] bg-[#14161B]"
              />
              <div className="absolute top-2 right-2 bg-black/80 backdrop-blur text-xs font-mono text-[#FF6B00] px-2.5 py-1 rounded border border-[#2A2E38]">
                FOTO REAL CR AGRO
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider font-extrabold">
                  {equipment.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {equipment.name}
                </h2>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  {equipment.description}
                </p>
              </div>

              {/* Highlights badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#2A2E38]">
                {equipment.highlights.map((h, i) => (
                  <div key={i} className="bg-[#1C1F26] p-2 rounded border border-[#2A2E38]">
                    <p className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">{h.label}</p>
                    <p className="text-xs font-extrabold text-white mt-0.5">{h.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Specs Blocks */}
          <div className="space-y-6">
            <h3 className="text-lg font-extrabold text-white uppercase tracking-wider flex items-center gap-2 border-l-4 border-[#FF6B00] pl-3">
              <Cpu className="w-5 h-5 text-[#FF6B00]" /> DADOS TÉCNICOS COMPLETOS
            </h3>

            {categories.map((cat) => {
              const catSpecs = equipment.specs.filter((s) => (s.category || 'Geral') === cat);
              return (
                <div key={cat} className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] font-bold">
                    [ {cat} ]
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {catSpecs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="bg-[#1C1F26] border border-[#2A2E38] hover:border-[#FF6B00]/40 p-3.5 rounded transition-all flex flex-col justify-between"
                      >
                        <span className="text-[11px] font-mono uppercase text-gray-400 tracking-wider">
                          {spec.label}
                        </span>
                        <span className="text-sm font-extrabold text-white mt-1 font-sans">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Machine Photos Showcase inside Modal */}
          {equipment.secondaryImage && (
            <div className="bg-[#0B0C0E] border border-[#2A2E38] rounded-lg p-4 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" /> VISTA COMPLEMENTAR DO EQUIPAMENTO
              </h4>
              <div className="max-w-md mx-auto">
                <img
                  src={equipment.secondaryImage}
                  alt={`${equipment.name} detalhe`}
                  className="w-full h-60 object-cover rounded border border-[#2A2E38] bg-[#14161B]"
                />
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 border-t border-[#2A2E38] bg-[#0B0C0E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-400 font-mono">
            Atendimento direto de fábrica em <span className="text-white font-bold">Alpinópolis - MG</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded bg-[#1C1F26] border border-[#2A2E38] text-gray-300 hover:text-white text-xs font-bold uppercase transition-colors"
            >
              FECHAR
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#E05A00] text-white text-xs font-extrabold tracking-wider uppercase px-6 py-3 rounded orange-glow shadow-lg transition-all"
            >
              <span>SOLICITAR ORÇAMENTO</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
