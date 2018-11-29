import React, { Component } from 'react';
import "./index.scss";
import List from "./List";

class Header extends Component {
    state = {
        widgetOpen : false,
        addList : false
    }
    toggleOptions(){
        this.setState({widgetOpen : !this.state.widgetOpen})
    }
    addItem(value){
        this.setState({addList : true});
        this.toggleOptions();
    }
  render() {
    return (
        <main className="editor-panel">
          <h2>Generate Header HTML</h2>
        <header id="my-header">
        </header>
        <div className={`widget-options ${this.state.widgetOpen ? "open" : ""}`}>
            <a className="fab-button" onClick={()=>this.toggleOptions()}>
                <span>{this.state.widgetOpen? '-': '+'}</span>
            </a>
            <ul>
                <li>
                     Text
                </li>
                <li>
                     Logo
                </li>
                <li onClick={()=> this.addItem(3)}>
                     List
                </li>
                <li>
                    Button
                </li>
                <li>
                    Dropdown
                </li>
                
            </ul>
        </div>

        {this.state.addList ? <List/> : null}

        {/* <div class="customise">
            <h3>Header Styling</h3>
            <div>
                <h3>Justify</h3>
                <label >
                    <input type="radio" name="Justify" id="" value="flex-start" checked onClick="styleHeader('justifyContent',value)"/>
                    left
                </label>
                <label >
                    <input type="radio" name="Justify" id="" value="flex-end" onClick="styleHeader('justifyContent',value)"/>
                    right
                </label>
                <label >
                    <input type="radio" name="Justify" id="" value="center" onClick="styleHeader('justifyContent',value)"/>
                    center
                </label>
                <label >
                    <input type="radio" name="Justify" id="" value="space-between" onClick="styleHeader('justifyContent',value)"/>
                    space between
                </label>
                <label >
                    <input type="radio" name="Justify" id="" value="space-around" onClick="styleHeader('justifyContent',value)"/>
                    space around
                </label>
            </div>
        </div> */}
        </main>
    );
  }
}

export default Header;
