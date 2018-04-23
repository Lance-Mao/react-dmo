import React, {Component} from 'react'
import Letter from './Letter'

class ShowLatter extends Component {
    render(){
        return(
            <div>
                <Letter bgcolor={"#58B3FF"}>A</Letter>
                <Letter bgcolor={"#FF605F"}>E</Letter>
                <Letter bgcolor={"#FFD52E"}>I</Letter>
                <Letter bgcolor={"#49DD8E"}>O</Letter>
                <Letter bgcolor={"#AE99FF"}>U</Letter>
            </div>
        )
    }
}

export default ShowLatter;