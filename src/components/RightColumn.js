import React from 'react';
import TypeItemSelect from './TypeItemSelect'

class RightColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNameInput: false,
      inputValue: null
    }
    this.input = React.createRef()
  }

  onShowInput = (event) => {
    this.setState({ showNameInput: true, inputValue: event.target.textContent }, () => this.input.current.focus())
  }

  onEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      const content = event.target.value.trim()
      this.changeAchievementContent(content)
    }
  }

  onInputBlur = (event) => {
    const content = event.target.value.trim()
    this.changeAchievementContent(content)
  }

  changeAchievementContent = (content) => {
    this.props.updateAchievement(this.props.focusedAchievement.id, { content })
    this.props.updateFocusedAchievement({ content })
    this.setState({ showNameInput: false })
  }

  render() {
    return this.props.focusedAchievement &&
      <div className="right-column" >
        <div className="right-column-box right-column-box-content">
          {!this.state.showNameInput && <div onClick={this.onShowInput}>{this.props.focusedAchievement.content}</div>}
          {this.state.showNameInput && <input className="right-column-box-input" ref={this.input} value={this.state.inputValue}
            onChange={(event) => { this.setState({ inputValue: event.target.value }) }}
            onKeyPress={this.onEnterKeyPress}
            onBlur={this.onInputBlur} />}
        </div>
        <TypeItemSelect types={this.props.types} focusedAchievement={this.props.focusedAchievement} updateAchievement={this.props.updateAchievement} />
        <div className="right-column-box right-column-box-content">
          created: {this.props.focusedAchievement.created ? tsToString(this.props.focusedAchievement.created) : null}
        </div>
        {this.props.focusedAchievement.completed &&
          <div className="right-column-box right-column-box-content">
            completed: {this.props.focusedAchievement.completed ? tsToString(this.props.focusedAchievement.completed) : null}
          </div>}
        <div className="right-column-box right-column-box-content right-column-box-delete" onClick={() => this.props.deleteAchievement(this.props.focusedAchievement.id)}>
          delete
      </div>
      </div>
  }
};


const tsToString = function (ts) {
  const date = new Date(ts);
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();

  return [date.getFullYear(),
  (mm > 9 ? '' : '0') + mm,
  (dd > 9 ? '' : '0') + dd,
  ].join('-') + ' ' +
    (h > 9 ? '' : '0') + h +
    ':' +
    (m > 9 ? '' : '0') + m;
};

export default RightColumn;
