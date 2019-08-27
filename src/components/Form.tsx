import React, { Component, ChangeEvent } from 'react'

interface IProps {
  getNews: (category?: string) => Promise<void>
}

export default class Form extends Component<IProps> {
  state = {
    category: 'general',
  }

  handleCategory = (category: ChangeEvent<HTMLSelectElement>) => {
    this.setState(
      {
        category: category.target.value,
      },
      () => {
        this.props.getNews(this.state.category)
      },
    )
  }

  render() {
    return (
      <div className="search row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Find News by Category</h2>

            <div className="input-field col s12 offset-m2 m8">
              <select onChange={this.handleCategory}>
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
