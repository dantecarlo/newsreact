import React from 'react'
import News from './News'

interface Props {
  newsList: NewsI[]
}

interface NewsI {
  author: string
  content: string
  description: string
  publishedAt: string
  source: Source
  title: string
  url: string
  urlToImage: string
}

interface Source {
  id: string
  name: string
}

const NewsList = ({ newsList }: Props) => (
  <div className="row">
    {newsList.map(news => (
      <News key={news.url} news={news}></News>
    ))}
  </div>
)

export default NewsList
