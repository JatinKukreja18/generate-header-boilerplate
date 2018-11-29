import React, { Component } from 'react';
import "./index.scss";

class ConfigForm extends Component {
  state = {
    config: {
      namespace: 'default',
      htmlFile: 'index',
      cssFile: 'index'
    },
    formActive: true

  }
  save(e,form){
    e.preventDefault()
    this.setState({
      config : {
        namespace: form[0].value ? form[0].value : 'default',
        htmlFile: form[1].value ? form[1].value : 'index',
        cssFile: form[2].value ? form[2].value : 'index',
      },
      formActive: false

    })
  }
  editFrom(){
    this.setState({
      formActive: true
    })
  }
  componentDidUpdate(){
    console.log(this.state.config)
  }
  render() {
    return (
        <div>
              <h4 className="title">Basic Configuration</h4>
          <form ref="configForm" className={`config-form ${this.state.formActive? "":"hidden"}`}>  
              <label className="form-item">
                Namespace
                <input type="text" placeholder="Namespace" name="namespace" />
              </label>
              <label className="form-item">
                HTML file name
                <input type="text" placeholder="default : index.html" />
              </label>
              <label className="form-item">
                CSS file name
                <input type="text" placeholder="default : index.css"/>
              </label>
              <button className="blue-button" onClick={(e) => this.save(e, this.refs.configForm)}>Save</button>
          </form>

          <div className={`saved-form ${!this.state.formActive? "":"hidden"}`}>
              <label className="form-item">
                Namespace: {this.state.config.namespace}
              </label>
              <label className="form-item">
                HTML file name: {this.state.config.htmlFile}
              </label>
              <label className="form-item">
                CSS file name: {this.state.config.cssFile}
              </label>
              <button className="blue-button" onClick={()=> this.editFrom()}>Edit</button>
          </div>
        </div>
    );
  }
}

export default ConfigForm;
