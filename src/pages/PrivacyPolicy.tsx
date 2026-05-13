import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
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
              <Shield className="w-5 h-5 text-[#3ecbe3]" />
            </div>
            <span className="text-[#3ecbe3] text-sm font-bold uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Política de Privacidade
          </h1>
          <p className="text-slate-400 text-sm">
            Última atualização: maio de 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-slate max-w-none space-y-10">

          <Section title="1. Quem somos">
            <p>
              A <strong>ITOWL Tecnologia</strong> ("ITOWL", "nós", "nosso") é uma empresa brasileira especializada em soluções de cloud, infraestrutura de TI, redes corporativas e managed services, com sede no Brasil.
            </p>
            <p>
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações pessoais dos visitantes do nosso site e clientes dos nossos serviços, em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.
            </p>
          </Section>

          <Section title="2. Dados que coletamos">
            <p>Coletamos as seguintes categorias de dados pessoais:</p>
            <SubSection title="2.1 Dados fornecidos por você">
              <ul>
                <li><strong>Nome completo</strong> — para identificação e comunicação.</li>
                <li><strong>Endereço de e-mail</strong> — para resposta às solicitações de contato.</li>
                <li><strong>Número de telefone / WhatsApp</strong> — quando fornecido voluntariamente no formulário de contato.</li>
                <li><strong>Nome da empresa</strong> — para entendimento do contexto da solicitação.</li>
                <li><strong>Mensagem</strong> — conteúdo da sua dúvida, proposta ou solicitação.</li>
              </ul>
            </SubSection>
            <SubSection title="2.2 Dados coletados automaticamente">
              <ul>
                <li><strong>Endereço IP</strong> — para segurança e análise de acesso.</li>
                <li><strong>Dados de navegação</strong> — páginas visitadas, tempo de sessão, origem do tráfego.</li>
                <li><strong>Tipo de dispositivo e navegador</strong> — para otimização da experiência.</li>
                <li><strong>Cookies e tecnologias similares</strong> — conforme descrito na Seção 7.</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="3. Como usamos seus dados">
            <p>Utilizamos os dados coletados para as seguintes finalidades:</p>
            <ul>
              <li>Responder às solicitações de contato e propostas comerciais.</li>
              <li>Enviar informações sobre nossos serviços e soluções, quando solicitado.</li>
              <li>Melhorar nosso site, conteúdo e experiência do usuário.</li>
              <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
              <li>Prevenir fraudes e garantir a segurança das operações.</li>
              <li>Enviar comunicações de marketing, apenas com seu consentimento expresso.</li>
            </ul>
          </Section>

          <Section title="4. Base legal para o tratamento">
            <p>O tratamento dos seus dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:</p>
            <ul>
              <li><strong>Consentimento (Art. 7º, I)</strong> — para envio de comunicações de marketing.</li>
              <li><strong>Execução de contrato (Art. 7º, V)</strong> — para prestação dos serviços contratados.</li>
              <li><strong>Legítimo interesse (Art. 7º, IX)</strong> — para responder dúvidas e melhorar nossos serviços.</li>
              <li><strong>Cumprimento de obrigação legal (Art. 7º, II)</strong> — quando exigido por lei.</li>
            </ul>
          </Section>

          <Section title="5. Compartilhamento de dados">
            <p>
              A ITOWL <strong>não vende</strong> dados pessoais a terceiros. Podemos compartilhar suas informações apenas nas seguintes situações:
            </p>
            <ul>
              <li><strong>Parceiros de tecnologia</strong> — fornecedores de infraestrutura de cloud e ferramentas de CRM, com obrigações contratuais de confidencialidade.</li>
              <li><strong>Obrigação legal</strong> — quando exigido por autoridades competentes, decisão judicial ou regulamentação aplicável.</li>
              <li><strong>Proteção de direitos</strong> — para proteção dos direitos, propriedade ou segurança da ITOWL, seus clientes ou terceiros.</li>
            </ul>
            <p>
              Todos os terceiros com quem compartilhamos dados estão sujeitos a obrigações contratuais de proteger suas informações e usá-las apenas para os fins autorizados.
            </p>
          </Section>

          <Section title="6. Retenção dos dados">
            <p>
              Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, salvo quando exigido período maior por obrigação legal ou regulatória.
            </p>
            <ul>
              <li><strong>Dados de formulário de contato:</strong> até 2 anos após o último contato.</li>
              <li><strong>Dados de clientes:</strong> durante a vigência do contrato e por até 5 anos após o encerramento, conforme exigências fiscais e legais.</li>
              <li><strong>Dados de navegação:</strong> até 12 meses.</li>
            </ul>
          </Section>

          <Section title="7. Cookies">
            <p>
              Nosso site utiliza cookies e tecnologias similares para melhorar sua experiência de navegação. Os tipos de cookies que utilizamos:
            </p>
            <ul>
              <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site. Não podem ser desativados.</li>
              <li><strong>Cookies analíticos:</strong> nos ajudam a entender como os visitantes interagem com o site (ex: Google Analytics). Ativados apenas com seu consentimento.</li>
              <li><strong>Cookies de marketing:</strong> utilizados para exibir anúncios relevantes. Ativados apenas com seu consentimento.</li>
            </ul>
            <p>
              Você pode gerenciar suas preferências de cookies nas configurações do seu navegador. A desativação de cookies pode afetar algumas funcionalidades do site.
            </p>
          </Section>

          <Section title="8. Seus direitos (LGPD)">
            <p>
              Nos termos da LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul>
              <li><strong>Confirmação e acesso:</strong> solicitar confirmação da existência de tratamento e acesso aos dados.</li>
              <li><strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
              <li><strong>Anonimização, bloqueio ou eliminação:</strong> de dados desnecessários, excessivos ou tratados em desconformidade.</li>
              <li><strong>Portabilidade:</strong> solicitar a transferência dos seus dados a outro fornecedor de serviço.</li>
              <li><strong>Eliminação:</strong> solicitar a exclusão dos dados tratados com base em consentimento.</li>
              <li><strong>Revogação do consentimento:</strong> retirar o consentimento a qualquer momento.</li>
              <li><strong>Oposição:</strong> opor-se ao tratamento realizado com fundamento em outras bases legais.</li>
              <li><strong>Informação:</strong> ser informado sobre as entidades com as quais compartilhamos seus dados.</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, entre em contato pelo e-mail: <strong>privacidade@itowl.com.br</strong>.
            </p>
          </Section>

          <Section title="9. Segurança dos dados">
            <p>
              A ITOWL adota medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição indevida, incluindo:
            </p>
            <ul>
              <li>Criptografia em trânsito (TLS/SSL) e em repouso.</li>
              <li>Controle de acesso baseado em funções (RBAC).</li>
              <li>Monitoramento contínuo de segurança.</li>
              <li>Treinamento regular da equipe em boas práticas de segurança da informação.</li>
            </ul>
          </Section>

          <Section title="10. Transferência internacional de dados">
            <p>
              Alguns dos nossos fornecedores de tecnologia podem estar localizados fora do Brasil. Quando realizamos transferência internacional de dados pessoais, garantimos que o país de destino oferece grau de proteção adequado, ou adotamos salvaguardas contratuais conforme exigido pela LGPD.
            </p>
          </Section>

          <Section title="11. Encarregado de Proteção de Dados (DPO)">
            <p>
              Nomeamos um Encarregado de Proteção de Dados (DPO) responsável por supervisionar nossa conformidade com a LGPD e atender às solicitações dos titulares de dados.
            </p>
            <p>
              <strong>Contato do DPO:</strong><br />
              E-mail: <strong>privacidade@itowl.com.br</strong><br />
              ITOWL Tecnologia — Brasil
            </p>
          </Section>

          <Section title="12. Alterações nesta política">
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. Notificaremos alterações relevantes por e-mail (quando aplicável) ou mediante aviso destacado em nosso site.
            </p>
            <p>
              Recomendamos que você revise esta política regularmente. O uso continuado do site após as alterações constitui aceitação da versão atualizada.
            </p>
          </Section>

          <Section title="13. Contato">
            <p>
              Para dúvidas, solicitações ou reclamações relacionadas à privacidade e ao tratamento de dados pessoais:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 not-prose">
              <p className="text-slate-700 text-sm"><strong className="text-slate-900">ITOWL Tecnologia</strong></p>
              <p className="text-slate-600 text-sm mt-1">E-mail: privacidade@itowl.com.br</p>
              <p className="text-slate-600 text-sm">Site: www.itowl.com.br</p>
              <p className="text-slate-600 text-sm">Brasil</p>
            </div>
            <p>
              Você também tem o direito de apresentar reclamação à <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong> — <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-[#0e7488] hover:underline">www.gov.br/anpd</a>.
            </p>
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
