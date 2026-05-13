import { useState, useRef, useEffect } from 'react';
import { Bird, X, Send, Sparkles, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

// We use the injected GEMINI_API_KEY from vite.config.ts define block.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const SYSTEM_INSTRUCTION = `Você é o OWL Assistant, o assistente de IA oficial da ITOWL — empresa especializada em cloud computing, infraestrutura de TI e networking.

Sobre a ITOWL:
- Especialistas em cloud computing, infraestrutura e networking
- Serviços: Managed Services, Nuvem Híbrida, Monitoramento 24/7, Gerenciamento de Projetos, Automação de Infraestrutura (Terraform, Ansible, Puppet, Chef), Staff Augmentation, SCR (Serviço Contínuo de Rede), Soluções Customizadas
- Networking: Redes Corporativas, SD-WAN, WAN Optimization, Next-Gen Firewall (NGFW)
- Uptime de 99.9%, suporte 24/7, +200 clientes atendidos
- Horário comercial: Seg–Sex, 09:00–18:00
- Contato: contato@itowl.com.br

Regras de comportamento:
1. Responda SEMPRE em português do Brasil
2. Seja amigável, profissional e objetivo
3. Mantenha respostas concisas (máximo 2-3 parágrafos curtos)
4. Para contratações/orçamentos, direcione ao formulário de contato ou e-mail
5. Use formatação markdown quando útil (negrito, listas)
6. Se não souber algo específico sobre a ITOWL, admita e ofereça contato com a equipe
7. Foque em ajudar o visitante a entender como a ITOWL pode resolver seus desafios de TI`;

type Message = { role: 'user' | 'model'; text: string; isError?: boolean };

export default function AiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<Message[]>([
    { role: 'model', text: 'Olá! 👋 Sou o **OWL Assistant**, assistente de IA da ITOWL.\n\nPosso te ajudar com informações sobre nossos serviços de cloud, infraestrutura, networking e muito mais. Como posso te ajudar hoje?' }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, isTyping, isOpen]);

  const handleSend = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setHistory(prev => [...prev, { role: 'user', text: trimmed }]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Build contents array correctly for the API
      const contents = history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));
      contents.push({ role: 'user', parts: [{ text: trimmed }] });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      if (response.text) {
        setHistory(prev => [...prev, { role: 'model', text: response.text }]);
      } else {
        throw new Error("Resposta vazia da API.");
      }
    } catch (err: any) {
      console.error(err);
      setHistory(prev => [...prev, { 
        role: 'model', 
        text: '⚠️ Desculpe, encontrei um erro ao processar sua mensagem. Tente novamente mais tarde.',
        isError: true
      }]);
    } finally {
      setIsTyping(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(inputValue);
    }
  };

  const suggestions = [
    "O que é Managed Services?",
    "Como funciona nuvem híbrida?",
    "Quanto custa o suporte?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      
      {/* Chat Panel */}
      <div className={cn(
        "w-[calc(100vw-48px)] md:w-[380px] origin-bottom-right transition-all duration-300 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col",
        isOpen ? "scale-100 opacity-100 h-[500px]" : "scale-50 opacity-0 h-0 pointer-events-none"
      )}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex items-center justify-between shadow-md relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30 backdrop-blur-sm">
              <Bird className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-[15px] leading-tight">OWL Assistant</h3>
              <p className="text-xs text-blue-100 flex items-center gap-1">
                Powered by Gemini AI <Sparkles className="w-3 h-3 text-cyan-300" />
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4">
          {history.map((msg, idx) => (
            <div key={idx} className={cn(
              "flex gap-3 max-w-[85%]",
              msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
            )}>
              {/* Avatar */}
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1",
                msg.role === 'user' ? "bg-gradient-to-br from-blue-600 to-indigo-500 text-white" : "bg-white border border-slate-200 shadow-sm"
              )}>
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bird className="w-5 h-5 text-blue-600" />}
              </div>

              {/* Bubble */}
              <div className={cn(
                "px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm break-words",
                msg.role === 'user' 
                  ? "bg-gradient-to-br from-blue-600 to-indigo-500 text-white rounded-tr-sm" 
                  : "bg-white border border-slate-200 text-slate-800 rounded-tl-sm prose prose-sm max-w-none prose-p:leading-snug prose-p:mb-1 prose-headings:mb-2 prose-ul:my-1 prose-li:my-0 prose-strong:text-slate-900 prose-a:text-blue-600 overflow-hidden",
                msg.isError && "border-rose-200 bg-rose-50 text-rose-700"
              )}>
                <Markdown>{msg.text}</Markdown>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 mt-1">
                <Bird className="w-5 h-5 text-blue-600" />
              </div>
              <div className="px-4 py-4 rounded-2xl rounded-tl-sm bg-white border border-slate-200 shadow-sm flex items-center gap-1.5 w-16">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} className="h-1" />
        </div>

        {/* Suggestions */}
        {history.length === 1 && !isTyping && (
          <div className="px-4 pb-2 pt-1 bg-slate-50 flex flex-wrap gap-2">
            {suggestions.map((sug, i) => (
              <button 
                key={i}
                onClick={() => handleSend(sug)}
                className="text-xs font-semibold bg-white border border-blue-200 text-blue-700 px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors shadow-sm"
              >
                {sug}
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-end gap-2">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua dúvida..."
            className="flex-1 max-h-32 min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none font-sans"
            rows={1}
            style={{ height: inputValue ? 'auto' : '44px' }}
          />
          <button 
            onClick={() => handleSend(inputValue)}
            disabled={!inputValue.trim() || isTyping}
            className="w-11 h-11 flex-shrink-0 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-colors shadow-sm"
          >
            <Send className="w-5 h-5 ml-0.5" />
          </button>
        </div>
      </div>

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-cyan-500/30 transition-all hover:scale-110",
          isOpen && "rotate-12 scale-90"
        )}
      >
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-20" />
        {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6 animate-pulse" />}
      </button>

    </div>
  );
}
