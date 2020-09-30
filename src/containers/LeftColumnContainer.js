import { connect } from 'react-redux'
import LeftColumn from '../components/LeftColumn'
import { setFocusedType, addType } from '../actions'
import { addDoc } from '../database/firebase'

const mapStateToProps = state => ({
  types: state.types,
  focusedType: state.focusedType
})

const mapDispatchToProps = dispatch => ({
  setFocusedType: focusedType => dispatch(setFocusedType(focusedType)),
  addType: name => {
    addDoc('types', { name }).then(result => {
      dispatch(addType({ name, id: result }))
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftColumn)