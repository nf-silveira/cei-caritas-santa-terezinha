import { newsData } from '../data/news'
import type { NewsPost } from '../types/news'

export function getNews(): NewsPost[] {
  return [...newsData].sort((a, b) => b.date.localeCompare(a.date))
}

export function getLatestNews(limit: number): NewsPost[] {
  return getNews().slice(0, limit)
}
