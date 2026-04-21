import { Dumbbell, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
      <div className="noise absolute inset-0 opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary transform -skew-x-12 flex items-center justify-center">
                <Dumbbell size={18} className="text-black transform skew-x-12" />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase italic">
                IronPulse
              </span>
            </Link>
            <p className="text-gray-500 text-sm max-w-sm mb-10 leading-relaxed uppercase tracking-wider font-bold">
              Premium strength training and performance coaching designed for those who demand excellence in every rep.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase mb-8 tracking-[0.2em] text-primary italic">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Home</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">About Us</Link></li>
              <li><Link to="/classes" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Classes</Link></li>
              <li><Link to="/#pricing" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase mb-8 tracking-[0.2em] text-primary italic">Information</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0" size={16} />
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                  123 Fitness Ave, Iron District<br />Muscle City, MC 90210
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary shrink-0" size={16} />
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">+1 (555) 000-IRON</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row gap-6 items-center justify-between text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
          <p>© {new Date().getFullYear()} IronPulse Fitness. Define Future.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
