import React from 'react';

class RightColumn extends React.Component {
  render() {
    return (
      (this.props.show &&
        <div className="right-column" >

        </div>)
    );
  }
}

export default RightColumn;
