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
    <section className="bg-[#121418] border-y border-[#2A2E38] py-5 overflow-hidden shadow-inner relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Layout - Horizontal Line Grid */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={item.name}>
                <div className="flex items-center gap-2.5 group cursor-default">
                  <div className="p-1.5 rounded bg-[#1C1F26] border border-[#2A2E38] group-hover:border-[#FF6B00] transition-colors">
                    <Icon className="w-4 h-4 text-[#FF6B00]" />
                  </div>
                  <span className="text-xs font-extrabold tracking-widest text-gray-200 group-hover:text-white transition-colors font-sans uppercase">
                    {item.name}
                  </span>
                </div>
                {index < items.length - 1 && (
                  <div className="h-4 w-[1px] bg-[#2A2E38]" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile & Tablet Layout - Responsive Ticker / Grid */}
        <div className="lg:hidden flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="flex items-center gap-2 bg-[#1C1F26] border border-[#2A2E38] px-3 py-1.5 rounded-sm">
                <Icon className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span className="text-[11px] font-bold tracking-wider text-gray-200 uppercase">
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
