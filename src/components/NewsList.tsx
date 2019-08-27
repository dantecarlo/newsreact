import React from 'react'
import News from './News'

interface IProps {
  newsList: object[]
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

type INewsKeys = keyof INews

const NewsList = ({ newsList }: IProps) => (
  <div className="row">
    {newsList.map((news: any) => (
      <News key={news.url} news={news}></News>
    ))}
  </div>
)

export default NewsList
