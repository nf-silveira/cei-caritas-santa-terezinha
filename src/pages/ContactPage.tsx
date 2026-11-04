import { useState } from 'react'
import type { FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Alert from '../components/common/Alert'
import Button from '../components/common/Button'
import FormField from '../components/common/FormField'
import FormTextarea from '../components/common/FormTextarea'
import PageHeader from '../components/common/PageHeader'
import { getInstitution } from '../services/institutionService'
import '../styles/site-pages.css'

function ContactPage() {
  const institution = getInstitution()
  const [submitted, setSubmitted] = useState(false)

  const mapQuery = encodeURIComponent(institution.mapQuery)
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&hl=pt-BR&z=13&output=embed`
  const mapExternalUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-page">
      <PageHeader
        eyebrow="Contato"
        title="Fale com a secretaria"
        description="Tire dúvidas sobre matrículas, visitas à unidade e rotina escolar. O atendimento é feito de segunda a sexta-feira."
      />

      <div className="contact-layout">
        <section className="contact-info" aria-labelledby="contato-dados">
          <h2 id="contato-dados">Canais de atendimento</h2>

          <ul>
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>{institution.address}</span>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <span>{institution.phone}</span>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <span>{institution.email}</span>
            </li>
            <li>
              <Clock size={18} aria-hidden="true" />
              <span>{institution.hours}</span>
            </li>
          </ul>

          <Alert variant="warning" title="Dados fictícios">
            Endereço, telefone e e-mail são ilustrativos. Nenhum contato real deve ser feito por estes canais.
          </Alert>
        </section>

        <section className="contact-form" aria-labelledby="contato-formulario">
          <h2 id="contato-formulario">Enviar mensagem</h2>

          {submitted ? (
            <Alert variant="success" title="Mensagem registrada">
              Este é um envio simulado: nenhuma mensagem foi encaminhada à instituição. Em uma versão real, os dados
              seguiriam para a secretaria da unidade escolhida.
            </Alert>
          ) : null}

          <form onSubmit={handleSubmit}>
            <div className="contact-form__fields">
              <FormField
                id="contato-nome"
                name="nome"
                label="Nome completo"
                placeholder="Ex.: Maria Silva"
                autoComplete="name"
                required
              />
              <FormField
                id="contato-email"
                name="email"
                type="email"
                inputMode="email"
                label="E-mail"
                placeholder="nome@exemplo.invalid"
                autoComplete="email"
                hint="Use um endereço fictício durante a demonstração."
                required
              />
              <FormField
                id="contato-telefone"
                name="telefone"
                type="tel"
                inputMode="tel"
                label="Telefone"
                placeholder="(00) 0000-0000"
                autoComplete="tel"
              />
              <FormField
                id="contato-assunto"
                name="assunto"
                label="Assunto"
                placeholder="Ex.: Matrícula na Unidade Centro"
              />
              <FormTextarea
                id="contato-mensagem"
                name="mensagem"
                label="Mensagem"
                placeholder="Escreva sua dúvida ou o motivo do contato."
                hint="Campo demonstrativo, sem envio real."
                required
              />
            </div>

            <div className="contact-form__actions">
              <Button type="submit" iconLeft={<Mail size={18} />}>
                Enviar mensagem
              </Button>
              <Button type="reset" variant="ghost">
                Limpar campos
              </Button>
            </div>
          </form>
        </section>
      </div>

      <section className="contact-map" aria-labelledby="contato-mapa">
        <h2 id="contato-mapa">Como chegar</h2>
        <p className="contact-map__caption">
          Mapa ilustrativo do Google Maps. A localização não corresponde a uma unidade real.
        </p>

        <div className="contact-map__frame">
          <iframe
            src={mapEmbedUrl}
            title={`Mapa do Google Maps com a localização de ${institution.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a className="contact-map__link" href={mapExternalUrl} target="_blank" rel="noopener noreferrer">
          Abrir no Google Maps
          <span className="visually-hidden"> (abre em nova aba)</span>
        </a>
      </section>
    </div>
  )
}

export default ContactPage
