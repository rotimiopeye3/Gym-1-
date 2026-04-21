import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import Button from './Button';

interface PlanCardProps {
  plan: {
    id: string;
    name: string;
    price: string;
    features: string[];
    recommended: boolean;
  };
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-10 flex flex-col transition-all duration-500 hover:border-primary/50 group ${
        plan.recommended ? 'bg-primary border-0 scale-105 shadow-2xl z-10' : 'bg-white/5 border border-white/10'
      }`}
    >
      {plan.recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] font-black uppercase tracking-widest px-4 py-1.5 z-20">
          Most Popular
        </div>
      )}

      <div className="mb-10">
        <h3 className={`text-2xl font-black italic mb-2 uppercase ${plan.recommended ? 'text-black' : 'text-white'}`}>{plan.name}</h3>
        <p className={`text-[10px] font-bold uppercase tracking-widest mb-6 ${plan.recommended ? 'text-black/60' : 'text-gray-500'}`}>
          Premium performance package
        </p>
        <div className="flex items-baseline gap-1">
          <span className={`text-2xl font-black italic ${plan.recommended ? 'text-black' : 'text-white'}`}>$</span>
          <span className={`text-6xl font-black italic tracking-tighter ${plan.recommended ? 'text-black' : 'text-white'}`}>{plan.price}</span>
          <span className={`text-[10px] font-black uppercase tracking-widest ml-2 ${plan.recommended ? 'text-black/40' : 'text-gray-600'}`}>/ Month</span>
        </div>
      </div>

      <ul className="space-y-5 mb-12 flex-grow">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-4 text-[11px] font-black uppercase tracking-wider">
            <div className={`shrink-0 w-1.5 h-1.5 rounded-full ${plan.recommended ? 'bg-black' : 'bg-primary'}`}></div>
            <span className={plan.recommended ? 'text-black' : 'text-white/80'}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={plan.recommended ? 'secondary' : 'outline'}
        className="w-full"
      >
        Choose Plan
      </Button>
    </motion.div>
  );
};

export default PlanCard;
