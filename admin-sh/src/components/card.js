import React, { Component } from 'react';


class Card extends Component {

  render() {
    return (
      <div>
      <div className="col-sm-12 col-md-4 col-lg-3">
      <div className="card">
        <img src="img_avatar2.png" alt="Avatar" style={{"width":"100%"}} />
        <div className="container">
          <h4><b>Jane Doe</b></h4> 
          <p>Interior Designer</p> 
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Card;