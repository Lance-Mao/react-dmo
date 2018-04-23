import React, { Component } from 'react';
import Card from './Card'

class Card_index extends Component {
    render(){
        return (
            <div>
                <Card>
                    <h2>React.js 小书</h2>
                    <div>开源、免费、专业、简单</div>
                    订阅：<input />
                </Card>
            </div>
        );
    }
}

export default Card_index;