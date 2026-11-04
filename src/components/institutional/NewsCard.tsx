import Badge from '../common/Badge'
import Card from '../common/Card'
import type { NewsPost } from '../../types/news'
import { formatDate } from '../../utils/formatDate'
import './NewsCard.css'

interface NewsCardProps {
  post: NewsPost
}

function NewsCard({ post }: NewsCardProps) {
  return (
    <Card
      className="news-card"
      title={post.title}
      actions={<Badge tone="primary">{post.category}</Badge>}
      footer={
        <time className="news-card__date" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
      }
    >
      <p className="news-card__summary">{post.summary}</p>
    </Card>
  )
}

export default NewsCard
