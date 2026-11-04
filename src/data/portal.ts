import type { PortalNotification, PortalRole, PortalRoleId, PortalWorkspace } from '../types/portal'

/*
 * Dados fictícios do portal demonstrativo.
 * Nenhum nome, turma, valor ou comunicado corresponde a pessoas reais.
 */
export const portalRoles: PortalRole[] = [
  {
    id: 'responsavel',
    label: 'Responsável',
    description: 'Acompanhe comunicados, presenças, mensalidades e autorizações.',
    demoUserName: 'Marina Almeida (fictícia)',
    demoUserEmail: 'responsavel@demonstracao.local',
    demoUserContext: '2 crianças fictícias matriculadas',
    modules: [
      { id: 'comunicados', label: 'Comunicados', description: 'Recados da unidade e da secretaria.' },
      { id: 'presencas', label: 'Presenças', description: 'Registro diário de entrada, saída e ausências.' },
      { id: 'mensalidades', label: 'Mensalidades', description: 'Boletos simulados e histórico de pagamentos.' },
      { id: 'autorizacoes', label: 'Autorizações', description: 'Saídas, passeios e medicamentos.' },
    ],
  },
  {
    id: 'professor',
    label: 'Professor',
    description: 'Organize turmas, chamada, planejamento e registros do dia.',
    demoUserName: 'Rafael Souza (fictício)',
    demoUserEmail: 'professor@demonstracao.local',
    demoUserContext: 'Mini-Grupo II · turma fictícia',
    modules: [
      { id: 'turmas', label: 'Turmas', description: 'Crianças fictícias, idade e responsáveis.' },
      { id: 'chamada', label: 'Chamada', description: 'Presença do dia por turma.' },
      { id: 'planejamento', label: 'Planejamento', description: 'Atividades e materiais por semana.' },
      { id: 'registros', label: 'Registros', description: 'Observações pedagógicas do dia.' },
    ],
  },
  {
    id: 'secretaria',
    label: 'Secretaria',
    description: 'Atenda famílias, organize matrículas e documentos.',
    demoUserName: 'Camila Ferreira (fictícia)',
    demoUserEmail: 'secretaria@demonstracao.local',
    demoUserContext: 'Atendimento em três unidades fictícias',
    modules: [
      { id: 'matriculas', label: 'Matrículas', description: 'Solicitações fictícias aguardando análise.' },
      { id: 'documentos', label: 'Documentos', description: 'Pendências de documentação das famílias.' },
      { id: 'atendimentos', label: 'Atendimentos', description: 'Fila simulada de contatos e retornos.' },
      { id: 'cadastros', label: 'Cadastros', description: 'Dados fictícios de crianças e responsáveis.' },
    ],
  },
  {
    id: 'diretoria',
    label: 'Diretoria',
    description: 'Acompanhe indicadores, equipe e comunicados institucionais.',
    demoUserName: 'Eduardo Martins (fictício)',
    demoUserEmail: 'diretoria@demonstracao.local',
    demoUserContext: 'Visão consolidada das unidades fictícias',
    modules: [
      { id: 'indicadores', label: 'Indicadores', description: 'Ocupação, frequência e permanência.' },
      { id: 'unidades', label: 'Unidades', description: 'Comparativo entre as unidades fictícias.' },
      { id: 'equipe', label: 'Equipe', description: 'Quadro fictício de colaboradores.' },
      { id: 'comunicados', label: 'Comunicados', description: 'Publicações para toda a instituição.' },
    ],
  },
]

