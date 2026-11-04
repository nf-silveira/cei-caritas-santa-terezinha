import { siteImages } from '../../data/siteImages'
import './NewsBanner.css'

/** Faixa editorial compartilhada pela home e pela página de notícias. */
function NewsBanner() {
  return (
    <div className="news-banner">
      <img
        src={siteImages.news.src}
        alt={siteImages.news.alt}
        width={2121}
        height={1414}
        loading="eager"
        fetchPriority="high"
      />
    </div>
  )
}

export default NewsBanner
