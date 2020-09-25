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
              created: {this.props.data.created ? tsToString(this.props.data.created) : null}
            </div>
          </div>
          <div className="right-column-box">
            <div className="right-column-box-content">
              completed: {this.props.data.completed ? tsToString(this.props.data.completed) : null}
            </div>
          </div>
        </div>)
    );
  }
}

const tsToString = function (ts) {
  const date = new Date(ts);
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  return [date.getFullYear(),
  (mm > 9 ? '' : '0') + mm,
  (dd > 9 ? '' : '0') + dd
  ].join('-');
};

export default RightColumn;
