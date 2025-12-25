import React, { useEffect } from 'react';
import { ChevronRight, Zap, Target, Award, ArrowRight, Terminal, Cpu, Layers, Gift, Coffee, Monitor, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      {/* Editorial Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Professional Background Image */}
        <div className="absolute inset-0 z-0 hero-bg"></div>
        <div className="absolute inset-0 bg-white/40 z-10 backdrop-blur-[2px]"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <div className="reveal inline-block mb-12">
            <div className="flex items-center space-x-3 px-6 py-2 border border-black rounded-full bg-white/80">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Flowva is now live</span>
            </div>
          </div>
          
          <h1 className="reveal text-[clamp(3.5rem,15vw,10rem)] font-black uppercase leading-[0.8] tracking-tighter mb-12">
            Work Better.<br />
            <span className="opacity-20 italic">Stay Flowing.</span>
          </h1>
          
          <div className="reveal flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/hub" className="group bg-black text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-black/80 transition-all flex items-center">
              Enter the Hub
              <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/pricing" className="px-12 py-6 rounded-full text-xl font-bold border-2 border-black hover:bg-black hover:text-white transition-all">
              Explore Plans
            </Link>
          </div>
        </div>
      </section>


      

      {/* Productivity Hub Section (NO IMAGES) */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal mb-32 max-w-4xl">
            <h2 className="text-5xl md:text-5xl font-black uppercase leading-[0.9] tracking-tighter mb-12">
              Our productivity<br />hub, <span className="text-black/100">redefined.</span>
            </h2>
            <p className="text-2xl  font-light leading-tight">
            A workspace built for the modern creator. Strip away the noise and focus on the architecture of your output. Flowva helps you consolidate all your tools, subscriptions, and daily tasks into one unified, distraction-free interface. With intelligent prioritization and secure storage, you can stay focused on what matters most, track your progress effortlessly, and turn your productivity into tangible rewards. Experience a platform designed to amplify your efficiency, simplify your workflow, and unlock your full creative potential.
          </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1 bg-black border border-black rounded-[40px] overflow-hidden">
             <HubFeature 
                icon={<Terminal className="w-10 h-10" />}
                title="Command System"
                description="Consolidate every workflow stream into a unified, distraction-free interface."
             />
             <HubFeature 
                icon={<Cpu className="w-10 h-10" />}
                title="Neural Priority"
                description="AI-driven task management that learns your energy cycles and peak performance."
             />
             <HubFeature 
                icon={<Layers className="w-10 h-10" />}
                title="Asset Vault"
                description="Keep your most important professional records secured with localized encryption."
             />
          </div>
        </div>
      </section>

      {/* //punkmk12345!! */}

      {/* Earn Section (NO IMAGES) */}
      <section className="py-40 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <h2 className="text-5xl md:text-5xl font-black uppercase leading-[0.9] tracking-tighter">
              Earn what<br />you deserve.
            </h2>
            <div className="max-w-md text-right">
              <p className="text-xl font-light mb-8">
                Your focus is a currency. We believe deep work should be tangible. Earn points for every milestone.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <RewardItem icon={<Gift className="w-14 h-14" />} name="Amazon Credit" cost="2,000 FP" />
            <RewardItem icon={<Coffee className="w-14 h-14" />} name="Artisan Roast" cost="4,500 FP" />
            <RewardItem icon={<Monitor className="w-14 h-14" />} name="Custom Mechanicals" cost="12,000 FP" />
            <RewardItem icon={<Heart className="w-14 h-14" />} name="Planet Support" cost="1,000 FP" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <div className="flex space-x-1 mb-12">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-white" />)}
              </div>
              <p className="text-3xl md:text-5xl  tracking-tight leading-none mb-12 font-mono ">
                "Flowva is the first tool that respects my time. The rewards system is more than a gimmick—it's a productivity revolution."
              </p>
              <div className="flex items-center space-x-6">
                 <div className="w-16 h-16 bg-white/10 rounded-full"></div>
                 <div>
                    <h5 className="font-bold text-xl">Julian Voss</h5>
                    <p className="text-white/30 text-xs font-black uppercase tracking-widest">Lead Product Designer</p>
                 </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-10">
               <div className="p-12 border border-white/10 rounded-[40px] hover:bg-white hover:text-black transition-all duration-700 group">
                  <h4 className="text-5xl font-black mb-4 tracking-tighter group-hover:scale-105 transition-transform origin-left">+42%</h4>
                  <p className="text-lg opacity-40 font-light">Increase in daily deep-work output.</p>
               </div>
               <div className="p-12 border border-white/10 rounded-[40px] hover:bg-white hover:text-black transition-all duration-700 group">
                  <h4 className="text-5xl font-black mb-4 tracking-tighter group-hover:scale-105 transition-transform origin-left">8,000+</h4>
                  <p className="text-lg opacity-40 font-light">Real-world rewards distributed this month.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION - REDESIGNED */}
 <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
  {/* Ambient background shapes */}
  <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-black/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-3xl"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
    
    {/* LEFT CONTENT */}
    <div className="reveal">
      <span className="inline-block mb-6 text-xs font-black uppercase tracking-[0.4em] text-black/40">
        Productivity • Rewards • Control
      </span>

      <h1 className="text-[50px] font-black uppercase leading-[0.9] tracking-tighter mb-8">
        Control Your
      </h1>

      <p className="max-w-xl text-lg md:text-xl text-black/60 leading-relaxed mb-12">
        Flowva helps you organize your digital tools, stay productive,
        and earn rewards for the work you already do.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          to="/hub"
          className="group inline-flex items-center justify-center bg-black text-white px-10 py-6 rounded-full text-lg font-black uppercase tracking-wider hover:scale-105 transition-all shadow-2xl"
        >
          Start Free
          <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </Link>

        <Link
          to="/discover"
          className="inline-flex items-center justify-center px-10 py-6 rounded-full text-lg font-black uppercase tracking-wider border-2 border-black hover:bg-black hover:text-white transition-all"
        >
          Learn More
        </Link>
      </div>

      {/* Trust line */}
      <div className="mt-14 flex flex-wrap items-center gap-6 text-xs font-black uppercase tracking-[0.3em] text-black/40">
        <span>No Credit Card</span>
        <span>•</span>
        <span>Cancel Anytime</span>
        <span>•</span>
        <span>Global Access</span>
      </div>
    </div>

    {/* RIGHT VISUAL */}
    <div className="relative reveal hidden lg:flex justify-center">
      <div className="relative w-[420px] h-[420px] rounded-full border-[12px] border-black/10 flex items-center justify-center">
        <div className="absolute inset-10 rounded-full border-[6px] border-black/10 animate-pulse"></div>
        <div className="absolute inset-20 rounded-full border-[2px] border-black/20"></div>

        <span className="text-5xl font-black tracking-tighter">
          FLOWVA
        </span>
      </div>
    </div>

  </div>
</section>

    </div>
  );
};

const HubFeature: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="reveal p-16 bg-white flex flex-col items-center text-center group hover:bg-black hover:text-white transition-all duration-700 cursor-default border-black">
    <div className="mb-12 text-black group-hover:text-white transition-colors">{icon}</div>
    <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{title}</h3>
    <p className="text-lg font-light leading-tight opacity-40 group-hover:opacity-60 transition-opacity">{description}</p>
  </div>
);

const RewardItem: React.FC<{ icon: React.ReactNode, name: string, cost: string }> = ({ icon, name, cost }) => (
  <div className="reveal p-12 border-2 border-black rounded-[40px] flex flex-col items-center text-center group hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
    <div className="mb-8 group-hover:scale-110 transition-transform">{icon}</div>
    <h4 className="text-2xl font-black mb-2 uppercase tracking-tighter">{name}</h4>
    <p className="text-xs font-black uppercase tracking-[0.3em] opacity-30 group-hover:opacity-60">{cost}</p>
  </div>
);

export default Home;