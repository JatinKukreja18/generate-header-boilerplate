import React, { Component } from 'react';
import "./index.scss";
class List extends Component {
    state = {
        widgetOpen : false,
        data:{
            items: [ {text: "menu", link: "/menu"}],
            order: "2"
        }
    }
    toggleOptions(){
        this.setState({widgetOpen : !this.state.widgetOpen})
    }
    itemUpdate(e,val,index){
        const items = this.state.data.items;
        if(val === 1) items[index].text = e.target.value 
        else items[index].link = e.target.value 
        this.setState({
            data:{
                items : items
            }
        });
        setTimeout(() => {
            this.props.onListChange(this.state.data);
        }, 0);
    }
    addItem(){
        this.setState(prevState => ({
            data: { 
                items:[...prevState.data.items, {text: "menu", link: "/menu"}],
                order: this.state.data.order
            }
        }))
        console.log(this.state.data)
        setTimeout(() => {
            this.props.onListChange(this.state.data);
        }, 0);
    }
    onOrderChange(val){
        if(val){
            this.setState(prevState => ({
                data: {...prevState.data,  order:val}
            }))
            setTimeout(() => {
                this.props.onListChange(this.state.data);
            }, 0);
        }
    }
    componentDidMount(){
        this.props.onListChange(this.state.data);
    }
    render() {
        return (
                <div className="editor-widget">
                    <h3 className="editor-header">List <label>Order: <input type="text" defaultValue="2" onChange={(e)=>this.onOrderChange(e.target.value)}/></label></h3>
                    <ul >
                        {
                            this.state.data.items.map((item, i) => 
                            <li key={i} > 
                            <label>Text 
                            <input type="text" defaultValue={item.text} onChange={(e) => this.itemUpdate(e,1,i)}/>
                            </label>
                            <label>Link 
                            <input type="text" defaultValue={item.link} onChange={(e)=>this.itemUpdate(e,2,i)} />
                            </label>
                            </li>)
                        }
                        <button className="blue-button" style={{marginTop:"20px"}} onClick={()=> this.addItem()}>Add Item</button>
                    </ul>
                </div>
        );
    }
}

export default List;
