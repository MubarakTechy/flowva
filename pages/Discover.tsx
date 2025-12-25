
import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';

const Discover: React.FC = () => {
  const tools = [
    { name: 'Notion', category: 'Productivity', desc: 'The all-in-one workspace for notes and collaboration.', icon: 'https://picsum.photos/seed/notion/100/100' },
    { name: 'Linear', category: 'Engineering', desc: 'The issues and project tracking tool for high-performance teams.', icon: 'https://picsum.photos/seed/linear/100/100' },
    { name: 'Slack', category: 'Communication', desc: 'Where work happens. Bring your team together in channels.', icon: 'https://picsum.photos/seed/slack/100/100' },
    { name: 'Figma', category: 'Design', desc: 'Collaborative interface design for modern teams.', icon: 'https://picsum.photos/seed/figma/100/100' },
    { name: 'Raycast', category: 'Utility', desc: 'The ultra-fast, extensible launcher for Mac.', icon: 'https://picsum.photos/seed/raycast/100/100' },
    { name: 'Grammarly', category: 'Writing', desc: 'AI-powered writing assistant for professionals.', icon: 'https://picsum.photos/seed/grammarly/100/100' },
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h1 className="text-5xl font-black tracking-tight mb-4">Discover.</h1>
            <p className="text-black/40 text-xl font-light">Supercharge your workflow with premium tool integrations.</p>
          </div>
          <div className="flex items-center space-x-4">
             <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                <input type="text" placeholder="Search tools..." className="bg-black/5 border-none rounded-2xl pl-12 pr-6 py-4 focus:ring-2 focus:ring-black outline-none w-full md:w-80" />
             </div>
             <button className="p-4 bg-black/5 rounded-2xl hover:bg-black/10 transition-colors">
                <Filter className="w-5 h-5" />
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <div key={i} className="group p-8 border border-black/5 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-black/5">
                  <img src={tool.icon} alt={tool.name} />
                </div>
                <button className="p-2 border border-black/10 rounded-xl hover:bg-black hover:text-white transition-all opacity-0 group-hover:opacity-100">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <div className="mb-4">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-1 block">{tool.category}</span>
                 <h3 className="text-2xl font-bold">{tool.name}</h3>
              </div>
              <p className="text-black/50 text-sm leading-relaxed flex-grow">{tool.desc}</p>
              <div className="mt-8 pt-8 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs font-bold text-black/40">FREE INTEGRATION</span>
                <button className="text-sm font-bold underline underline-offset-4 hover:opacity-50">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
