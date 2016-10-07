import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LineChart from './components/LineChart';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'EP01',
            data : [
                  {
                    name: 'EP01',
                    values: [ { x: 0, y: 0}],
                    strokeWidth: 1,
                    strokeColor:'#F00',
                    strokeDashArray: "5,2",
                  }
                ]
        }
    }

    render(){
        return (
        <div>
            <h1>React + D3</h1>
            <LineChart lineData={this.state.data} title={this.state.title}/>
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
