import React from 'react';

class AddAchievementItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.onEnterKeyPress = this.onEnterKeyPress.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange(event) {
    this.setState({ value: event.target.value });
  }
  onEnterKeyPress(event) {
    if (event.key === 'Enter') {
      if (this.state.value) {
        this.props.addAchievement(this.state.value)
        this.setState({ value: '' });
      }
    }
  }
  render() {
    return (
      <div className="add-achievement-item">
        <span><input className="add-achievement-item-input" placeholder="add" value={this.state.value} onChange={this.onInputChange} onKeyPress={this.onEnterKeyPress} /></span>
      </div>
    )
  }
}

export default AddAchievementItem;