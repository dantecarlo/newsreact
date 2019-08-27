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
  source: object
  title: string
  url: string
  urlToImage: string
}

const NewsList = ({ newsList }: IProps) => (
  <div className="row">
    {newsList.map(news => (
      <News key={news.url} news={news}></News>
    ))}
  </div>
)

export default NewsList
