import { Monitor, Cloud, Eye, FolderOpen, Settings, Users, Globe, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Services() {
  const services = [
    {
      icon: <Monitor className="w-7 h-7 text-indigo-500" />,
      title: "Managed Services",
      desc: "Gerenciamento completo de ambientes cloud e on-premises com SLA garantido e suporte especializado."
    },
    {
      icon: <Cloud className="w-7 h-7 text-sky-500" />,
      title: "Nuvem Híbrida",
      desc: "Integração inteligente entre ambientes privados e públicos para máxima flexibilidade operacional."
    },
    {
      icon: <Eye className="w-7 h-7 text-emerald-500" />,
      title: "Monitoramento 24/7",
      desc: "Monitoramento proativo contínuo com alertas em tempo real e resolução imediata de incidentes."
    },
    {
      icon: <FolderOpen className="w-7 h-7 text-amber-500" />,
      title: "Gerenciamento de Projetos",
      desc: "Suporte especializado para condução e entrega de projetos tecnológicos dentro do prazo e orçamento."
    },
    {
      icon: <Settings className="w-7 h-7 text-slate-600" />,
      title: "Automação de Infraestrutura",
      desc: "Pipelines automatizados com Terraform, Ansible, Puppet e Chef para agilidade e consistência."
    },
    {
      icon: <Users className="w-7 h-7 text-rose-500" />,
      title: "Staff Augmentation",
      desc: "Profissionais especializados para reforçar sua equipe com agilidade e flexibilidade contratual."
    },
    {
      icon: <Globe className="w-7 h-7 text-blue-500" />,
      title: "Serviço Contínuo de Rede",
      desc: "Gestão contínua da rede corporativa com monitoramento, otimização e suporte especializado."
    },
    {
      icon: <Sparkles className="w-7 h-7 text-amber-300" />,
      title: "Soluções Customizadas",
      desc: "Desenvolvemos soluções sob medida para os desafios únicos da sua empresa com foco em resultado.",
      highlight: true
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Soluções completas em tecnologia
          </h2>
          <p className="text-slate-600 text-lg">
            Do gerenciamento de infraestrutura ao suporte especializado, cobrimos todas as suas necessidades de TI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={cn(
                "p-7 rounded-2xl border transition-all duration-300 shadow-sm flex flex-col",
                svc.highlight 
                  ? "bg-gradient-to-br from-blue-600 to-indigo-700 border-transparent text-white shadow-blue-900/20" 
                  : "bg-white border-slate-200 hover:-translate-y-1.5 hover:shadow-lg hover:border-blue-300"
              )}
            >
              <div className="mb-5 bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center">
                {svc.icon}
              </div>
              <h3 className={cn(
                "text-lg font-bold mb-3 flex-shrink-0",
                svc.highlight ? "text-white" : "text-slate-900"
              )}>{svc.title}</h3>
              <p className={cn(
                "text-sm leading-relaxed mb-6 flex-grow",
                svc.highlight ? "text-blue-100" : "text-slate-600"
              )}>
                {svc.desc}
              </p>

              {svc.highlight && (
                <a href="#contato" className="mt-auto inline-flex items-center justify-center bg-white text-blue-600 px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors">
                  Saiba mais
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
