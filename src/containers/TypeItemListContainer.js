import { connect } from 'react-redux'
import TypeItemList from '../components/TypeItemList'
import { setFocusTypeItem } from '../actions'

const mapStateToProps = state => ({
  typeItems: state.typeItems,
  focusType: state.focusType
})

const mapDispatchToProps = dispatch => ({
  setFocusTypeItem: id => dispatch(setFocusTypeItem(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeItemList)