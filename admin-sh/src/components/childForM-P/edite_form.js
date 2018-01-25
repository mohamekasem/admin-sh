import React, {Component} from 'react';

class EditeForm extends Component {

  render() {
    return (
      <div className="container">
        <div className="form-group row">
        <label className="col-2 col-form-label">anime name </label>
          <div className="col-sm-10 col-md-8">
            <input className="form-control" type="text" value={this.props.title}/>
          </div>
        </div>
        <div className="form-group row">
        <label className="col-2 col-form-label">Anime Aired </label>
          <div className="col-sm-10 col-md-8">
            <input className="form-control" type="text" value={this.props.aired}/>
          </div>
        </div>
        <div className="form-group row">
        <label className="col-2 col-form-label">Anime Type </label>
          <div className="col-sm-10 col-md-8">
            <input className="form-control" type="text" value={this.props.type}/>
          </div>
        </div>
        <div className="form-group row">
        <label className="col-2 col-form-label">Anime genres </label>
          <div className="col-sm-10 col-md-8">
            <input className="form-control" type="text" value={this.props.genres}/>
          </div>
        </div>
        <div className="form-group row">
        <label className="col-2 col-form-label">Anime Story </label>
          <div className="col-sm-10 col-md-8">
            <input className="form-control" type="text" value={this.props.story}/>
          </div>
        </div>
        <div className="form-group row">
        <label className="col-2 col-form-label">Anime Cap Img </label>
          <div className="col-sm-10 col-md-8">
            <input className="form-control" type="text" value={this.props.imgCap}/>
          </div>
        </div>
        <div className="form-group row">
        <label className="col-2 col-form-label">Anime Img </label>
          <div className="col-sm-10 col-md-8">
            <input className="form-control" type="text" value={this.props.img}/>
          </div>
        </div>
      </div>
    );
  }
}

export default EditeForm;