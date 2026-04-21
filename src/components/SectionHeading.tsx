import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex items-center gap-3 mb-6 ${centered ? 'justify-center' : ''}`}
      >
        <div className="h-[1px] w-12 bg-primary"></div>
        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">
          {subtitle}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none"
      >
        {title}
      </motion.h2>
    </div>
  );
}
