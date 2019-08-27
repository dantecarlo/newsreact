import React, { Component } from 'react'

export default class App extends Component {
  state = {
    news: [],
  }

  componentDidMount() {
    this.getNews()
  }

  getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e11830532bb1419cbc1de4f55d294626`
    const res = await fetch(url)
    const news = await res.json()

    this.setState({ news: news.articles })
  }

  render() {
    return (
      <div>
        <h1>API news React</h1>
      </div>
    )
  }
}
