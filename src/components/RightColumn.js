import React from 'react';

class RightColumn extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    console.log('RightColumn mount', this.props)
  }
  render() {
    return (
      (this.props.show &&
        <div className="right-column" >

        </div>)
    );
  }
}

export default RightColumn;
