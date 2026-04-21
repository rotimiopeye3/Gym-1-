import React from 'react';
import { Clock, User } from 'lucide-react';
import { motion } from 'motion/react';

import Button from './Button';

interface ClassCardProps {
  item: {
    id: number;
    title: string;
    time: string;
    instructor: string;
    image: string;
    tag: string;
  };
}

const ClassCard: React.FC<ClassCardProps> = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 overflow-hidden border border-white/10 group hover:border-primary/50 transition-all duration-300"
    >
      <div className="h-64 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-primary text-black text-[10px] font-black uppercase tracking-widest px-3 py-1">
          {item.tag}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-3xl font-black mb-6 italic italic uppercase leading-tight tracking-tighter">{item.title}</h3>
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-gray-400">
            <Clock size={14} className="text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.time}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <User size={14} className="text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Master {item.instructor}</span>
          </div>
        </div>
        <Button variant="outline" size="sm" className="w-full">
          Book Session
        </Button>
      </div>
    </motion.div>
  );
};

export default ClassCard;
