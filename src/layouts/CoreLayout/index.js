import { injectReducer } from 'store/reducers'
import store from 'store/createStore'
import CoreLayout from './CoreLayoutContainer'
import configReducer from './modules/config'

injectReducer(store, { key: 'config', reducer: configReducer })

export default CoreLayout
