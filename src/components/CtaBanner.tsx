export default function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0b5c6b] to-[#0e7488] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Pronto para modernizar sua infraestrutura?
          </h2>
          <p className="text-[#c2f3fb] text-lg">
            Fale com nossos especialistas e descubra como podemos acelerar sua transformação digital.
          </p>
        </div>
        <div className="flex-shrink-0">
          <a href="#contato" className="inline-flex items-center justify-center bg-white text-[#0b5c6b] px-8 py-4 rounded-xl font-bold hover:bg-[#edfbfe] transition-all hover:-translate-y-1 hover:shadow-xl shadow-white/10">
            Fale conosco agora
          </a>
        </div>
      </div>
    </section>
  );
}
