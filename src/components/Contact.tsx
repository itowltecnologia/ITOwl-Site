import { useState } from 'react';
import { Mail, Smartphone, Clock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [toast, setToast] = useState<{ visible: boolean; message: string; type: 'success' | 'error' }>({
    visible: false,
    message: '',
    type: 'success'
  });

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 4000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
    e.currentTarget.reset();
  };

  return (
    <section id="contato" className="py-24 bg-slate-50 relative">
      <AnimatePresence>
        {toast.visible && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-24 right-6 z-50 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700 font-medium"
          >
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight">Entre em contato</h2>
            <p className="text-slate-600 text-lg mb-10">
              Nossa equipe está disponível de segunda a sexta, das 09:00 às 18:00, para atender você e transformar o seu negócio.
            </p>

            <ul className="space-y-6">
              <li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">E-mail</div>
                  <div className="font-semibold text-slate-900">contato@itowl.com.br</div>
                </div>
              </li>
              <li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">WhatsApp</div>
                  <div className="font-semibold text-slate-900">Disponível</div>
                </div>
              </li>
              <li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div className="bg-amber-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Horário</div>
                  <div className="font-semibold text-slate-900">Seg–Sex, 09:00–18:00</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700">Nome</label>
                  <input type="text" id="name" required placeholder="Seu nome completo" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700">E-mail</label>
                  <input type="email" id="email" required placeholder="seu@email.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-bold text-slate-700">Empresa</label>
                <input type="text" id="company" placeholder="Nome da sua empresa" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">Mensagem</label>
                <textarea id="message" required rows={4} placeholder="Como podemos ajudar?" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-y min-h-[120px]"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5">
                Enviar mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
