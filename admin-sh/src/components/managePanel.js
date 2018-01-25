import React, { Component } from 'react';
import EditForm from './childForM-P/edite_form';
import InfoPanel from './childForM-P/info_panel';

class ManagePanel extends Component {
  render() {
    return (
    <div>
      <header>
        <h1>Manage Panel </h1>
        </header>
      <EditForm />
      <InfoPanel />
      </div>
    );
  }
}

export default ManagePanel;