
import React from 'react';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black tracking-tight mb-6">How can we help?</h1>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" />
            <input 
              type="text" 
              placeholder="Search for articles, guides..." 
              className="w-full bg-black/5 border-none rounded-3xl pl-16 pr-8 py-6 focus:ring-2 focus:ring-black outline-none text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <HelpCategory title="Getting Started" count="12 articles" />
          <HelpCategory title="Billing & Plans" count="8 articles" />
          <HelpCategory title="Integrations" count="24 articles" />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-black mb-8">Frequently Asked Questions</h2>
          <FaqAccordion 
            question="What is a Flow State and how does Flowva track it?" 
            answer="A Flow State is a mental state of complete absorption in the task at hand. Flowva tracks it through a combination of focused activity time, lack of context switching, and active task engagement within our Sandbox environment."
          />
          <FaqAccordion 
            question="Are the rewards really real-world items?" 
            answer="Yes! We partner with global brands to offer physical products, gift cards, and even charitable donations that you can redeem using the Flow Points you earn while working."
          />
          <FaqAccordion 
            question="How secure is my data?" 
            answer="Security is our top priority. We use industry-standard AES-256 encryption for all data and never sell your personal information. You can export or delete your data at any time."
          />
          <FaqAccordion 
            question="Can I use it with my whole team?" 
            answer="Absolutely. Our Organization plan allows you to manage teams, track collective productivity trends, and set up shared reward pools for hitting team-wide goals."
          />
        </div>

        <div className="mt-20 p-12 bg-black/5 rounded-[40px] text-center">
           <h3 className="text-2xl font-black mb-4">Still have questions?</h3>
           <p className="text-black/50 mb-8">Our support team is available 24/7 for premium members.</p>
           <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-black/80 transition-all">Contact Support</button>
        </div>
      </div>
    </div>
  );
};

const HelpCategory: React.FC<{ title: string, count: string }> = ({ title, count }) => (
  <div className="p-8 border border-black/5 rounded-3xl hover:border-black/20 transition-all cursor-pointer group">
    <h4 className="font-bold mb-1 group-hover:translate-x-1 transition-transform">{title}</h4>
    <p className="text-xs text-black/40 font-bold uppercase tracking-widest">{count}</p>
  </div>
);

const FaqAccordion: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-black/5 rounded-3xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-black/5 transition-colors"
      >
        <span className="font-bold text-lg">{question}</span>
        {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-black/50 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQ;
