import React from 'react';
import Header from './Header';
// import Content from './Content';
import ContentContainer from '../containers/ContentContainer'

function Container() {
  return (
    <div className="container">
      <Header />
      <ContentContainer />
    </div>
  );
}

export default Container;
