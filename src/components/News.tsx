import React from 'react'

interface IProps {
  news: INews
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
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={urlToImage} alt={title} />
        </div>

        <div className="card-content">
          <h3>{title}</h3>
          <p>{description} </p>
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
