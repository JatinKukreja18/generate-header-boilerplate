import React, { Component } from 'react';
import "./index.scss";
import ConfigForm from "./config-form";

class ControlPanel extends Component {
  render() {
    return (
        <section className="sidepanel">
          <ConfigForm/>
        </section>
    );
  }
}

export default ControlPanel;
