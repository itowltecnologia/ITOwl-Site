import { Zap, TrendingUp, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-amber-500" strokeWidth={1.5} />,
      title: "Agilidade",
      desc: "Implementação rápida na nuvem para que sua empresa evolua sem burocracia e com máxima velocidade."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" strokeWidth={1.5} />,
      title: "Escalabilidade",
      desc: "Infraestrutura que cresce com seu negócio, sob demanda, sem desperdício de recursos ou investimentos."
    },
    {
      icon: <Rocket className="w-8 h-8 text-rose-500" strokeWidth={1.5} />,
      title: "Maior Produtividade",
      desc: "Libere sua equipe para focar no core do negócio enquanto cuidamos de toda a infraestrutura tecnológica."
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((bnf, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6">
                {bnf.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{bnf.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {bnf.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
