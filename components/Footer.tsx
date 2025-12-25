import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-20">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-3xl font-black tracking-tight mb-6 block"
            >
              FLOWVA
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
              A smart platform to manage your digital life, stay productive,
              and earn rewards for meaningful output.
            </p>

            <div className="flex space-x-4">
              <FooterSocial icon={<Twitter />} />
              <FooterSocial icon={<Github />} />
              <FooterSocial icon={<Linkedin />} />
              <FooterSocial icon={<Instagram />} />
            </div>
          </div>

          {/* Platform */}
          <div>
            <h5 className="mb-6 text-xs font-black uppercase tracking-widest text-white/70">
              Platform
            </h5>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/discover" className="hover:text-white transition">Discover</Link></li>
              <li><Link to="/rewards" className="hover:text-white transition">Rewards</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link to="/hub" className="hover:text-white transition">Launch Hub</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="mb-6 text-xs font-black uppercase tracking-widest text-white/70">
              Resources
            </h5>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/faq" className="hover:text-white transition">Help Center</Link></li>
              <li><Link to="/community" className="hover:text-white transition">Community</Link></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">API Docs</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="mb-6 text-xs font-black uppercase tracking-widest text-white/70">
              Legal
            </h5>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest text-white/40">
          <p>© 2024 Flowva Technologies Inc. All rights reserved.</p>

          <div className="flex gap-6">
            <span>Built for Focus</span>
            <span>Status: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterSocial: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-full
    bg-white/5 hover:bg-white hover:text-black transition-all"
  >
    {icon}
  </a>
);

export default Footer;
