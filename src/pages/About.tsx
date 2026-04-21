import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import TrainerCard from '../components/TrainerCard';
import { trainers } from '../data/mockData';

export default function About() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 font-display">
        <SectionHeading
          subtitle="Our Story"
          title="Born From Iron"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
           <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
           >
              <h3 className="text-4xl font-black italic uppercase mb-8">Evolution Through Persistence</h3>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Founded in 2018, IronPulse started as a small garage gym with a single mission: to create an environment where results aren't just expected, they're inevitable. 
              </p>
              <p className="text-lg text-muted leading-relaxed mb-10">
                Today, we operate one of the most advanced training facilities in the region, combining old-school strength principles with modern science. We don't do "fitness trends"—we do transformation.
              </p>

              <div className="grid grid-cols-2 gap-10">
                 <div>
                    <h4 className="text-3xl font-black italic mb-2 uppercase tracking-tighter">Mission</h4>
                    <p className="text-muted text-sm leading-relaxed">To push humanity's physical and mental limits through disciplined training.</p>
                 </div>
                 <div>
                    <h4 className="text-3xl font-black italic mb-2 uppercase tracking-tighter">Vision</h4>
                    <p className="text-muted text-sm leading-relaxed">To build an elite global community of high-achievers and athletes.</p>
                 </div>
              </div>
           </motion.div>

           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
           >
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-primary/40 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070" 
                alt="Gym Interior" 
                className="grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bg-primary p-12 -bottom-10 -right-10 hidden md:block border border-black/20">
                 <p className="text-5xl font-black italic leading-none text-black">100%</p>
                 <p className="text-[10px] uppercase font-bold tracking-widest mt-2 text-black/60">Grit & Sweat</p>
              </div>
           </motion.div>
        </div>

        <SectionHeading
          centered
          subtitle="The Squad"
          title="Meet Our Masters"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {trainers.map((trainer) => (
             <TrainerCard key={trainer.id} trainer={trainer} />
           ))}
        </div>
      </div>
    </main>
  );
}
