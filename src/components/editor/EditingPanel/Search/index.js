import React, { Component } from 'react';
import "./index.scss";
class Search extends Component {
    state = {
        data : {
            placeholder: 'Search',
            order: '3' 
        }
    }
    onPlaceholderChange(val){
        this.setState(prevState => ({
            data: {...prevState.data,  placeholder:val}
        }))
        setTimeout(() => {
            this.props.onSearchChange(this.state.data);
        }, 0);
    }
    onOrderChange(val){
        if(val){
            this.setState(prevState => ({
                data: {...prevState.data,  order:val}
            }))
            setTimeout(() => {
                this.props.onSearchChange(this.state.data);
            }, 0);
        }
    }
    componentDidMount(){
        this.props.onSearchChange(this.state.data);
    }
    render() {
        return (
            <div className="editor-widget">
                <h3 className="editor-header">Search  <label>Order: <input type="text" defaultValue="3" onChange={(e)=>this.onOrderChange(e.target.value)}/></label></h3> 
                <div>
                    <label>
                    Placeholder Text
                        <input defaultValue="search" onChange={(e)=>this.onPlaceholderChange(e.target.value)}/>
                    </label>
                

                    
                </div>
            </div>
        )
    }
}

export default Search;
