import { Check, Inbox, MailCheck, SearchX, Trash2 } from 'lucide-react'
import Alert from '../components/common/Alert'
import Avatar from '../components/common/Avatar'
import Badge from '../components/common/Badge'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import EmptyState from '../components/common/EmptyState'
import FormField from '../components/common/FormField'
import SectionHeader from '../components/common/SectionHeader'
import StatusIndicator from '../components/common/StatusIndicator'
import { colorTokens, typeSamples } from '../data/designSystem'
import './DesignSystemPage.css'

function DesignSystemPage() {
  return (
    <div className="ds-demo">
      <header className="ds-demo__intro">
        <p className="ds-demo__eyebrow">Identidade visual</p>
        <h1>Design System</h1>
        <p className="ds-demo__lead">
          Tokens, tipografia e componentes reutilizáveis que sustentam o site institucional e o portal. Os exemplos
          abaixo são ilustrativos e usam apenas dados fictícios.
        </p>
      </header>

      <section className="ds-demo__section" aria-labelledby="ds-cores">
        <SectionHeader
          id="ds-cores"
          eyebrow="Fundamentos"
          title="Paleta de cores"
          description="Códigos HEX centralizados em variáveis CSS em src/styles/tokens.css. Nenhum componente declara cor diretamente."
        />
        <ul className="ds-demo__swatches">
          {colorTokens.map((token) => (
            <li className="ds-demo__swatch" key={token.name}>
              <span className={`ds-demo__swatch-color ds-demo__swatch-color--${token.name}`} aria-hidden="true" />
              <span className="ds-demo__swatch-token">{token.variable}</span>
              <code className="ds-demo__swatch-value">{token.value}</code>
              <span className="ds-demo__swatch-usage">{token.usage}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="ds-demo__section" aria-labelledby="ds-tipografia">
        <SectionHeader
          id="ds-tipografia"
          eyebrow="Fundamentos"
          title="Tipografia"
          description="Fonte de sistema com Inter e Atkinson Hyperlegible como preferência, corpo de 16px e hierarquia fluida com clamp()."
        />
        <ul className="ds-demo__type-list">
          {typeSamples.map((sample) => (
            <li className="ds-demo__type-item" key={sample.className}>
              <span className={`ds-demo__type ${sample.className}`}>{sample.example}</span>
              <span className="ds-demo__type-meta">
                {sample.label} · {sample.description}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="ds-demo__section" aria-labelledby="ds-botoes">
        <SectionHeader
          id="ds-botoes"
          eyebrow="Componentes"
          title="Botões"
          description="Altura mínima de 44px para toque, cinco variações e possibilidade de virar link de rota."
        />
        <div className="ds-demo__rows">
          <Button>Confirmar interesse</Button>
          <Button variant="secondary" iconLeft={<Check size={18} />}>
            Confirmado
          </Button>
          <Button variant="outline">Ver detalhes</Button>
          <Button variant="ghost">Cancelar</Button>
          <Button variant="danger" iconLeft={<Trash2 size={18} />}>
            Remover
          </Button>
        </div>
        <div className="ds-demo__rows">
          <Button size="lg">Ação principal</Button>
          <Button disabled>Indisponível</Button>
          <Button variant="outline" to="/portal">
            Link para o portal
          </Button>
        </div>
        <div className="ds-demo__stack ds-demo__stack--narrow">
          <Button fullWidth>Botão de largura total no celular</Button>
        </div>
      </section>

      <section className="ds-demo__section" aria-labelledby="ds-cards">
        <SectionHeader
          id="ds-cards"
          eyebrow="Componentes"
          title="Cards"
          description="Superfícies com cantos arredondados, sombra discreta e espaçamento generoso."
        />
        <div className="ds-demo__grid">
          <Card
            title="Reunião de responsáveis"
            subtitle="Mini-Grupo I · 12 de novembro"
            actions={<Badge tone="primary">Agenda</Badge>}
            footer={
              <>
                <Button variant="outline">Adicionar ao calendário</Button>
                <StatusIndicator tone="positive">Confirmado</StatusIndicator>
              </>
            }
          >
            <p>
              Encontro bimestral para acompanhar o desenvolvimento das crianças, com apresentação das atividades do
              período.
            </p>
          </Card>

          <Card
            accent
            title="Documento pendente"
            subtitle="Atualizado há 2 dias"
            actions={<Badge tone="warning">Pendente</Badge>}
            footer={<Button variant="ghost">Enviar documento</Button>}
          >
            <p>Falta anexar a autorização de imagem para o segundo semestre letivo.</p>
          </Card>

          <Card title="Aviso da unidade" subtitle="Publicado hoje">
            <p>O horário de saída permanece o mesmo durante a semana de avaliações.</p>
            <StatusIndicator tone="neutral">Leitura opcional</StatusIndicator>
          </Card>
        </div>
      </section>

      <section className="ds-demo__section" aria-labelledby="ds-status">
        <SectionHeader
          id="ds-status"
          eyebrow="Componentes"
          title="Badges e indicadores de status"
          description="Status sempre acompanhados de texto, nunca transmitidos apenas pela cor."
        />
        <div className="ds-demo__rows">
          <Badge tone="primary">Informativo</Badge>
          <Badge tone="positive">Aprovado</Badge>
          <Badge tone="warning">Em análise</Badge>
          <Badge tone="danger">Reprovado</Badge>
          <Badge tone="neutral">Arquivado</Badge>
        </div>
        <div className="ds-demo__rows">
          <StatusIndicator tone="positive">Presença confirmada</StatusIndicator>
          <StatusIndicator tone="warning">Aguardando correção</StatusIndicator>
          <StatusIndicator tone="danger">Documento vencido</StatusIndicator>
          <StatusIndicator tone="info">Em revisão</StatusIndicator>
          <StatusIndicator tone="neutral">Sem atualização</StatusIndicator>
        </div>
      </section>

      <section className="ds-demo__section" aria-labelledby="ds-formulario">
        <SectionHeader
          id="ds-formulario"
          eyebrow="Componentes"
          title="Campos de formulário"
          description="Rótulo sempre visível, dica de preenchimento e erro junto ao campo, com fonte de 16px."
        />
        <div className="ds-demo__grid">
          <FormField
            id="ds-nome"
            label="Nome do responsável"
            placeholder="Ex.: Maria Silva"
            autoComplete="name"
            hint="Como consta no cadastro da unidade."
            required
          />
          <FormField
            id="ds-email"
            label="E-mail"
            type="email"
            inputMode="email"
            placeholder="nome@exemplo.invalid"
            autoComplete="email"
            hint="Usado apenas para contato neste protótipo."
          />
          <FormField
            id="ds-telefone"
            label="Telefone"
            type="tel"
            inputMode="tel"
            placeholder="(00) 0000-0000"
            autoComplete="tel"
            defaultValue="0000"
            error="Informe um telefone com DDD."
          />
          <FormField
            id="ds-unidade"
            label="Unidade"
            disabled
            defaultValue="Unidade Centro"
            hint="Campo bloqueado nesta demonstração."
          />
        </div>
        <div className="ds-demo__stack ds-demo__stack--narrow">
          <Button variant="secondary" fullWidth iconLeft={<MailCheck size={18} />}>
            Enviar confirmação
          </Button>
        </div>
      </section>

      <section className="ds-demo__section" aria-labelledby="ds-alertas">
        <SectionHeader
          id="ds-alertas"
          eyebrow="Componentes"
          title="Alertas"
          description="Mensagens curtas com ícone e texto de apoio, sem depender de cor para comunicar."
        />
        <div className="ds-demo__stack">
          <Alert variant="info" title="Novidade na agenda">
            As reuniões do próximo bimestre já estão publicadas para consulta.
          </Alert>
          <Alert variant="success" title="Cadastro atualizado">
            Seus dados foram salvos com sucesso.
          </Alert>
          <Alert variant="warning" title="Documento em análise">
            A autorização de imagem precisa ser revisada pela equipe da unidade.
          </Alert>
          <Alert variant="danger" title="Não foi possível enviar">
            Verifique a conexão e tente novamente em alguns instantes.
          </Alert>
        </div>
      </section>

      <section className="ds-demo__section" aria-labelledby="ds-avatares">
        <SectionHeader
          id="ds-avatares"
          eyebrow="Componentes"
          title="Avatares e estados vazios"
          description="Avatares ilustrativos com iniciais e um estado vazio com ação sugerida."
        />
        <div className="ds-demo__rows">
          <Avatar name="Ana Beatriz Lima" tone="primary" size="lg" />
          <Avatar name="Carlos Eduardo Souza" tone="secondary" />
          <Avatar name="Mariana Alves" tone="accent" />
          <Avatar name="João Pedro" size="sm" />
        </div>
        <EmptyState
          icon={<Inbox size={22} />}
          title="Nenhuma mensagem por aqui"
          description="Quando a equipe da unidade enviar um aviso, ele aparecerá nesta área."
          action={<Button variant="outline">Atualizar</Button>}
        />
        <EmptyState
          icon={<SearchX size={22} />}
          title="Nenhum resultado encontrado"
          description="Ajuste os filtros ou tente outra busca."
        />
      </section>

      <section className="ds-demo__section" aria-labelledby="ds-navegacao">
        <SectionHeader
          id="ds-navegacao"
          eyebrow="Componentes"
          title="Navegação"
          description="O componente NavMenu no cabeçalho vira um menu suspenso no celular e uma barra horizontal a partir de 1200px."
        />
        <Card title="Como testar" subtitle="Comportamento responsivo">
          <p>
            Reduza a janela abaixo de 1200px para ver o botão de menu, o fechamento por Esc e o clique fora. Os destinos
            ativos são indicados com fundo azul e texto branco, além do atributo de acessibilidade correspondente.
          </p>
        </Card>
      </section>
    </div>
  )
}

export default DesignSystemPage
