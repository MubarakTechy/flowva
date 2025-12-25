
import React from 'react';
import { ShoppingBag, Star, Zap } from 'lucide-react';

const Rewards: React.FC = () => {
  const rewards = [
    { title: 'Tech Pack', brand: 'Keychron', points: 12000, img: 'https://picsum.photos/seed/k2/500/500' },
    { title: 'Roast Subscription', brand: 'Blue Bottle', points: 4500, img: 'https://picsum.photos/seed/coffee/500/500' },
    { title: 'Magic Trackpad', brand: 'Apple', points: 15000, img: 'https://picsum.photos/seed/trackpad/500/500' },
    { title: 'Digital Nomad Course', brand: 'Skillshare', points: 2500, img: 'https://picsum.photos/seed/course/500/500' },
    { title: 'Leather Sleeve', brand: 'Bellroy', points: 6000, img: 'https://picsum.photos/seed/sleeve/500/500' },
    { title: 'Premium Backpack', brand: 'Peak Design', points: 25000, img: 'https://picsum.photos/seed/backpack/500/500' },
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black rounded-[40px] p-12 mb-20 relative overflow-hidden text-white flex flex-col md:flex-row items-center justify-between">
           <div className="absolute top-0 right-0 w-full h-full opacity-20 -z-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
           </div>
           
           <div className="relative z-10 max-w-xl text-center md:text-left">
              <h1 className="text-5xl font-black mb-6 leading-tight">Your hard work <br />is finally paying off.</h1>
              <p className="text-white/60 text-lg mb-8">Redeem your Flow Points for tech, lifestyle, and educational perks from world-class brands.</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md flex items-center space-x-2">
                   <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                   <span className="text-sm font-bold tracking-tight">VIP STATUS</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md flex items-center space-x-2">
                   <Zap className="w-4 h-4 text-white fill-white" />
                   <span className="text-sm font-bold tracking-tight">2X MULTIPLIER ACTIVE</span>
                </div>
              </div>
           </div>

           <div className="mt-12 md:mt-0 relative z-10 text-center bg-white text-black p-10 rounded-3xl shadow-2xl">
              <div className="text-xs font-black uppercase tracking-widest opacity-30 mb-2">YOUR BALANCE</div>
              <div className="text-6xl font-black tracking-tighter mb-1">4,820</div>
              <div className="text-sm font-bold opacity-50 mb-8 uppercase tracking-widest">Points available</div>
              <button className="w-full py-4 bg-black text-white rounded-2xl font-bold hover:bg-black/80 transition-all flex items-center justify-center">
                 <ShoppingBag className="w-4 h-4 mr-2" />
                 Redeem Store
              </button>
           </div>
        </div>

        <h2 className="text-3xl font-black mb-10 tracking-tight">Featured Rewards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rewards.map((r, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-black/5 border border-black/5 relative">
                 <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute top-6 right-6">
                    <div className="bg-black text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                       {r.points} Points
                    </div>
                 </div>
              </div>
              <div className="flex justify-between items-start">
                 <div>
                    <h4 className="text-2xl font-bold">{r.title}</h4>
                    <p className="text-black/40 font-bold text-xs uppercase tracking-widest">{r.brand}</p>
                 </div>
                 <button className="p-3 bg-black/5 hover:bg-black hover:text-white rounded-full transition-all">
                    <ShoppingBag className="w-5 h-5" />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
