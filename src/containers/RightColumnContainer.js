import { connect } from 'react-redux'
import RightColumn from '../components/RightColumn'

const mapStateToProps = state => ({
  focusedAchievement: state.focusedAchievement
})

export default connect(
  mapStateToProps
)(RightColumn)