import React, { Component } from 'react';
import "./index.scss";
import List from "./List";
import Logo from "./Logo";
import Search from "./Search";
class EditingPanel extends Component {
    state = {
        widgetOpen : false,
        addList : false,
        data : {},
        list:[],
        logo:''
    }
    toggleOptions(){
        this.setState({widgetOpen : !this.state.widgetOpen})
    }
    addItem(value){
        if(value === 1)  this.setState({addList : true});
        if(value === 0)  this.setState({addLogo : true});
        if(value === 2)  this.setState({addSearch : true});
        this.toggleOptions();
    }
    
    onListChange(val) {
        this.setState(prevState => ({
            data: {...prevState.data, list: val}
        }))
        setTimeout(() => {
            this.props.configUpdate(this.state.data)        
        }, 0);
    }
    onLogoChange(val) {
        console.log(val);
        this.setState(prevState => ({
            data: {...prevState.data, logo: val}
        }))
        setTimeout(() => {
            this.props.configUpdate(this.state.data)        
        }, 0);
    }
    onSearchChange(val) {
        console.log(val);
        this.setState(prevState => ({
            data: {...prevState.data, search: val}
        }))
        setTimeout(() => {
            this.props.configUpdate(this.state.data)        
        }, 0);
    }
    render() {
        return (
                <div>
                    <div className={`widget-options ${this.state.widgetOpen ? "open" : ""}`}>
                        <a  className={`fab-button ${this.state.widgetOpen? "open" : "close"}`} onClick={()=>this.toggleOptions()}>
                            <span></span>
                            <span></span>
                        </a>
                        <ul>
                            <li onClick={()=> this.addItem(0)}>
                                Logo
                            </li>
                            <li onClick={()=> this.addItem(1)}>
                                List
                            </li>
                            <li onClick={()=> this.addItem(2)}>
                                Search
                            </li>
                            
                        </ul>
                    </div>
                    <div className="widget-container">
                        {this.state.addLogo ? <Logo onLogoChange={(val)=>this.onLogoChange(val)}/> : null}
                        {this.state.addList ? <List onListChange={(val)=>this.onListChange(val)}/> : null}
                        {this.state.addSearch ? <Search onSearchChange={(val)=>this.onSearchChange(val)}/> : null}
                    </div>
                </div>
        );
    }
}

export default EditingPanel;
