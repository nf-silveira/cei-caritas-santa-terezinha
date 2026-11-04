# CEI Caritas Santa Terezinha — Protótipo

Protótipo demonstrativo de uma plataforma digital para uma instituição de educação infantil. Projeto pessoal e voluntário, sem fins de produção nesta fase. Todos os dados são fictícios e as funcionalidades são simuladas.

## Tecnologias

- React + TypeScript
- Vite
- Bootstrap 5
- React Router

## Pré-requisitos

- Node.js 20+ e npm

## Instalação

```bash
npm install
```

> Observação: o projeto usa `typescript@~7.0.2` junto com `typescript-eslint`, cujo peer dependency ainda não aceita essa versão. Por isso a instalação atual exige `npm install --legacy-peer-deps`.

## Execução

```bash
npm run dev       # servidor de desenvolvimento
npm run build     # verificação de tipos (tsc -b) e geração de arquivos estáticos em dist/
npm run preview   # serve o build localmente
npm run lint      # ESLint
```

## Estrutura

```text
src/
  app/          componente raiz da aplicação
  assets/       imagens e ícones
  components/   componentes reutilizáveis
    common/     componentes genéricos
  data/         dados fictícios
  features/     funcionalidades simuladas
  institutional/ áreas do site institucional público
  layout/       layouts de página (cabeçalho, rodapé)
  navigation/   menus e navegação
  pages/        páginas por rota
  portal/       áreas do portal demonstrativo
  routes/       definição das rotas
  services/     camada de serviços (dados simulados hoje; API real no futuro)
  styles/       estilos globais próprios
  types/        tipos TypeScript
  utils/        funções utilitárias
```

## Deploy

O build gera arquivos estáticos em `dist/`. Pode ser hospedado na Vercel, Netlify, Cloudflare Pages ou em hospedagem tradicional compatível com SPA. O arquivo `vercel.json` já contém a regra de rewrite para as rotas.

## Próximos passos

Desenvolvimento das páginas completas do site institucional e do portal, conforme os prompts em `.docs/`.
