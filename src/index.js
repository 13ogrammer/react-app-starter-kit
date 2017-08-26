import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from 'store/createStore'
import routes from 'routes'

const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {renderRoutes(routes)}
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
)
registerServiceWorker()
