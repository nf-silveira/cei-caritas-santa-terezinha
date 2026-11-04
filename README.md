# CEI Cáritas Santa Terezinha — Protótipo

Protótipo de plataforma digital para um centro de educação infantil, composto por site institucional e portal de acompanhamento. O projeto tem caráter demonstrativo: todos os dados são fictícios, as funcionalidades são simuladas e não há integração com sistemas reais.

## Stack

- React 19 + TypeScript
- Vite
- Bootstrap 5 (grid e utilitários; a identidade visual vem do design system próprio)
- React Router
- Lucide (ícones)

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação

```bash
npm install
```

O TypeScript está fixado em `~6.0.3` para atender ao peer dependency do `typescript-eslint` (`>=4.8.4 <6.1.0`), que ainda não declara suporte ao TypeScript 7.

## Scripts

```bash
npm run dev       # servidor de desenvolvimento
npm run build     # verificação de tipos (tsc -b) e build estático em dist/
npm run preview   # pré-visualização do build
npm run lint      # análise estática com ESLint
```

## Rotas

| Rota             | Conteúdo                                  |
| ---------------- | ----------------------------------------- |
| `/`              | Página inicial demonstrativa              |
| `/portal`        | Área do portal (em construção)            |
| `/design-system` | Demonstração de tokens e componentes      |

## Design System

A identidade visual segue `.docs/00-DESIGN-SYSTEM-E-UX.md` e é a base de todas as telas.

- **Tokens:** `src/styles/tokens.css` concentra cores, tipografia, escala de espaçamento, raios, sombras e medidas de layout. Componentes não declaram valores fixos de cor, fonte ou espaçamento.
- **Estilos base:** `src/styles/global.css` define tipografia, foco visível, container, link de salto e estrutura de página.
- **Componentes:** em `src/components/`, cada componente tem seu CSS co-localizado e API por props.

| Componente        | Responsabilidade                                      |
| ----------------- | ----------------------------------------------------- |
| `Button`          | Ações em cinco variações, dois tamanhos e modo link  |
| `Card`            | Superfície de conteúdo com cabeçalho e rodapé opcionais |
| `Badge`           | Rótulos curtos de categoria ou estado                 |
| `StatusIndicator` | Estado acompanhado de texto                           |
| `FormField`       | Campo com rótulo, dica e mensagem de erro             |
| `SectionHeader`   | Cabeçalho de seção com sobrancelha e ações            |
| `Alert`           | Mensagens informativas, de sucesso, atenção e erro    |
| `Avatar`          | Iniciais ou imagem, em três tamanhos                  |
| `EmptyState`      | Estado vazio com ação sugerida                        |
| `NavMenu`         | Navegação responsiva com menu suspenso no celular     |

Diretrizes aplicadas: mobile first (a partir de 320px), áreas de toque de 44px, contraste WCAG AA, foco visível, cantos arredondados, sombras discretas e ausência de animações e gradientes decorativos. O amarelo é usado apenas como acento, nunca como cor de texto sobre fundo branco.

A página `/design-system` reúne paleta, tipografia, botões, cards, badges, formulários, alertas, avatares e estados vazios para consulta durante o desenvolvimento.

## Organização do código

```text
src/
  app/           componente raiz da aplicação
  assets/        imagens e ícones
  components/    componentes reutilizáveis
    common/      componentes genéricos do design system
    navigation/  navegação e menus
  data/          dados fictícios
  features/      funcionalidades simuladas
  institutional/ áreas do site institucional público
  layout/        layouts de página (cabeçalho, conteúdo, rodapé)
  navigation/    configuração de navegação
  pages/         páginas por rota
  portal/        áreas do portal demonstrativo
  routes/        definição das rotas
  services/      camada de acesso a dados (simulados hoje, API no futuro)
  styles/        tokens e estilos globais
  types/         tipos TypeScript
  utils/         funções utilitárias
```

Convenções do projeto: páginas não carregam dados próprios — consomem `data/` por meio de `services/`; tipos compartilhados ficam em `types/`; estilos usam exclusivamente os tokens do design system.

## Deploy

O build gera arquivos estáticos em `dist/`, compatíveis com Vercel, Netlify, Cloudflare Pages ou qualquer hospedagem que sirva SPAs. O `vercel.json` inclui a regra de rewrite necessária para as rotas do React Router.

## Licença

Consulte o arquivo `LICENSE`.
