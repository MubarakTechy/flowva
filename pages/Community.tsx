
import React from 'react';
import { Users, MessageSquare, Globe, Heart } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Build with others.</h1>
        <p className="text-xl text-black/50 max-w-2xl mx-auto font-light leading-relaxed">
           Connect with thousands of professionals around the world. Share your flow, join squads, and grow together.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
        <CommunityStat icon={<Users />} label="Active Members" value="50k+" />
        <CommunityStat icon={<MessageSquare />} label="Daily Threads" value="1.2k" />
        <CommunityStat icon={<Globe />} label="Countries" value="120+" />
        <CommunityStat icon={<Heart />} label="Success Stories" value="8k+" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-black text-white rounded-[40px] p-12 md:p-20">
           <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">The Flowva Squads.</h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Join niche groups based on your profession. Whether you're a React developer, a UX researcher, or a digital marketer, there's a squad waiting for you to help hit those productivity milestones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <button className="bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-white/90 transition-all">Join Discord</button>
                 <button className="border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all">View All Squads</button>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <SquadIcon label="Designers" count="12k" />
                <SquadIcon label="Indie Hackers" count="8k" />
                <SquadIcon label="Writers" count="5k" />
              </div>
              <div className="space-y-4 mt-8">
                <SquadIcon label="Engineers" count="15k" />
                <SquadIcon label="Creators" count="9k" />
                <SquadIcon label="Founders" count="4k" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const CommunityStat: React.FC<{ icon: React.ReactNode, label: string, value: string }> = ({ icon, label, value }) => (
  <div className="text-center p-8 border border-black/5 rounded-3xl">
    <div className="inline-block p-4 bg-black/5 rounded-2xl mb-6">{icon}</div>
    <div className="text-4xl font-black mb-1">{value}</div>
    <div className="text-xs font-bold uppercase tracking-widest text-black/30">{label}</div>
  </div>
);

const SquadIcon: React.FC<{ label: string, count: string }> = ({ label, count }) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all cursor-pointer">
    <h4 className="font-bold mb-1">{label}</h4>
    <p className="text-xs text-white/40">{count} members</p>
  </div>
);

export default Community;
