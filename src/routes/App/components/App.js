import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      let id = nextProps.match.params.id || 1
      this.props.getPage(id)
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id || 1
    this.props.getPage(id)
  }

  render() {
    const { page } = this.props.app
    let name = page ? page.name : '...'
    return (
      <div>
        <h3>
          <Link to={`/app/${parseInt(page.id, 10) + 1}`}>
            {name}
          </Link>
        </h3>
      </div>
    )
  }
}

export default App
