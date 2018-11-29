import React, { Component } from 'react';
import "./index.scss";
class List extends Component {
    state = {
        widgetOpen : false,
        items: [ {text: "menu", link: "/menu"}]
    }
    toggleOptions(){
        this.setState({widgetOpen : !this.state.widgetOpen})
    }
    itemUpdate(e,val,index){
        const items = this.state.items;
        if(val === 1) items[index].text = e.target.value 
        else items[index].link = e.target.value 
        this.setState({
            items
        });
        this.props.onListChange(this.state.items);
    }
    addItem(){
        this.setState(prevState => ({
            items: [...prevState.items, {text: "menu", link: "/menu"}]
        }))
        this.props.onListChange(this.state.items);
    }
    componentDidMount(){
        this.props.onListChange(this.state.items);
    }
    render() {
        return (
                <div className="editor-list">
                    <h3>List</h3>
                    <ul >
                        {
                            this.state.items.map((item, i) => 
                            <li key={i} > 
                            <label>Text 
                            <input type="text" defaultValue={item.text} onChange={(e) => this.itemUpdate(e,1,i)}/>
                            </label>
                            <label>Link 
                            <input type="text" defaultValue={item.link} onChange={(e)=>this.itemUpdate(e,2,i)} />
                            </label>
                            </li>)
                        }
                        <button className="blue-button" onClick={()=> this.addItem()}>Add Item</button>
                    </ul>
                </div>
        );
    }
}

export default List;
