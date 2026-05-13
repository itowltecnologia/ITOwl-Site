import { Link } from 'react-router-dom';

export default function Footer() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Contato', href: '#contato' }
  ];

  const legal = [
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { name: 'Termos de Uso', href: '/termos-de-uso' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="relative flex items-center h-10 w-auto group-hover:scale-105 transition-transform">
                <img 
                  src="/logos/logo-white.png" 
                  alt="ITOWL Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
              Especialistas em cloud e infraestrutura para empresas que buscam inovação e resultados.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Navegação</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="py-6 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} ITOWL. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
