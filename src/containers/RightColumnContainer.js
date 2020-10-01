import { connect } from 'react-redux'
import RightColumn from '../components/RightColumn'
import { deleteDoc } from '../database/firebase'
import { deleteAchievement } from '../actions'

const mapStateToProps = state => ({
  focusedAchievement: state.focusedAchievement
})

const mapDispatchToProps = dispatch => ({
  deleteAchievement: id => {
    if (window.confirm('delete?')) {
      deleteDoc('achievements', id).then(() => dispatch(deleteAchievement(id)))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightColumn)