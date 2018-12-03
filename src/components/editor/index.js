import React, { Component } from 'react';
import "./index.scss";
import Header from "../Header";
import EditingPanel from "./EditingPanel";
class Editor extends Component {
    
    state = {
        data:{},
        htmlText:'',
        cssText:'#my-header,#my-header a.logo img{height:50px}#my-header{display:flex;background:#fff;width:100%;box-shadow:1px 1px 10px 0 #ccc}#my-header img.logo{height:50px;padding:0 10px}#my-header a.logo{display:block;padding:0 10px}#my-header input.search{order:3;align-self:center;box-sizing:border-box;margin:0;padding:5px 10px;font-size:14px;color:#505050;outline:0;border:1px solid #aaa;transition:.3s}#my-header ul{padding:0;margin:0;display:flex;list-style-type:none;align-items:center}#my-header ul li{height:100%}#my-header ul li a{padding:5px 10px;height:100%;box-sizing:border-box;display:flex;color:#000;align-items:center;text-decoration:none}#my-header .hidden{display:none!important}#my-header ul li a:hover{background:#f3f4f5}',
        openExport: false
    }
    configUpdate(val){
        console.log(val)
        this.setState(prevState => ({
            data: {...prevState.data, data: val}
        }))
    }
    generate(){
        console.log(this);
        console.log(document.querySelector("#my-header").outerHTML);
        const html = (document.querySelector("#my-header").outerHTML);
        this.setState({
            htmlText : html,
            openExport: true
        })
        console.log(document.styleSheets[6])
    }
    closeExport(){
        this.setState({
            openExport: false
        })
    }
  render() {
    return (
        <main className="editor-panel">
        <h2 className="editor-title">Generate Header HTML <a className="export-html" onClick={() => this.generate()}><span>Export</span></a></h2>
        <Header totalConfig={this.state.data}/>
        <EditingPanel configUpdate={(e) => this.configUpdate(e)}/>
        
            <div className={`export-section ${this.state.openExport? "open" : "close"}`}>
                <a className="close-icon" onClick={()=> this.closeExport()}>Close</a>
                
                <div>
                    <h3>HTML</h3>
                    <textarea value={this.state.htmlText}>
                    </textarea>
                </div>
                <div>
                    <h3>CSS</h3>
                    <textarea value={this.state.cssText}>
                         
                    </textarea>
                </div>
                
            </div>
        </main>
        
    );
  }
}

export default Editor;
