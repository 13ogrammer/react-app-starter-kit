import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'

export class CoreLayout extends Component {
  render() {
    return (
      <div>
        <h2>
          <Link to="/app">
            {this.props.config.appName}
          </Link>
        </h2>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

export default CoreLayout
