import React, { Component } from 'react';
import "./index.scss";
class Logo extends Component {
    state = {
        data : {
            url :'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png',
            hasLink: false,
            logoLink: '',
            order: '1' 
        }
    }
    onUrlChange(val){
        this.setState(prevState => ({
            data: {...prevState.data,  url:val}
        }))
        setTimeout(() => {
            this.props.onLogoChange(this.state.data);
        }, 0);
    }
    onOrderChange(val){
        console.log(val)
        if(val){
            this.setState(prevState => ({
                data: {...prevState.data,  order:val}
            }))
            setTimeout(() => {
                this.props.onLogoChange(this.state.data);
            }, 0);
        }
    }
    logoLink(val){
        this.setState(prevState => ({
            data: {...prevState.data,  logoLink:val}
        }))
         setTimeout(() => {
            this.props.onLogoChange(this.state.data);
        }, 0);
    }
    hasLink(val){
        console.log(val)
        this.setState(prevState => ({
            data: {...prevState.data,  hasLink:val}
        }))
         setTimeout(() => {
            this.props.onLogoChange(this.state.data);
        }, 0);
    }
    componentDidMount(){
        this.props.onLogoChange(this.state.data);
    }
    render() {
        return (
            <div className="editor-widget">
                <h3 className="editor-header">Logo  <label>Order: <input type="text" defaultValue="1" onChange={(e)=>this.onOrderChange(e.target.value)}/></label></h3> 
                <div>
                    <label>
                        Url
                <input defaultValue="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" onChange={(e)=>this.onUrlChange(e.target.value)}/>
                    </label>
                <p> Is Clickable?   </p>
                    <label>
                        Yes
                        <input type="radio" value={true} checked={this.state.data.hasLink} name="haslink" onChange={(e)=>this.hasLink(true)}/>
                    </label>
                    <label>
                        No
                        <input type="radio" value={false} checked={!this.state.data.hasLink } name="haslink" onChange={(e)=>this.hasLink(false)}/>
                    </label>
                    {this.state.data.hasLink ?
                    <label>
                        Logo redirect link
                        <input type="text" defaultValue="/" onChange={(e)=>this.logoLink(e.target.value)}/>
                    </label>
                :null}

                    
                </div>
            </div>
        )
    }
}

export default Logo;
