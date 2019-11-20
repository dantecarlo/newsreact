import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import NewsList from './components/NewsList'
import Form from './components/Form'

export default class App extends Component {
  state = {
    newsList: [],
  }

  componentDidMount() {
    this.getNews()
  }

  getNews = async (category = 'general') => {
    const apiKey = process.env.REACT_APP_WEATHER_API
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    const res = await fetch(url)
    const news = await res.json()

    this.setState({ newsList: news.articles })
  }

  render() {
    return (
      <Fragment>
        <Header title="React new API"></Header>

        <div className="container white news-container">
          <Form getNews={this.getNews}></Form>
          <NewsList newsList={this.state.newsList}></NewsList>
        </div>
      </Fragment>
    )
  }
}
