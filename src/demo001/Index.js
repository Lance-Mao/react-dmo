import React, {Component} from 'react';
import Click from './Click';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            isShowClick : true
        }
    }

    handleShowOrHide(){
        this.setState({
            isShowClick : !this.state.isShowClick
        })
    }

    render() {
        return (
            <div>
                {this.state.isShowClick ? <Click/> : null}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或隐藏时钟
                </button>
            </div>
        )
    }
}

export default Index;