import { connect } from 'react-redux'
import CenterColumn from '../components/CenterColumn'
import { setFocusedAchievement, addAchievement, toggleAchievement } from '../actions'
import { addDoc, updateDoc } from '../database/firebase'

const mapStateToProps = state => ({
  achievements: state.achievements,
  focusedAchievement: state.focusedAchievement,
  focusedType: state.focusedType
})

const mapDispatchToProps = dispatch => ({
  setFocusedAchievement: focusedAchievement => dispatch(setFocusedAchievement(focusedAchievement)),
  addAchievement: achievement => {
    addDoc('achievements', achievement).then((result) => {
      dispatch(addAchievement({ ...achievement, id: result }))
    })
  },
  toggleAchievement: (id, completed) => {
    dispatch(toggleAchievement(id, completed))
    updateDoc('achievements', id, { completed })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterColumn)