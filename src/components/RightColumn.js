import React from 'react';

class RightColumn extends React.Component {
  render() {
    return (
      (this.props.show &&
        <div className="right-column" >
          <div className="right-column-box">
            <div className="right-column-box-content">
              {this.props.data.content}
            </div>
          </div>
          <div className="right-column-box">
            <div className="right-column-box-content">
              created: {this.props.data.created}
            </div>
          </div>
          <div className="right-column-box">
            <div className="right-column-box-content">
              completed: {this.props.data.completed}
            </div>
          </div>
        </div>)
    );
  }
}

export default RightColumn;
