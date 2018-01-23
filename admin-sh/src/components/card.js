import React, { Component } from 'react';


class Card extends Component {

  render() {
    return (
        <div className="col-lg-3 col-sm-6">
          <div className="">
            <div className="content">
              <img src="/assets/img/side.jpg" alt="Avatar" style={{"width":"100%"}} />
               <div className="">
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