export const portalWorkspaces: PortalWorkspace[] = [
  {
    roleId: 'responsavel',
    headline: 'Acompanhe o dia das crianças sem precisar ligar para a unidade.',
    summary:
      'Este painel reúne o que uma família fictícia veria: recados, presenças, mensalidades e autorizações pendentes.',
    metrics: [
      { id: 'comunicados', label: 'Comunicados não lidos', value: '3', hint: '2 novos nesta semana', tone: 'warning' },
      { id: 'presencas', label: 'Presenças no mês', value: '92%', hint: '2 ausências justificadas', tone: 'positive' },
      { id: 'mensalidades', label: 'Mensalidade em aberto', value: '1', hint: 'Vencimento fictício em 10 dias', tone: 'warning' },
      { id: 'autorizacoes', label: 'Autorizações pendentes', value: '2', hint: 'Passeio e uso de imagem', tone: 'neutral' },
    ],
    agenda: [
      { id: 'agenda-1', date: '12 de maio', title: 'Reunião de responsáveis', detail: 'Unidade Centro · 18h30 · sala multiuso' },
      { id: 'agenda-2', date: '16 de maio', title: 'Entrega do portfólio do semestre', detail: 'Mini-Grupo II · com a professora da turma' },
      { id: 'agenda-3', date: '23 de maio', title: 'Festa das famílias', detail: 'Pátio da unidade · entrada gratuita' },
    ],
    notices: [
      { id: 'aviso-1', title: 'Cardápio da semana atualizado', body: 'A nutricionista fictícia revisou o almoço de quinta-feira.', time: 'Hoje, 08h10', tone: 'neutral' },
      { id: 'aviso-2', title: 'Saída antecipada registrada', body: 'A criança fictícia saiu às 15h com autorização da família.', time: 'Ontem, 15h05', tone: 'positive' },
      { id: 'aviso-3', title: 'Documento pendente', body: 'Falta a cópia fictícia do cartão de vacinação.', time: '2 dias atrás', tone: 'warning' },
    ],
    quickActions: [
      { id: 'acao-1', label: 'Ler comunicados', moduleId: 'comunicados' },
      { id: 'acao-2', label: 'Ver presenças', moduleId: 'presencas' },
      { id: 'acao-3', label: 'Enviar autorização', moduleId: 'autorizacoes' },
    ],
  },
  {
    roleId: 'professor',
    headline: 'O que precisa de atenção na turma antes da próxima atividade.',
    summary:
      'Painel de exemplo para o corpo docente: chamada do dia, planejamentos, registros e crianças fictícias da turma.',
    metrics: [
      { id: 'turma', label: 'Crianças na turma', value: '18', hint: 'Mini-Grupo II · período integral', tone: 'neutral' },
      { id: 'chamada', label: 'Chamada de hoje', value: 'Pendente', hint: 'Registro até as 9h', tone: 'warning' },
      { id: 'planejamento', label: 'Planejamentos entregues', value: '4/5', hint: 'Semana atual', tone: 'warning' },
      { id: 'registros', label: 'Registros do dia', value: '6', hint: 'Observações pedagógicas', tone: 'positive' },
    ],
    agenda: [
      { id: 'agenda-1', date: 'Hoje', title: 'Chamada do período da manhã', detail: 'Turma fictícia · 18 crianças' },
      { id: 'agenda-2', date: '13 de maio', title: 'Entrega do planejamento semanal', detail: 'Coordenação pedagógica · formato digital' },
      { id: 'agenda-3', date: '15 de maio', title: 'Reunião de equipe docente', detail: 'Sala dos professores · 17h' },
    ],
    notices: [
      { id: 'aviso-1', title: 'Autorização de passeio recebida', body: 'Uma família fictícia enviou a autorização pendente.', time: 'Hoje, 07h40', tone: 'positive' },
      { id: 'aviso-2', title: 'Criança com restrição alimentar', body: 'Registro fictício de Restrição alimentar para o lanche.', time: 'Hoje, 07h15', tone: 'warning' },
      { id: 'aviso-3', title: 'Material do ateliê reposto', body: 'A equipe fictícia de apoio repôs tintas e papéis.', time: 'Ontem, 16h30', tone: 'neutral' },
    ],
    quickActions: [
      { id: 'acao-1', label: 'Fazer chamada', moduleId: 'chamada' },
      { id: 'acao-2', label: 'Ver turmas', moduleId: 'turmas' },
      { id: 'acao-3', label: 'Registrar observação', moduleId: 'registros' },
    ],
  },
  {
    roleId: 'secretaria',
    headline: 'Fila de atendimento e pendências documentais em um só lugar.',
    summary:
      'Visão simulada da secretaria: solicitações de matrícula, documentos em falta e atendimentos do dia.',
    metrics: [
      { id: 'matriculas', label: 'Matrículas em análise', value: '7', hint: '3 aguardam documentos', tone: 'warning' },
      { id: 'documentos', label: 'Documentos pendentes', value: '4', hint: 'Famílias fictícias notificadas', tone: 'warning' },
      { id: 'atendimentos', label: 'Atendimentos hoje', value: '12', hint: 'Presenciais e telefônicos', tone: 'neutral' },
      { id: 'vagas', label: 'Vagas demonstrativas', value: '9', hint: 'Somadas entre as unidades', tone: 'positive' },
    ],
    agenda: [
      { id: 'agenda-1', date: 'Hoje', title: 'Fechamento da lista de espera', detail: 'Revisão fictícia por unidade' },
      { id: 'agenda-2', date: '14 de maio', title: 'Envio de documentos à diretoria', detail: 'Relatório mensal simulado' },
      { id: 'agenda-3', date: '20 de maio', title: 'Plantão de matrículas', detail: 'Atendimento estendido até 19h' },
    ],
    notices: [
      { id: 'aviso-1', title: 'Nova solicitação de matrícula', body: 'Uma família fictícia solicitou vaga no berçário.', time: 'Hoje, 09h20', tone: 'neutral' },
      { id: 'aviso-2', title: 'Documento recebido', body: 'Comprovante fictício de residência anexado ao cadastro.', time: 'Hoje, 08h45', tone: 'positive' },
      { id: 'aviso-3', title: 'Cadastro incompleto', body: 'Falta o telefone fictício de um responsável.', time: 'Ontem, 17h10', tone: 'danger' },
    ],
    quickActions: [
      { id: 'acao-1', label: 'Analisar matrículas', moduleId: 'matriculas' },
      { id: 'acao-2', label: 'Cobrar documentos', moduleId: 'documentos' },
      { id: 'acao-3', label: 'Abrir atendimentos', moduleId: 'atendimentos' },
    ],
  },
  {
    roleId: 'diretoria',
    headline: 'Indicadores consolidados das unidades fictícias.',
    summary:
      'Painel de exemplo para a diretoria: ocupação, frequência, ocorrências e quadro de equipe por unidade.',
    metrics: [
      { id: 'unidades', label: 'Unidades ativas', value: '3', hint: 'Centro, Jardim e Vila Nova', tone: 'neutral' },
      { id: 'criancas', label: 'Crianças atendidas', value: '96', hint: 'Total fictício do mês', tone: 'positive' },
      { id: 'ocorrencias', label: 'Ocorrências abertas', value: '2', hint: 'Acompanhamento pedagógico', tone: 'warning' },
      { id: 'equipe', label: 'Equipe em atividade', value: '24', hint: 'Colaboradores fictícios', tone: 'neutral' },
    ],
    agenda: [
      { id: 'agenda-1', date: 'Hoje', title: 'Reunião de diretoria', detail: 'Indicadores fictícios do trimestre' },
      { id: 'agenda-2', date: '18 de maio', title: 'Visita técnica à Unidade Jardim', detail: 'Acompanhamento pedagógico simulado' },
      { id: 'agenda-3', date: '28 de maio', title: 'Conselho institucional', detail: 'Apresentação do relatório demonstrativo' },
    ],
    notices: [
      { id: 'aviso-1', title: 'Ocupação acima da média', body: 'A Unidade Vila Nova ultrapassou 90% das vagas fictícias.', time: 'Hoje, 07h50', tone: 'positive' },
      { id: 'aviso-2', title: 'Ocorrência registrada', body: 'Um registro fictício aguarda parecer da coordenação.', time: 'Ontem, 14h20', tone: 'warning' },
      { id: 'aviso-3', title: 'Planejamento entregue', body: 'Todas as unidades fictícias enviaram o planejamento mensal.', time: '2 dias atrás', tone: 'positive' },
    ],
    quickActions: [
      { id: 'acao-1', label: 'Ver indicadores', moduleId: 'indicadores' },
      { id: 'acao-2', label: 'Comparar unidades', moduleId: 'unidades' },
      { id: 'acao-3', label: 'Consultar equipe', moduleId: 'equipe' },
    ],
  },
]

