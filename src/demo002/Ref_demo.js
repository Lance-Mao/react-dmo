import React, { Component } from 'react';

class Ref_demo extends Component {
    render(){
        return (
            <div ref={(elem) => this.elem = elem}
                 onClick={() => this.setState({elem: this.elem}, () => console.log(this.elem))}>
                <h1>点击获取DOM节点</h1>
            </div>
        );
    }
}

export default Ref_demo;