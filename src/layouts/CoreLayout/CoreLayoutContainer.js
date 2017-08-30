import { connect } from 'react-redux'
import CoreLayout from './components/CoreLayout'

const mapStateToProps = state => {
  return {
    config: state.config
  }
}

export default connect(mapStateToProps, null)(CoreLayout)
