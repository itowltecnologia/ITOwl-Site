import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* Header */}
      <div className="bg-[#042d35] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-[#3ecbe3] hover:text-white transition-colors text-sm mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#07434f] border border-[#0e7488] w-10 h-10 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#3ecbe3]" />
            </div>
            <span className="text-[#3ecbe3] text-sm font-bold uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Termos de Uso
          </h1>
          <p className="text-slate-400 text-sm">
            Última atualização: maio de 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10">

          <Section title="1. Aceitação dos Termos">
            <p>
              Ao acessar e utilizar o site da <strong>ITOWL Tecnologia</strong> ("ITOWL", "nós", "nosso"), localizado em <strong>www.itowl.com.br</strong>, você declara que leu, compreendeu e concorda com estes Termos de Uso e com nossa{' '}
              <Link to="/politica-de-privacidade" className="text-[#0e7488] hover:underline">Política de Privacidade</Link>.
            </p>
            <p>
              Caso não concorde com qualquer disposição destes Termos, por favor, interrompa imediatamente o uso do site. O uso continuado do site após alterações nos Termos constitui aceitação das versões atualizadas.
            </p>
          </Section>

          <Section title="2. Sobre a ITOWL">
            <p>
              A ITOWL Tecnologia é uma empresa brasileira especializada em soluções de cloud, infraestrutura de TI, redes corporativas (Networking), managed services, monitoramento e automação de infraestrutura.
            </p>
            <p>
              As informações disponibilizadas neste site têm caráter exclusivamente informativo e institucional, destinando-se a apresentar nossos serviços e facilitar o contato com potenciais clientes e parceiros.
            </p>
          </Section>

          <Section title="3. Uso permitido do site">
            <p>Ao utilizar este site, você concorda em:</p>
            <ul>
              <li>Utilizar o site apenas para fins lícitos e de acordo com estes Termos.</li>
              <li>Não realizar qualquer ação que possa danificar, sobrecarregar ou comprometer o funcionamento do site.</li>
              <li>Não tentar acessar áreas restritas, sistemas internos ou dados não destinados ao público.</li>
              <li>Não utilizar bots, scrapers ou ferramentas automatizadas para coletar dados do site sem autorização prévia.</li>
              <li>Fornecer informações verdadeiras, precisas e atualizadas ao preencher formulários de contato.</li>
              <li>Não transmitir vírus, malware ou qualquer código malicioso por meio do site.</li>
            </ul>
          </Section>

          <Section title="4. Propriedade intelectual">
            <p>
              Todo o conteúdo disponível neste site — incluindo textos, logotipos, marcas, ícones, imagens, gráficos, design, código-fonte e demais materiais — é de propriedade exclusiva da ITOWL Tecnologia ou de seus licenciantes, protegido pelas leis brasileiras e internacionais de propriedade intelectual.
            </p>
            <p>É expressamente proibido, sem autorização prévia e por escrito da ITOWL:</p>
            <ul>
              <li>Reproduzir, copiar, distribuir ou publicar qualquer conteúdo do site.</li>
              <li>Modificar, adaptar ou criar obras derivadas com base no conteúdo do site.</li>
              <li>Utilizar as marcas, logotipos ou identidade visual da ITOWL de qualquer forma.</li>
              <li>Usar o conteúdo para fins comerciais sem licença expressa.</li>
            </ul>
            <p>
              É permitido compartilhar links para este site, desde que de forma não enganosa e sem associação falsa com a ITOWL.
            </p>
          </Section>

          <Section title="5. Isenção de responsabilidade">
            <SubSection title="5.1 Precisão das informações">
              <p>
                A ITOWL emprega seus melhores esforços para manter as informações do site atualizadas e precisas. No entanto, não garante a completude, exatidão ou atualidade de todo o conteúdo. As informações são fornecidas "no estado em que se encontram" e não constituem aconselhamento técnico, jurídico ou comercial vinculante.
              </p>
            </SubSection>
            <SubSection title="5.2 Disponibilidade do site">
              <p>
                A ITOWL não garante que o site estará disponível de forma ininterrupta ou livre de erros. Podemos suspender, modificar ou encerrar o site a qualquer momento, sem aviso prévio, por razões técnicas, de manutenção ou negócio.
              </p>
            </SubSection>
            <SubSection title="5.3 Links externos">
              <p>
                Este site pode conter links para sites de terceiros. A ITOWL não se responsabiliza pelo conteúdo, práticas de privacidade ou disponibilidade de sites externos. O acesso a esses links é de inteira responsabilidade do usuário.
              </p>
            </SubSection>
          </Section>

          <Section title="6. Limitação de responsabilidade">
            <p>
              Na máxima extensão permitida pela legislação brasileira, a ITOWL não será responsável por danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes de:
            </p>
            <ul>
              <li>Uso ou impossibilidade de uso do site.</li>
              <li>Erros, omissões ou imprecisões no conteúdo.</li>
              <li>Acesso não autorizado aos sistemas da ITOWL por terceiros.</li>
              <li>Interrupções ou falhas de conectividade de internet.</li>
              <li>Vírus ou elementos prejudiciais transmitidos por terceiros por meio do site.</li>
            </ul>
          </Section>

          <Section title="7. Formulário de contato e comunicações">
            <p>
              Ao preencher o formulário de contato disponível neste site, você autoriza a ITOWL a utilizar os dados fornecidos para responder à sua solicitação e, se aplicável, entrar em contato para apresentar propostas comerciais relacionadas.
            </p>
            <p>
              O envio de mensagens pelo formulário não cria qualquer vínculo contratual entre você e a ITOWL. A relação comercial somente se inicia mediante assinatura de proposta ou contrato formal.
            </p>
            <p>
              A ITOWL não se responsabiliza por mensagens não recebidas em decorrência de falhas de e-mail, spam ou problemas técnicos externos.
            </p>
          </Section>

          <Section title="8. Serviços e propostas comerciais">
            <p>
              As descrições de serviços presentes neste site são meramente ilustrativas. Condições específicas, prazos, valores, SLAs e escopo são definidos exclusivamente em proposta comercial individualizada e contrato assinado entre as partes.
            </p>
            <p>
              Nenhuma informação contida neste site deve ser interpretada como oferta vinculante de serviços.
            </p>
          </Section>

          <Section title="9. Privacidade e proteção de dados">
            <p>
              O tratamento de dados pessoais coletados por meio deste site é regido por nossa{' '}
              <Link to="/politica-de-privacidade" className="text-[#0e7488] hover:underline">Política de Privacidade</Link>, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </Section>

          <Section title="10. Legislação aplicável e foro">
            <p>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Porto Alegre — RS, com exclusão de qualquer outro, por mais privilegiado que seja, para dirimir quaisquer controvérsias decorrentes destes Termos.
            </p>
          </Section>

          <Section title="11. Alterações nos Termos">
            <p>
              A ITOWL reserva-se o direito de modificar estes Termos de Uso a qualquer momento. Alterações relevantes serão comunicadas por aviso destacado no site ou por e-mail, quando aplicável. A data da última atualização estará sempre indicada no topo desta página.
            </p>
          </Section>

          <Section title="12. Contato">
            <p>
              Para dúvidas, sugestões ou solicitações relacionadas a estes Termos de Uso:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="text-slate-700 text-sm"><strong className="text-slate-900">ITOWL Tecnologia</strong></p>
              <p className="text-slate-600 text-sm mt-1">E-mail: contato@itowl.com.br</p>
              <p className="text-slate-600 text-sm">Site: www.itowl.com.br</p>
              <p className="text-slate-600 text-sm">Brasil</p>
            </div>
          </Section>

        </div>
      </div>

      {/* Footer strip */}
      <div className="bg-slate-900 py-8 px-6 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} ITOWL Tecnologia. Todos os direitos reservados.
        </p>
        <Link to="/" className="inline-flex items-center gap-1.5 text-[#3ecbe3] hover:text-white transition-colors text-sm mt-3">
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar ao site
        </Link>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">{title}</h2>
      <div className="space-y-3 text-slate-600 leading-relaxed text-[15px]">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-base font-semibold text-slate-800 mb-2">{title}</h3>
      {children}
    </div>
  );
}
