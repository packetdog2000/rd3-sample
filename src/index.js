import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Graph from './components/graph';

class App extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
        <div>
            <h1>React + D3</h1>
            <Graph />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
