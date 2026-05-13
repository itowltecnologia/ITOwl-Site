import { Building2, ShieldCheck, ClipboardCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Infra() {
  const infraItems = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
      title: "Data Centers Robustos",
      desc: "Infraestrutura de alta disponibilidade com redundância total e monitoramento contínuo."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
      title: "Segurança Avançada",
      desc: "Criptografia de ponta a ponta, controle de acesso granular e proteção contra ameaças."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" strokeWidth={1.5} />,
      title: "Conformidade Regulatória",
      desc: "Adequação às principais normas como LGPD, ISO 27001 e outros padrões de compliance."
    }
  ];

  return (
    <section id="infraestrutura" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            Infraestrutura
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Tecnologia de ponta para sua operação
          </h2>
          <p className="text-slate-600 text-lg">
            Data centers robustos, segurança avançada e conformidade regulatória para proteger seus dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infraItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200 rounded-2xl hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              <div className="bg-white w-14 h-14 rounded-xl border border-blue-100 flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
