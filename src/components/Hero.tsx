import { Cloud, Lock, Zap, Wrench, BarChart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-sky-900 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(6,182,212,0.15)_0%,transparent_70%),radial-gradient(ellipse_at_20%_80%,rgba(139,92,246,0.1)_0%,transparent_60%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-md">
            <Cloud className="w-4 h-4 text-cyan-400" />
            <span>Cloud & Infraestrutura</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
             Sua jornada para<br/>
             <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">a nuvem</span> começa aqui
          </h1>
          
          <p className="text-lg text-white/80 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            Acelere sua transformação digital com escalabilidade, agilidade, segurança e automação. Somos especialistas em cloud e infraestrutura para empresas que buscam resultados reais.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a href="#contato" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30">
              Fale conosco
            </a>
            <a href="#servicos" className="bg-white/5 hover:bg-white/15 border border-white/30 text-white px-8 py-3.5 rounded-xl font-semibold transition-all backdrop-blur-sm">
              Ver serviços
            </a>
          </div>
        </motion.div>

        {/* Visual Component */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center relative min-h-[400px]"
        >
          <div className="relative bg-white/5 border border-white/15 backdrop-blur-xl p-10 rounded-3xl text-center min-w-[320px] shadow-2xl">
            <Cloud className="w-20 h-20 text-sky-400 mx-auto mb-8 animate-float" strokeWidth={1.5} />
            
            <div className="flex justify-between gap-6 mb-8 border-t border-white/10 pt-8">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-extrabold text-white">99.9%</span>
                <span className="text-xs font-semibold text-white/50 tracking-wider uppercase mt-1">Uptime</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-extrabold text-white">24/7</span>
                <span className="text-xs font-semibold text-white/50 tracking-wider uppercase mt-1">Suporte</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-extrabold text-white">+200</span>
                <span className="text-xs font-semibold text-white/50 tracking-wider uppercase mt-1">Clientes</span>
              </div>
            </div>

            {/* Orbit Animation */}
            <div className="absolute -inset-10 rounded-full border border-white/10 border-dashed pointer-events-none animate-[spin_30s_linear_infinite]">
              {/* Azure */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-center p-2.5 animate-[spin_30s_linear_infinite_reverse]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure" className="w-full h-full object-contain" />
              </div>
              
              {/* AWS */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center justify-center p-2.5 animate-[spin_30s_linear_infinite_reverse]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-full h-full object-contain" />
              </div>

              {/* GCP */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center p-2.5 animate-[spin_30s_linear_infinite_reverse]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="w-full h-full object-contain" />
              </div>

              {/* Oracle */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-[0_0_20px_rgba(225,29,72,0.3)] flex items-center justify-center p-2.5 animate-[spin_30s_linear_infinite_reverse]">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" alt="Oracle Cloud" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-px">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block text-slate-50">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}
