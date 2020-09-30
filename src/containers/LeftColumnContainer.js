import { connect } from 'react-redux'
import LeftColumn from '../components/LeftColumn'
import { setFocusedType } from '../actions'

const mapStateToProps = state => ({
  types: state.types,
  focusedType: state.focusedType
})

const mapDispatchToProps = dispatch => ({
  setFocusedType: focusedType => dispatch(setFocusedType(focusedType))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftColumn)