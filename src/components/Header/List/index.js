import React, { Component } from 'react';
import "./index.scss";
class List extends Component {
    state = {
        widgetOpen : false
    }
    toggleOptions(){
        this.setState({widgetOpen : !this.state.widgetOpen})
    }
    render() {
        const {data} = this.props;
        console.log(data)
        return (
                <ul style={{order:data.order}}>
                    {data.items.map((item, i) => 
                    <li key={i} > <a href={item.link}>{item.text} </a> 
                    </li>)}
                </ul>
        );
    }
}

export default List;
