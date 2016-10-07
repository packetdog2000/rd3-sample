import React, { Component } from 'react';
import lineData from './d3-data/lineChart';
import rd3 from 'react-d3-library';
const RD3Component = rd3.Component;

const LineChart = rd3.LineChart;

class Graph extends Component {

    constructor(props){
        super(props);
        this.state = {d3: ''};

    }

    componentDidMount() {
        this.setState({d3: lineData});
    }

    render () {
        return (
        <div>
            <LineChart data={this.state.d3} />
        </div>
        );
    }
}

export default Graph;
