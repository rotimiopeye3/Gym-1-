import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import ClassCard from '../components/ClassCard';
import { classes } from '../data/mockData';

export default function Classes() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:row items-center justify-between mb-16">
          <SectionHeading
            subtitle="Training"
            title="Class Catalog"
          />
          <div className="flex bg-white/5 p-1 border border-white/10 mb-16 md:mb-0">
             {['All', 'Strength', 'Cardio', 'Yoga'].map((cat, i) => (
               <button 
                key={i}
                className={`px-8 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                  i === 0 ? 'bg-primary text-black' : 'text-gray-500 hover:text-white'
                }`}
               >
                 {cat}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {classes.map((item) => (
             <ClassCard key={item.id} item={item} />
           ))}
        </div>

        {/* Schedule Preview Sidebar-ish Section */}
        <section className="mt-40">
           <SectionHeading
             centered
             subtitle="Weekly"
             title="Full Schedule"
           />
           <div className="overflow-x-auto">
              <table className="w-full text-left font-display">
                 <thead>
                    <tr className="border-b border-primary/20">
                       <th className="py-6 px-4 uppercase text-sm tracking-widest">Time</th>
                       <th className="py-6 px-4 uppercase text-sm tracking-widest">Monday</th>
                       <th className="py-6 px-4 uppercase text-sm tracking-widest">Tuesday</th>
                       <th className="py-6 px-4 uppercase text-sm tracking-widest">Wednesday</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {[
                      { t: '06:00 AM', m: 'Power Lifting', tu: 'Morning HIIT', w: 'Power Lifting' },
                      { t: '08:30 AM', m: '-', tu: 'Zen Yoga', w: '-' },
                      { t: '12:00 PM', m: 'Lunch Pump', tu: 'Mobility', w: 'Lunch Pump' },
                      { t: '05:00 PM', m: 'Boxing', tu: 'HIIT Blitz', w: 'Boxing' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/2 transition-colors">
                         <td className="py-8 px-4 font-black italic text-primary">{row.t}</td>
                         <td className="py-8 px-4 uppercase text-sm font-bold">{row.m}</td>
                         <td className="py-8 px-4 uppercase text-sm font-bold">{row.tu}</td>
                         <td className="py-8 px-4 uppercase text-sm font-bold">{row.w}</td>
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
