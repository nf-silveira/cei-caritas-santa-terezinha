import Alert from '../components/common/Alert'
import PageHeader from '../components/common/PageHeader'
import NewsCard from '../components/institutional/NewsCard'
import { getNews } from '../services/newsService'
import '../styles/site-pages.css'

function NewsPage() {
  const news = getNews()

  return (
    <div className="site-page">
      <PageHeader
        eyebrow="Comunicação"
        title="Notícias e comunicados"
        description="Avisos, projetos e novidades da rotina escolar, organizados por data de publicação."
      />

      <Alert variant="info" title="Conteúdo demonstrativo">
        As notícias desta página são fictícias e foram escritas apenas para ilustrar a área de comunicação.
      </Alert>

      <section className="site-section" aria-label="Lista de notícias">
        <div className="site-grid site-grid--three">
          {news.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default NewsPage