export const portalNotifications: Record<PortalRoleId, PortalNotification[]> = {
  responsavel: [
    { id: 'notif-r1', title: 'Novo comunicado', description: 'Reunião de responsáveis marcada para 12 de maio.', time: 'há 20 min' },
    { id: 'notif-r2', title: 'Presença registrada', description: 'Entrada fictícia confirmada às 7h05.', time: 'hoje' },
    { id: 'notif-r3', title: 'Mensalidade simulada', description: 'Um boleto fictício está próximo do vencimento.', time: 'ontem' },
  ],
  professor: [
    { id: 'notif-p1', title: 'Chamada pendente', description: 'A turma fictícia ainda não teve presença registrada.', time: 'há 15 min' },
    { id: 'notif-p2', title: 'Planejamento comentado', description: 'A coordenação fictícia devolveu uma atividade.', time: 'hoje' },
    { id: 'notif-p3', title: 'Novo registro de família', description: 'Uma família fictícia enviou uma observação.', time: 'ontem' },
  ],
  secretaria: [
    { id: 'notif-s1', title: 'Nova matrícula', description: 'Solicitação fictícia aguardando análise.', time: 'há 10 min' },
    { id: 'notif-s2', title: 'Documento pendente', description: 'Duas famílias fictícias ainda não enviaram documentos.', time: 'hoje' },
    { id: 'notif-s3', title: 'Atendimento encerrado', description: 'Um atendimento simulado foi concluído.', time: 'ontem' },
  ],
  diretoria: [
    { id: 'notif-d1', title: 'Indicador atualizado', description: 'A ocupação fictícia das unidades foi recalculada.', time: 'há 30 min' },
    { id: 'notif-d2', title: 'Ocorrência aguardando parecer', description: 'Um registro fictício precisa de avaliação.', time: 'hoje' },
    { id: 'notif-d3', title: 'Relatório disponível', description: 'O consolidado demonstrativo do mês foi gerado.', time: '2 dias atrás' },
  ],
}
