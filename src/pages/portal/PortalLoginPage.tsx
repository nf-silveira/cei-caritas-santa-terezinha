import { useState, type FormEvent } from 'react'
import { ArrowLeft, ArrowRight, Eye, EyeOff } from 'lucide-react'
import { Link, Navigate } from 'react-router-dom'
import Alert from '../../components/common/Alert'
import Button from '../../components/common/Button'
import FormField from '../../components/common/FormField'
import { usePortalSession } from '../../context/PortalSessionContext'
import { portalLoginImage } from '../../data/portalLoginImages'
import { siteImages } from '../../data/siteImages'
import { getPortalRoles } from '../../services/portalService'
import { getInstitution } from '../../services/institutionService'
import type { PortalRoleId } from '../../types/portal'
import './PortalLoginPage.css'

function PortalLoginPage() {
  const institution = getInstitution()
  const roles = getPortalRoles()
  const { session, login } = usePortalSession()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [roleId, setRoleId] = useState<PortalRoleId>(roles[0].id)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isRecoveryOpen, setIsRecoveryOpen] = useState(false)

  if (session) {
    return <Navigate to={`/portal/${session.roleId}`} replace />
  }

  // Demonstração: não há banco de dados nem autenticação. O perfil escolhido define o acesso,
  // e os campos de e-mail e senha são apenas ilustrativos.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login(roleId)
  }

  return (
    <div className="login">
      <section className="login__visual" aria-labelledby="login-boas-vindas">
        <img src={portalLoginImage.src} alt={portalLoginImage.alt} className="login__visual-image" />

        <div className="login__visual-content">
          <p className="login__product">Portal Caritas</p>
          <h1 className="login__welcome" id="login-boas-vindas">
            Olá, família!
          </h1>
          <p className="login__welcome-text">
            Um espaço de conexão, cuidado e acompanhamento da jornada escolar.
          </p>
        </div>

        <p className="login__visual-credit">{portalLoginImage.credit}</p>
      </section>

      <section className="login__access" aria-labelledby="login-titulo">
        <div className="login__form-wrap">
          <Link to="/" className="login__mark" aria-label={`${institution.name} — voltar ao site institucional`}>
            <img src={siteImages.logo.src} alt="" className="login__mark-image" width={900} height={600} />
          </Link>

          <p className="login__institution">{institution.name}</p>
          <h2 className="login__title" id="login-titulo">
            Acesse seu portal
          </h2>
          <p className="login__subtitle">Entre para acompanhar as novidades e a jornada escolar.</p>

          <form className="login__form" onSubmit={handleSubmit} noValidate>
            <FormField
              id="login-email"
              label="E-mail ou usuário"
              type="email"
              autoComplete="username"
              inputMode="email"
              value={email}
              hint="Campo ilustrativo. Nenhum dado é conferido ou enviado."
              onChange={(event) => setEmail(event.target.value)}
            />

            <FormField
              id="login-senha"
              label="Senha"
              type={isPasswordVisible ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              hint="A entrada é liberada pelo perfil de demonstração escolhido."
              onChange={(event) => setPassword(event.target.value)}
              trailing={
                <button
                  type="button"
                  className="login__reveal"
                  aria-pressed={isPasswordVisible}
                  onClick={() => setIsPasswordVisible((visible) => !visible)}
                >
                  {isPasswordVisible ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
                  <span className="visually-hidden">
                    {isPasswordVisible ? 'Ocultar senha' : 'Mostrar senha'}
                  </span>
                </button>
              }
            />

            <p className="login__recovery">
              <button type="button" className="login__link" onClick={() => setIsRecoveryOpen(true)}>
                Esqueceu sua senha?
              </button>
            </p>

            {isRecoveryOpen ? (
              <Alert variant="info" title="Recuperação indisponível">
                Este recurso não está disponível na demonstração. Nenhum e-mail é enviado e nenhuma senha é
                armazenada.
              </Alert>
            ) : null}

            <div className="login__profile">
              <label className="login__profile-label" htmlFor="login-perfil">
                Perfil de demonstração
              </label>
              <select
                id="login-perfil"
                className="login__profile-select"
                value={roleId}
                onChange={(event) => setRoleId(event.target.value as PortalRoleId)}
              >
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.label}
                  </option>
                ))}
              </select>
            </div>

            <Button type="submit" size="lg" fullWidth iconRight={<ArrowRight size={18} />}>
              Entrar como {roles.find((role) => role.id === roleId)?.label.toLowerCase()}
            </Button>
          </form>

          <p className="login__demo-note">
            Acesso demonstrativo: o botão abre o portal com o perfil selecionado, sem validar senha. Nenhum dado
            é enviado ou armazenado.
          </p>

          <p className="login__back">
            <Link to="/" className="login__back-link">
              <ArrowLeft size={16} aria-hidden="true" />
              Voltar ao site institucional
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default PortalLoginPage
