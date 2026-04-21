import React from 'react';
import { Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

interface TrainerCardProps {
  trainer: {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
  };
}

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[450px] overflow-hidden border border-white/10 bg-white/5 flex flex-col justify-end p-8 transition-all hover:border-primary/50"
    >
      {/* Decorative Index */}
      <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-tighter text-gray-700 transition-colors group-hover:text-primary">
        #{String(trainer.id).padStart(2, '0')}
      </div>
      
      {/* Vertical Strip */}
      <div className="absolute top-0 left-0 w-1 bg-primary h-0 group-hover:h-16 transition-all duration-500"></div>

      <img
        src={trainer.image}
        alt={trainer.name}
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      <div className="relative z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
          {trainer.role}
        </span>
        <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-tight">{trainer.name}</h3>
      </div>
    </motion.div>
  );
};

export default TrainerCard;
