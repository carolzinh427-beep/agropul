import React, { useEffect } from 'react';
import { X, ArrowUpRight, Cpu } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-black border border-zinc-800 rounded-lg shadow-2xl overflow-hidden flex flex-col z-10 text-white">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900">
          <div className="flex items-center gap-2">
            <span className="bg-[#FF6B00] text-white font-mono text-[11px] font-bold px-2 py-0.5 rounded">
              ESPECIFICAÇÕES TÉCNICAS
            </span>
            <span className="text-xs font-bold text-zinc-300 hidden sm:inline">
              {equipment.name}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded bg-zinc-800 text-zinc-400 hover:text-white"
            aria-label="Fechar especificações"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Top Info Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-zinc-900 border border-zinc-800 rounded p-3 sm:p-4">
            <div className="md:col-span-5">
              <img
                src={equipment.mainImage}
                alt={equipment.name}
                className="w-full h-36 sm:h-48 object-cover rounded border border-zinc-800 bg-black"
              />
            </div>

            <div className="md:col-span-7 space-y-2">
              <span className="text-xs font-mono text-[#FF6B00] uppercase font-bold">
                {equipment.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                {equipment.name}
              </h2>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {equipment.description}
              </p>

              {/* Highlights badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-2 border-t border-zinc-800">
                {equipment.highlights.map((h, i) => (
                  <div key={i} className="bg-black p-1.5 rounded border border-zinc-800 text-center">
                    <p className="text-[8px] font-mono text-zinc-400 uppercase">{h.label}</p>
                    <p className="text-xs font-bold text-white mt-0.5">{h.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Specs Blocks */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5 border-l-2 border-[#FF6B00] pl-2">
              <Cpu className="w-4 h-4 text-[#FF6B00]" /> ESPECIFICAÇÕES DETALHADAS
            </h3>

            {categories.map((cat) => {
              const catSpecs = equipment.specs.filter((s) => (s.category || 'Geral') === cat);
              return (
                <div key={cat} className="space-y-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#FF6B00] font-bold">
                    {cat}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {catSpecs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="bg-zinc-900 border border-zinc-800 p-2.5 rounded flex flex-col justify-between"
                      >
                        <span className="text-[10px] font-mono uppercase text-zinc-400">
                          {spec.label}
                        </span>
                        <span className="text-xs font-bold text-white mt-0.5">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="px-4 py-3 border-t border-zinc-800 bg-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[10px] font-mono text-zinc-400">
            Alpinópolis - MG
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-3 py-2 rounded bg-black border border-zinc-800 text-zinc-300 text-xs font-bold uppercase"
            >
              FECHAR
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold uppercase px-4 py-2 rounded transition-colors"
            >
              <span>SOLICITAR ORÇAMENTO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
