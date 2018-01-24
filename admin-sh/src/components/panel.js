import React , {Component} from 'react';
import Card from './card';
export default class Panel extends Component {

  render() {
    return (
      <div className="container-fluid">      
      <div className="row">
      <div className="panel">
        <Card />
        <Card />
        <Card />
      </div>
      </div>
      </div> 
    );
  }
}