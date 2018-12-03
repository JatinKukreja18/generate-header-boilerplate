import React, { Component } from 'react';
import "./index.scss";
import Logo from "./Logo";
import List from "./List";
import Search from "./Search";
class Header extends Component {
    state = {
        widgetOpen : false,
        addList : false,
        align: 'left'
    }
    toggleOptions(){
        this.setState({widgetOpen : !this.state.widgetOpen})
    }
    addItem(value){
        this.setState({addList : true});
        this.toggleOptions();
    }
    realign(val){
        console.log(val);
        this.setState({align:val})
    }
  render() {
      const {totalConfig} = this.props;
    return (
        <div>
            <header id="my-header" style={{justifyContent:this.state.align}}>
                {
                    totalConfig.data && totalConfig.data.logo ? 
                        <Logo data={totalConfig.data.logo}/> 
                
                    : null
                }
                {
                    totalConfig.data && totalConfig.data.list ? 
                            <List data={totalConfig.data.list}/>
                    : null
                }
                {
                    totalConfig.data && totalConfig.data.search ? 
                            <Search data={totalConfig.data.search}/>
                    : null
                }
            </header>
            
            {totalConfig.data?
            
            (
            <div>
            <h3>Alignment</h3>
            <div className="radio-group">
                <label>
                    Left
                    <input type="radio" name="alignment" defaultChecked value="flex-start" onChange={(e)=>this.realign(e.target.value)}/>
                </label>
                <label>
                    Center
                    <input type="radio" name="alignment" value="center" onChange={(e)=>this.realign(e.target.value)}/>
                </label>
                <label>
                    Space Between
                    <input type="radio" name="alignment" value="space-between"onChange={(e)=>this.realign(e.target.value)}/>
                </label>
                <label>
                    Space Around
                    <input type="radio" name="alignment" value="space-around" onChange={(e)=>this.realign(e.target.value)}/>
                </label>
                <label>
                    Right
                    <input type="radio" name="alignment" value="flex-end"onChange={(e)=>this.realign(e.target.value)}/>
                </label>
            </div></div>)
            :null}
        </div>
    );
  }
}

export default Header;
