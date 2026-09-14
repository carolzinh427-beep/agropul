import React from 'react';
import { Cpu, Wrench, Shield, Compass, Activity, Crosshair, Cog } from 'lucide-react';

export const SolutionsStrip: React.FC = () => {
  const items = [
    { name: 'PULVERIZADORES', icon: Activity },
    { name: 'BARRAS HIDRÁULICAS', icon: Wrench },
    { name: 'GPS', icon: Compass },
    { name: 'MONITORAMENTO', icon: Cpu },
    { name: 'PLANTIO', icon: Crosshair },
    { name: 'PEÇAS', icon: Cog },
    { name: 'ASSISTÊNCIA TÉCNICA', icon: Shield },
  ];

  return (
    <section className="bg-white border-y border-gray-200 py-4 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Navigation Strip */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={item.name}>
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#FF6B00]" />
                  <span className="text-xs font-extrabold tracking-wider text-black uppercase">
                    {item.name}
                  </span>
                </div>
                {index < items.length - 1 && (
                  <span className="text-gray-300 font-bold">•</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile / Tablet Responsive Ticker */}
        <div className="lg:hidden flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded">
                <Icon className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span className="text-[10px] font-bold text-gray-900 uppercase">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
