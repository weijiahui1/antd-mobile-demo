import React, { Component } from 'react';
import {Link } from 'react-router';
import 'antd-mobile/dist/antd-mobile.css';

export default class Index extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stages list</h1>
        <ul>
          <li><Link to="/s1">ListView + Carousel</Link></li>
          <li><Link to="/s2">Tabs</Link></li>
        </ul>
      </div>
    );
  }
}
