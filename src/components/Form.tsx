import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div className="search row">
        <div className="col s12 m8 offset-s2">
          <form>
            <h2>Find News by Category</h2>

            <div className="input-field col s12 m8">
              <select>
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
