import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, LogOut } from 'lucide-react';
import { supabase } from '../pages/lib/supabaseClient';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Discover', path: '/discover' },
    { label: 'Rewards', path: '/rewards' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Community', path: '/community' },
  ];

  const isActive = (path: string) => location.pathname === path;

  
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-black' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-4xl font-black tracking-tight hover:opacity-70 transition"
        >
          FLOWVA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[13px] font-black uppercase tracking-[0.35em] transition
              ${isActive(item.path) ? 'text-black' : 'text-black/30 hover:text-black'}`}
            >
              {item.label}
            </Link>
          ))}

          {/* AUTH BUTTON */}
          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center text-xs font-black uppercase tracking-[0.2em]
              border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition"
            >
              Logout
              <LogOut className="ml-3 w-4 h-4" />
            </button>
          ) : (
            <Link
              to="/auth"
              className="flex items-center text-xs font-black uppercase tracking-[0.2em]
              bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition shadow-xl"
            >
              Sign up
              <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded-lg border border-black"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-500
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-3 border-2 border-black rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="h-full flex flex-col justify-center items-center space-y-8 px-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight
              hover:text-black/40 transition"
            >
              {item.label}
            </Link>
          ))}

          {/* MOBILE AUTH BUTTON */}
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="w-full max-w-sm border border-black py-5 rounded-full
              text-center font-black uppercase tracking-widest text-lg mt-6"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth"
              onClick={() => setIsOpen(false)}
              className="w-full max-w-sm bg-black text-white py-5 rounded-full
              text-center font-black uppercase tracking-widest text-lg mt-6"
            >
              Sign up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
