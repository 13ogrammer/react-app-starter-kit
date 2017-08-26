import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'

export const history = createHistory()

const initialState = {}
const middleware = [routerMiddleware(history)]

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store
