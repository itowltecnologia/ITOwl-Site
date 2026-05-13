import { Network, Waypoints, Zap, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export default function Networking() {
  const networkingItems = [
    {
      icon: <Network className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />,
      title: "Redes Corporativas",
      desc: "Projeto e implementação de redes para ambientes corporativos e data centers de alta disponibilidade."
    },
    {
      icon: <Waypoints className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />,
      title: "SD-WAN",
      desc: "Gerenciamento inteligente de WAN definido por software para conectividade ágil e econômica."
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />,
      title: "WAN Optimization",
      desc: "Otimização de WAN e aceleração de aplicações para máxima performance da sua operação."
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />,
      title: "Next-Gen Firewall (NGFW)",
      desc: "Proteção avançada com inspeção profunda de pacotes, prevenção de intrusões e filtragem inteligente."
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-[#042d35] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,174,201,0.08)_0%,transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block bg-[#07434f] border border-[#0e7488] text-[#3ecbe3] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(26,174,201,0.2)]">
            Networking
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Conectividade inteligente para empresas
          </h2>
          <p className="text-slate-400 text-lg">
            Redes corporativas de alta performance com gestão centralizada e segurança de próxima geração.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {networkingItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:bg-white/[0.06] hover:border-[#1aaec9]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-slate-800/50 w-14 h-14 rounded-xl border border-white/5 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3 tracking-wide">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
