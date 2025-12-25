
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Simple pricing, <br />massive returns.</h1>
        <p className="text-xl text-black/50 max-w-2xl mx-auto">Choose the plan that fits your ambition. Every plan includes our core productivity engine.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="p-10 rounded-3xl border border-black/5 hover:border-black/10 transition-all flex flex-col">
          <h3 className="text-xl font-bold mb-2">Starter</h3>
          <p className="text-black/40 text-sm mb-8">For individuals getting started.</p>
          <div className="text-5xl font-black tracking-tighter mb-8">$0<span className="text-sm font-normal text-black/40">/mo</span></div>
          <ul className="space-y-4 mb-10 flex-grow">
            <PricingFeature label="Unlimited tasks" />
            <PricingFeature label="Focus sandbox (1h/day)" />
            <PricingFeature label="Basic rewards store" />
            <PricingFeature label="Desktop app" />
          </ul>
          <Link to="/hub" className="w-full py-4 text-center rounded-2xl border border-black font-bold hover:bg-black/5 transition-all">Get Started</Link>
        </div>

        {/* Pro Plan */}
        <div className="p-10 rounded-3xl border-2 border-black relative flex flex-col scale-105 bg-white shadow-2xl z-10">
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>
          <h3 className="text-xl font-bold mb-2">Professional</h3>
          <p className="text-black/40 text-sm mb-8">For serious creators and freelancers.</p>
          <div className="text-5xl font-black tracking-tighter mb-8">$12<span className="text-sm font-normal text-black/40">/mo</span></div>
          <ul className="space-y-4 mb-10 flex-grow">
            <PricingFeature label="Everything in Starter" />
            <PricingFeature label="Unlimited Focus Sandbox" />
            <PricingFeature label="Premium Reward Multiplier (2x)" />
            <PricingFeature label="Full AI Task Orchestration" />
            <PricingFeature label="Priority Tool Integrations" />
          </ul>
          <Link to="/hub" className="w-full py-4 text-center rounded-2xl bg-black text-white font-bold hover:bg-black/90 transition-all flex items-center justify-center">
            Start Free Trial
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Team Plan */}
        <div className="p-10 rounded-3xl border border-black/5 hover:border-black/10 transition-all flex flex-col">
          <h3 className="text-xl font-bold mb-2">Organization</h3>
          <p className="text-black/40 text-sm mb-8">For small teams and agencies.</p>
          <div className="text-5xl font-black tracking-tighter mb-8">$49<span className="text-sm font-normal text-black/40">/mo</span></div>
          <ul className="space-y-4 mb-10 flex-grow">
            <PricingFeature label="Everything in Pro" />
            <PricingFeature label="Up to 10 team seats" />
            <PricingFeature label="Team focus leaderboards" />
            <PricingFeature label="Advanced security & SSO" />
            <PricingFeature label="Dedicated account manager" />
          </ul>
          <button className="w-full py-4 text-center rounded-2xl border border-black font-bold hover:bg-black/5 transition-all">Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

const PricingFeature: React.FC<{ label: string }> = ({ label }) => (
  <li className="flex items-center space-x-3">
    <div className="bg-black/5 p-1 rounded-full">
      <Check className="w-3 h-3" />
    </div>
    <span className="text-sm font-medium">{label}</span>
  </li>
);

export default Pricing;
