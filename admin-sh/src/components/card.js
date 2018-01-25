import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import ManagePanel from './managePanel';

const Card = (props)=> { 
  console.log(props,'pop')
    return (
      <div>
        <div className="col-lg-3 col-sm-6">
          <div className="">
            <div className="content">
            <NavLink activeClassName='active' to={'/maneganime'}>
              <img src={props.anime.img} alt="Avatar" style={{"width":"100%"}} />
               <div className="card_text">
               <h4><b> {props.anime.name}</b></h4> 
              <p>{props.anime.episodesNum}</p> 
              </div>
            </NavLink>              
            </div>
          </div>
          <Route render= {()=><p>Not Found</p>}/>

          {/* <Route path={props.url+'/maneganime'} component={ManagePanel} /> */}
        </div>
        </div>
    );
  }

export default Card;