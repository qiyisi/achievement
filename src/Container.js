import React from 'react';
import './Container.css';
import Header from './Header';
import Content from './Content';

function Container() {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default Container;
