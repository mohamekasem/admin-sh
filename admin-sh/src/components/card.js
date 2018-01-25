import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import ManagePanel from './managePanel';

const Card = (props)=> { 
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
        </div>
      </div>
    );
  }

export default Card;