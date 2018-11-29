import React, { Component } from 'react';
import "./index.scss";
import List from "./List";
import Logo from "./Logo";

class Editor extends Component {
    state = {
        widgetOpen : false,
        addList : false,
        list:[]
    }
    toggleOptions(){
        this.setState({widgetOpen : !this.state.widgetOpen})
    }
    addItem(value){
        if(value === 3)  this.setState({addList : true});
        if(value === 2)  this.setState({addLogo : true});
        this.toggleOptions();
    }
    onListChange(val) {
        console.log(val)
        this.setState({list : val})
        console.log(this.state.list)

    }
  render() {
    return (
        <main className="editor-panel">
          <h2>Generate Header HTML</h2>
        <header id="my-header">
            <ul>
                {
                    this.state.list ? this.state.list.map((item, i) => 
                    <li key={i} > <a href={item.link}>{item.text} </a> 
                    </li>): null
                }
            </ul>
                    
        </header>
        <div className={`widget-options ${this.state.widgetOpen ? "open" : ""}`}>
            <a  className="fab-button" onClick={()=>this.toggleOptions()}>
                <span>{this.state.widgetOpen? '-': '+'}</span>
            </a>
            <ul>
                <li>
                     Text
                </li>
                <li onClick={()=> this.addItem(2)}>
                     Logo
                </li>
                <li onClick={()=> this.addItem(3)}>
                     List
                </li>
                <li>
                    Button
                </li>
                
            </ul>
        </div>

        {this.state.addList ? <List onListChange={(val)=>this.onListChange(val)}/> : null}
        {this.state.addLogo ? <Logo/> : null}
        {/* {this.state.addList ? <Button/> : null} */}
        {/* {this.state.addList ? <Dropdown/> : null} */}

        </main>
    );
  }
}

export default Editor;
