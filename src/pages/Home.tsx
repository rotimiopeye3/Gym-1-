import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Trophy, Users, Zap } from 'lucide-react';
import Button from '../components/Button';
import PlanCard from '../components/PlanCard';
import TrainerCard from '../components/TrainerCard';
import SectionHeading from '../components/SectionHeading';
import CountUp from '../components/CountUp';
import { plans, trainers, testimonials } from '../data/mockData';

export default function Home() {
  return (
    <main className="pt-20">
      {/* Decorative Background Text */}
      <div className="fixed top-0 right-0 text-[30rem] font-black text-white/[0.02] select-none pointer-events-none leading-none z-0 italic tracking-tighter">
        GRIT
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative h-[95vh] min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070"
            alt="Gym Hero"
            className="w-full h-full object-cover grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/50 to-transparent"></div>
          <div className="noise absolute inset-0 opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">
                Est. 2024 • Los Angeles
              </span>
            </div>
            
            <h1 className="text-[clamp(4rem,12vw,10rem)] font-black leading-[0.82] italic tracking-tighter mb-10 uppercase text-white drop-shadow-2xl">
              Transform <br />
              <span className="text-primary">Your Body</span><br />
              Define Future.
            </h1>
            
            <p className="text-xl text-gray-400 font-medium mb-12 max-w-lg leading-relaxed">
              Premium strength training and performance coaching designed for those who demand excellence in every rep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="min-w-[240px]">Join The Elite</Button>
              <div className="flex items-center gap-8 pl-4">
                 <div className="flex flex-col">
                    <span className="text-3xl font-black">
                      <CountUp to={12} suffix="k+" />
                    </span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Members</span>
                 </div>
                 <div className="w-[1px] h-10 bg-white/10"></div>
                 <div className="flex flex-col">
                    <span className="text-3xl font-black">
                      <CountUp to={45} suffix="+" />
                    </span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Trainers</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-surface border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, label: 'High Intensity', value: 150, suffix: '+' },
              { icon: Users, label: 'World Class Trainers', value: 25, suffix: '+' },
              { icon: Trophy, label: 'Success Stories', value: 1000, suffix: '+' },
              { icon: Zap, label: 'Fitness Equipment', value: 200, suffix: '+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <stat.icon className="mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-3xl font-black italic mb-1 uppercase tracking-tight">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-muted text-[10px] uppercase tracking-widest font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="pricing" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            centered
            subtitle="Pricing Plans"
            title="Choose Your Level"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-32 bg-surface relative overflow-hidden">
        <div className="noise absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:row items-end justify-between mb-16">
            <SectionHeading
              subtitle="Elite Coaches"
              title="Train With The Best"
            />
            <Link to="/about" className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest mb-16 md:mb-0 hover:text-primary transition-colors">
              Meet All Trainers <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[12rem] font-black uppercase text-white/[0.02] absolute -top-10 left-1/2 -translate-x-1/2 select-none tracking-tighter italic">
            WARRIORS
          </h2>
          <div className="max-w-4xl mx-auto relative z-10">
             <SectionHeading
              centered
              subtitle="Community"
              title="Warrior Words"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-surface p-10 rounded-3xl border border-white/10 text-left relative"
                >
                  <p className="text-xl font-display italic text-white/80 mb-8 leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full"></div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wider">{t.name}</h4>
                      <p className="text-xs text-primary font-bold uppercase">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-primary overflow-hidden">
        <div className="noise absolute inset-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:row items-center justify-between gap-10">
           <div>
              <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-none mb-4">Start Your Journey <br />Today</h2>
              <p className="text-white/80 font-display">Special offer: First 7 days for free if you sign up this week.</p>
           </div>
           <Button variant="secondary" size="lg" className="whitespace-nowrap">
              Book A Free Session
           </Button>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-black italic uppercase text-black/5 select-none -translate-x-20">
          IronPulse
        </div>
      </section>
    </main>
  );
}
