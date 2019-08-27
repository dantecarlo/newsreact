import React from 'react'
import News from './News'

interface IProps {
  newsList: INews[]
}

interface INews {
  author: string
  content: string
  description: string
  publishedAt: string
  source: ISource
  title: string
  url: string
  urlToImage: string
}

interface ISource {
  id: string
  name: string
}

const NewsList = ({ newsList }: IProps) => (
  <div className="row">
    {newsList.map(news => (
      <News key={news.url} news={news}></News>
    ))}
  </div>
)

export default NewsList
