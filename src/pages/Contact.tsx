import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function Contact() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Direct Access"
          title="Get In Touch"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
           >
              <h3 className="text-4xl font-black italic uppercase mb-8">Ready to evolve?</h3>
              <p className="text-muted text-lg mb-12 leading-relaxed max-w-md">
                Whether you have questions about memberships, classes, or corporate programs, our team is standing by to help.
              </p>

              <div className="space-y-12">
                 <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-white/5 flex items-center justify-center border border-white/10 group hover:border-primary transition-all">
                       <MapPin className="text-primary" />
                    </div>
                    <div>
                       <h4 className="font-black italic uppercase tracking-widest text-[10px] text-primary mb-1">Our Location</h4>
                       <p className="text-white font-bold uppercase text-sm tracking-tighter italic">123 Fitness Ave, Muscle City</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-white/5 flex items-center justify-center border border-white/10 group hover:border-primary transition-all">
                       <Phone className="text-primary" />
                    </div>
                    <div>
                       <h4 className="font-black italic uppercase tracking-widest text-[10px] text-primary mb-1">Direct Line</h4>
                       <p className="text-white font-bold uppercase text-sm tracking-tighter italic">+1 (555) 000-IRON</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-white/5 flex items-center justify-center border border-white/10 group hover:border-primary transition-all">
                       <Mail className="text-primary" />
                    </div>
                    <div>
                       <h4 className="font-black italic uppercase tracking-widest text-[10px] text-primary mb-1">Base Command</h4>
                       <p className="text-white font-bold uppercase text-sm tracking-tighter italic">hello@ironpulse.com</p>
                    </div>
                 </div>
              </div>
           </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 p-10 border border-white/10 relative"
           >
              <div className="noise absolute inset-0 opacity-10 pointer-events-none"></div>
              <form className="relative z-10 space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                       <label className="text-[10px] uppercase font-black tracking-widest text-primary italic">First Name</label>
                       <input type="text" className="w-full bg-black border border-white/10 p-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] uppercase font-black tracking-widest text-primary italic">Last Name</label>
                       <input type="text" className="w-full bg-black border border-white/10 p-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-muted">Email Address</label>
                    <input type="email" className="w-full bg-dark border border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-muted">Interested In</label>
                    <select className="w-full bg-dark border border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                       <option>Personal Training</option>
                       <option>Group Classes</option>
                       <option>Membership Query</option>
                       <option>Other</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-muted">Message</label>
                    <textarea className="w-full bg-dark border border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:border-primary transition-colors h-32" placeholder="Tell us about your goals..."></textarea>
                 </div>
                 <Button className="w-full flex gap-2">
                    Send Message <Send size={16} />
                 </Button>
              </form>
           </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-32 h-[500px] w-full bg-surface rounded-3xl overflow-hidden border border-white/5 relative">
           <img 
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2070" 
            alt="Gym Location Map" 
            className="w-full h-full object-cover grayscale opacity-40"
            referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-primary/10"></div>
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-dark p-6 rounded-2xl border border-primary/30 text-center max-w-sm glass">
                 <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin />
                 </div>
                 <h4 className="text-xl font-black italic uppercase mb-2">Visit The Forge</h4>
                 <p className="text-sm text-muted">Iron District, Muscle City. Open 24/7 for Elite Members.</p>
                 <Button variant="ghost" size="sm" className="mt-4 underline">Open in Maps</Button>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
