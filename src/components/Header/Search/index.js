import React, { Component } from 'react';
import "./index.scss";
class Search extends Component {
    render() {
        const data = this.props.data;
        console.log(data)
        return (
            <input style={{order:data.order}} className="search" placeholder={data.placeholder} alt="logo"/>
        );
          
    }
}

export default Search;
