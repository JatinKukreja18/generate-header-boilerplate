import React, { Component } from 'react';
import "./index.scss";
class Logo extends Component {
    render() {
        if(this.props.hasLink){
            return (
                <a><img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" alt="logo"/></a>
            );
        }
        else{
            return (
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" alt="logo"/>
            );
        }      
    }
}

export default Logo;
