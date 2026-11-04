import Button from '../components/common/Button'
import Card from '../components/common/Card'
import PageHeader from '../components/common/PageHeader'
import SectionHeader from '../components/common/SectionHeader'
import { getInstitution } from '../services/institutionService'
import '../styles/site-pages.css'
import './FaqPage.css'

const faqs = [
  {
    question: 'Como faço a matrícula?',
    answer:
      'As matrículas são feitas na própria unidade, com visita agendada e conversa com a coordenação pedagógica. Ligue para a secretaria e combine o melhor horário.',
  },
  {
    question: 'Quais idades são atendidas?',
    answer:
      'A unidade atende crianças de 0 a 4 anos, distribuídas entre Berçário, Mini-Grupo I e Mini-Grupo II, em período integral.',
  },
  {
    question: 'Qual é o horário de funcionamento?',
    answer:
      'O atendimento acontece de segunda a sexta-feira, em período integral. Para horários específicos de entrada e saída, fale com a secretaria.',
  },
  {
    question: 'A alimentação está incluída?',
    answer:
      'Sim. As refeições fazem parte da rotina da unidade e são acompanhadas pela equipe, com atenção às necessidades e restrições de cada criança.',
  },
  {
    question: 'Como funciona a adaptação?',
    answer:
      'A adaptação é feita de forma gradual, em diálogo com a família e com a equipe da turma, respeitando o tempo de cada criança.',
  },
  {
    question: 'Como acompanho a rotina da criança?',
    answer:
      'As famílias recebem comunicados e podem acompanhar avisos, presenças e autorizações pelo portal. Em caso de dúvidas, a secretaria atende por telefone e e-mail.',
  },
]

const testimonials = [
  {
    quote:
      'O acolhimento no início do ano fez toda a diferença para a nossa família. A equipe explicou cada etapa da adaptação com muita calma.',
    author: 'Família do Berçário',
  },
  {
    quote:
      'Gostamos de acompanhar os projetos e as pequenas descobertas do dia. Os registros ajudam a conversar com a criança sobre o que ela viveu na creche.',
    author: 'Família do Mini-Grupo I',
  },
  {
    quote:
      'A proximidade com as professoras e a coordenação torna a rotina mais tranquila. Sabemos com quem contar em cada momento.',
    author: 'Família do Mini-Grupo II',
  },
]

function FaqPage() {
  const institution = getInstitution()

  return (
    <div className="site-page">
      <PageHeader
        eyebrow="Ajuda"
        title="Perguntas frequentes"
        description="Respostas sobre matrícula, rotina e atendimento da unidade. Se a sua dúvida não estiver aqui, fale com a secretaria."
      />

      <section className="site-section" aria-labelledby="faq-perguntas">
        <SectionHeader
          id="faq-perguntas"
          eyebrow="Dúvidas comuns"
          title="O que as famílias costumam perguntar"
          description="Conteúdo demonstrativo, com orientações genéricas sobre o funcionamento da creche."
        />

        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="site-section" aria-labelledby="faq-depoimentos">
        <SectionHeader
          id="faq-depoimentos"
          eyebrow="Depoimentos"
          title="O que as famílias dizem"
          description="Relatos ilustrativos, sem identificação de pessoas reais, usados apenas para demonstrar o layout."
        />

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <Card className="testimonial" key={testimonial.author}>
              <blockquote>
                <span className="testimonial__quote" aria-hidden="true">
                  “
                </span>
                <p>{testimonial.quote}</p>
              </blockquote>
              <cite>{testimonial.author} · depoimento ilustrativo</cite>
            </Card>
          ))}
        </div>
      </section>

      <section className="site-section" aria-labelledby="faq-contato">
        <SectionHeader
          id="faq-contato"
          eyebrow="Ainda com dúvidas?"
          title="Fale com a secretaria"
          description={`Atendimento de segunda a sexta-feira, em período integral. Telefone ${institution.phone} ou e-mail ${institution.email}.`}
          actions={
            <Button to="/contato" variant="outline">
              Abrir contato
            </Button>
          }
        />
      </section>
    </div>
  )
}

export default FaqPage
