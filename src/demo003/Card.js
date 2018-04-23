import React, { Component } from 'react';
import './demoCss.css'

class Card extends Component {
    render(){
        return(
            <div>
                {this.props.children.map((elem,i) => {
                    return <div className="border" key={i}>{elem}</div>
                })}
            </div>
        )
    }
}

export default Card;