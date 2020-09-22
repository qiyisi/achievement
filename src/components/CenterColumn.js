import React from 'react';

class CenterColumn extends React.Component {

  render() {
    return (
      <div className="center-column" onClick={() => this.props.onCenterColumnClick()}>

      </div>
    );
  }
}

export default CenterColumn;
