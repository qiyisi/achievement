import React from 'react';
import './Content.css';
import LeftColumn from './LeftColumn'
import CenterColumn from './CenterColumn'
import RightColumn from './RightColumn'

function Content() {
  return (
    <div className="content">
      <LeftColumn />
      <CenterColumn />
      <RightColumn />
      {/* <div style={{ width: 400, backgroundColor: "red", flex: "0 0 auto" }}>1</div>
      <div style={{ width: 400, backgroundColor: "blue", flex: "1 1 100px" }}>2</div>
      <div style={{ width: 400, backgroundColor: "yellow", flex: "0 0 auto" }}>3</div> */}
    </div>
  );
}

export default Content;
