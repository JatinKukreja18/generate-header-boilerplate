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
        return (
                <ul>
                    <li> <a>Menu</a> </li>
                </ul>
        );
    }
}

export default List;
