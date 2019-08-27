import React from 'react'

interface IProps {
  news: INews
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

const News = ({ news }: IProps) => {
  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
  } = news

  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {image}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            See Full Story
          </a>
        </div>
      </div>
    </div>
  )
}

export default News
