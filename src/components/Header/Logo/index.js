import React, { Component } from 'react';
import "./index.scss";
class Logo extends Component {
    render() {
        const data = this.props.data;
        console.log(this.props.data)
        if(data.hasLink){
            return (
                <a style={{order:data.order}} className="logo" href={data.logoLink}><img src={data.url} alt="logo"/></a>
            );
        }
        else{
            return (
                <img style={{order:data.order}} className="logo" src={data.url} alt="logo"/>
            );
        }      
    }
}

export default Logo;
