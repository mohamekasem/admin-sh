import React , {Component} from 'react';
import Card from './card';
export default class Panel extends Component {

  render() {
    console.log(this.props.match)
    let urlPath = this.props.match.url;
    let Cards = [{
      name: 'shadow',
      img: '/assets/img/side.jpg',
      _id: 1,
      episodesNum: 1
    }]
    return (
      <div className="container-fluid">      
      <div className="row">
      <div className="panel">
      {Cards.map((anime)=> {
              return (
        <Card anime= {anime} key={anime._id} url={`${urlPath}`}/>

      )}
      )}
      </div>
      </div>
      </div> 
    );
  }
}