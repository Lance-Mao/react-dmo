import React, {Component} from 'react';
import './App.css';
import Index from './demo001/Index'; //时钟案例
import Ref_demo from './demo002/Ref_demo'; //ref案例
import Card_index from './demo003/Card_index'; //props.children
import ShowLatter from './demo004/ShowLatter'; //style

class App extends Component {
    render() {
        return (
            <div className="App">
                <Index/>
                <hr />
                <Ref_demo/>
                <hr />
                <Card_index/>
                <hr />
                <ShowLatter/>
                <hr />
            </div>
        );
    }
}

export default App;
