import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import ClassCard from '../components/ClassCard';
import { ClassSkeleton } from '../components/Skeleton';
import { classes } from '../data/mockData';

export default function Classes() {
  const [activeTab, setActiveTab] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredClasses = activeTab === 'All' 
    ? classes 
    : classes.filter(item => item.tag === activeTab);

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
          <SectionHeading
            subtitle="Training"
            title="Class Catalog"
          />
          <div className="grid grid-cols-2 md:flex bg-white/5 p-1 border border-white/10 mb-8 md:mb-0 w-full md:w-auto">
             {['All', 'Strength', 'Cardio', 'Yoga'].map((cat) => (
               <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`py-4 md:px-10 md:py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === cat ? 'bg-primary text-black' : 'text-gray-500 hover:text-white'
                }`}
               >
                 {cat}
               </button>
             ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
           <AnimatePresence mode="popLayout">
            {loading 
              ? Array(6).fill(0).map((_, i) => (
                  <motion.div 
                    key={`skeleton-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ClassSkeleton />
                  </motion.div>
                ))
              : filteredClasses.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ClassCard item={item} />
                  </motion.div>
                ))
            }
           </AnimatePresence>
        </motion.div>

        {/* Schedule Preview Section */}
        <section className="mt-40">
           <SectionHeading
             centered
             subtitle="Weekly"
             title="Full Schedule"
           />
           
           {/* Mobile View: List of Cards */}
           <div className="lg:hidden grid grid-cols-1 gap-6 mt-16">
              {[
                { t: '06:00 AM', monday: 'Power Lifting', tuesday: 'Morning HIIT', wednesday: 'Power Lifting' },
                { t: '08:30 AM', monday: '-', tuesday: 'Zen Yoga', wednesday: '-' },
                { t: '12:00 PM', monday: 'Lunch Pump', tuesday: 'Mobility', wednesday: 'Lunch Pump' },
                { t: '05:00 PM', monday: 'Boxing', tuesday: 'HIIT Blitz', wednesday: 'Boxing' },
              ].map((row, i) => (
                <div key={i} className="bg-white/5 border border-white/10 overflow-hidden group">
                   <div className="bg-primary px-6 py-3 flex justify-between items-center text-black">
                      <span className="text-xl font-black italic tracking-tighter">{row.t}</span>
                      <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 italic">Session Slot</span>
                   </div>
                   <div className="p-8 grid grid-cols-1 gap-6">
                      <div className="flex justify-between items-center bg-black/20 p-4 border-l-2 border-primary/40">
                        <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Monday</span>
                        <span className="text-lg font-black uppercase italic tracking-tight">{row.monday}</span>
                      </div>
                      <div className="flex justify-between items-center bg-black/20 p-4 border-l-2 border-primary/40">
                        <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Tuesday</span>
                        <span className="text-lg font-black uppercase italic tracking-tight">{row.tuesday}</span>
                      </div>
                      <div className="flex justify-between items-center bg-black/20 p-4 border-l-2 border-primary/40">
                        <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Wednesday</span>
                        <span className="text-lg font-black uppercase italic tracking-tight">{row.wednesday}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>

           {/* Desktop View: Table */}
           <div className="hidden lg:block overflow-x-auto mt-16">
              <table className="w-full text-left font-display">
                 <thead>
                    <tr className="border-b border-primary/20">
                       <th className="py-6 px-4 uppercase text-sm tracking-widest text-gray-500 font-bold">Time</th>
                       <th className="py-6 px-4 uppercase text-sm tracking-widest text-gray-500 font-bold">Monday</th>
                       <th className="py-6 px-4 uppercase text-sm tracking-widest text-gray-500 font-bold">Tuesday</th>
                       <th className="py-6 px-4 uppercase text-sm tracking-widest text-gray-500 font-bold">Wednesday</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {[
                      { t: '06:00 AM', m: 'Power Lifting', tu: 'Morning HIIT', w: 'Power Lifting' },
                      { t: '08:30 AM', m: '-', tu: 'Zen Yoga', w: '-' },
                      { t: '12:00 PM', m: 'Lunch Pump', tu: 'Mobility', w: 'Lunch Pump' },
                      { t: '05:00 PM', m: 'Boxing', tu: 'HIIT Blitz', w: 'Boxing' },
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                         <td className="py-10 px-4 font-black italic text-primary text-2xl tracking-tighter">{row.t}</td>
                         <td className="py-10 px-4 uppercase text-sm font-black italic group-hover:text-primary transition-colors tracking-tight">{row.m}</td>
                         <td className="py-10 px-4 uppercase text-sm font-black italic group-hover:text-primary transition-colors tracking-tight">{row.tu}</td>
                         <td className="py-10 px-4 uppercase text-sm font-black italic group-hover:text-primary transition-colors tracking-tight">{row.w}</td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </section>
      </div>
    </main>
  );
}
