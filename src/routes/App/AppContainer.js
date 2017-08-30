import { connect } from 'react-redux'
import App from './components/App'
import { getPage } from './modules/app'

const mapDispatchToProps = {
  getPage
}

const mapStateToProps = state => {
  return {
    app: state.app
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
