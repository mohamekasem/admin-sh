import React, { Component } from 'react';


const InfoPanel = (props)=> {
  return (
    <div className="row">
    <div className="panel">              
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 manage_box">
        <div className="">
        <p>Number Of Whatches</p>
        </div>
        <h3>255 K</h3>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 manage_box">
        <div className="">
        <p>Number Of Episodes</p>
        </div>
        <h3>25 ep</h3>

        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 manage_box">
        <div className="">
        <p>i will see for what is this T_T</p>
        </div>
        <h3>how is know</h3>

        </div>
      </div>
    </div>
  );
}

export default InfoPanel;