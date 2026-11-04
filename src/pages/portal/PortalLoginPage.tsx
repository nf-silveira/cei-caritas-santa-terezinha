import { useState, type FormEvent } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link, Navigate } from 'react-router-dom'
import Alert from '../../components/common/Alert'
import Badge from '../../components/common/Badge'
import Button from '../../components/common/Button'
import FormField from '../../components/common/FormField'
import { usePortalSession } from '../../context/PortalSessionContext'
import { siteImages } from '../../data/siteImages'
import { getPortalRoles } from '../../services/portalService'
import { getInstitution } from '../../services/institutionService'
import './PortalLoginPage.css'

type Feedback = 'idle' | 'recovery' | 'submit'

interface FormErrors {
  email?: string
  password?: string
}

function PortalLoginPage() {
  const institution = getInstitution()
  const roles = getPortalRoles()
  const { session, login } = usePortalSession()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [feedback, setFeedback] = useState<Feedback>('idle')

  if (session) {
    return <Navigate to={`/portal/${session.roleId}`} replace />
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: FormErrors = {}

    if (!email.trim()) {
      nextErrors.email = 'Informe um e-mail fictício para simular o acesso.'
    } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      nextErrors.email = 'Use o formato nome@exemplo.com.'
    }

    if (!password.trim()) {
      nextErrors.password = 'Informe qualquer senha para simular o acesso.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setFeedback('idle')
      return
    }

    setFeedback('submit')
  }

  return (
    <div className="portal-login">
      <section className="portal-login__aside">
        <Link to="/" className="portal-login__brand">
          <img
            src={siteImages.logo.src}
            alt={`${institution.name} — página inicial`}
            className="portal-login__logo"
            width={900}
            height={600}
          />
        </Link>

        <p className="portal-login__eyebrow">Portal demonstrativo</p>
        <h1 className="portal-login__title">{institution.name}</h1>
        <p className="portal-login__tagline">{institution.tagline}</p>

        <ul className="portal-login__highlights">
          <li>
            <ShieldCheck size={18} aria-hidden="true" />
            Nenhuma credencial real é solicitada ou validada.
          </li>
          <li>
            <ShieldCheck size={18} aria-hidden="true" />
            Todos os nomes, turmas e valores são fictícios.
          </li>
          <li>
            <ShieldCheck size={18} aria-hidden="true" />
            O portal demonstra apenas a estrutura visual do produto.
          </li>
        </ul>

        <Badge tone="warning">Ambiente de demonstração</Badge>

        <p className="portal-login__back">
          <Link to="/">Voltar ao site público</Link>
        </p>
      </section>

      <section className="portal-login__panel" aria-labelledby="portal-login-acesso">
        <h2 className="portal-login__panel-title" id="portal-login-acesso">
          Acessar o portal
        </h2>
        <p className="portal-login__panel-hint">
          Preencha os campos com dados fictícios. O formulário ilustra o fluxo, sem autenticação real.
        </p>

        <form className="portal-login__form" onSubmit={handleSubmit} noValidate>
          <FormField
            id="portal-email"
            label="E-mail"
            type="email"
            autoComplete="email"
            value={email}
            hint={`Ex.: ${roles[0].demoUserEmail}`}
            error={errors.email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <FormField
            id="portal-senha"
            label="Senha"
            type="password"
            autoComplete="current-password"
            value={password}
            hint="Qualquer valor é aceito nesta demonstração."
            error={errors.password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <div className="portal-login__actions">
            <Button type="submit" fullWidth iconRight={<ArrowRight size={18} />}>
              Entrar
            </Button>
            <button type="button" className="portal-login__link" onClick={() => setFeedback('recovery')}>
              Esqueci minha senha
            </button>
          </div>
        </form>

        {feedback === 'submit' ? (
          <Alert variant="info" title="Acesso não autenticado">
            Este formulário não cria sessão real. Escolha um dos perfis de demonstração abaixo para explorar o portal.
          </Alert>
        ) : null}

        {feedback === 'recovery' ? (
          <Alert variant="info" title="Recuperação simulada">
            Em um sistema real, um e-mail de redefinição seria enviado. Aqui nenhuma mensagem é disparada.
          </Alert>
        ) : null}

        <div className="portal-login__profiles">
          <h3 className="portal-login__profiles-title">Entrar com um perfil de demonstração</h3>
          <p className="portal-login__profiles-hint">
            Cada perfil abre um conjunto diferente de áreas. Nenhuma senha é necessária.
          </p>

          <ul className="portal-login__roles">
            {roles.map((role) => (
              <li key={role.id}>
                <button type="button" className="portal-login__role" onClick={() => login(role.id)}>
                  <span className="portal-login__role-text">
                    <span className="portal-login__role-label">Entrar como {role.label.toLowerCase()}</span>
                    <span className="portal-login__role-description">{role.description}</span>
                  </span>
                  <ArrowRight size={18} aria-hidden="true" className="portal-login__role-icon" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default PortalLoginPage
