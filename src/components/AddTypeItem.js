import React from 'react';

class AddItem extends React.Component {
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
        this.props.addType(this.state.value)
        this.setState({ value: '' });
      }
    }
  }
  render() {
    return (
      <div className='type-item add-type-item'>
        <span><input className='add-type-item-input' placeholder='add' value={this.state.value} onChange={this.onInputChange} onKeyPress={this.onEnterKeyPress} /></span>
      </div >
    )
  }
}

export default AddItem;