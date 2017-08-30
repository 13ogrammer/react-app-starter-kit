import { injectReducer } from 'store/reducers'
import store from 'store/createStore'
import App from './AppContainer'
import appReducer from './modules/app'

injectReducer(store, { key: 'app', reducer: appReducer })

export default App
