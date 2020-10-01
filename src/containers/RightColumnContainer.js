import { connect } from 'react-redux'
import RightColumn from '../components/RightColumn'
import { deleteDoc, updateDoc } from '../database/firebase'
import { deleteAchievement, updateAchievement, updateFocusedAchievement, deleteFocusedAchievement } from '../actions'

const mapStateToProps = state => ({
  types: state.types,
  focusedAchievement: state.focusedAchievement
})

const mapDispatchToProps = dispatch => ({
  deleteAchievement: id => {
    if (window.confirm('delete?')) {
      deleteDoc('achievements', id).then(() => {
        dispatch(deleteAchievement(id))
        dispatch(deleteFocusedAchievement())
      })
    }
  },
  updateAchievement: (id, data) => {
    dispatch(updateAchievement(id, data))
    dispatch(updateFocusedAchievement(data))
    updateDoc('achievements', id, data)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightColumn)