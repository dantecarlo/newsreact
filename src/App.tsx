import React, { Component, Fragment } from 'react'
import Header from './components/Header'

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
      <Fragment>
        <Header title="React new API"></Header>
      </Fragment>
    )
  }
}
