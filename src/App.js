import React, { Component } from 'react'
import Header from './component/Header';
import List  from './component/List';
import Map from './component/Map';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header> </Header>
        <div className="container">
  <div className="row">
    <div className="col  col-lg-2">
     <List></List>
    </div>
    <div class="col  col-lg-6">
      <Map> </Map>
    </div>
  </div>
  </div>
      </div>
    )
  }
}