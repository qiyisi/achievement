import { connect } from 'react-redux'
import CenterColumn from '../components/CenterColumn'
import { setFocusedAchievement } from '../actions'

const mapStateToProps = state => ({
  achievements: state.achievements,
  focusedAchievement: state.focusedAchievement,
  focusedType: state.focusedType
})

const mapDispatchToProps = dispatch => ({
  setFocusedAchievement: focusedAchievement => dispatch(setFocusedAchievement(focusedAchievement))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterColumn)