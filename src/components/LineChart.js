import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';
import rd3 from 'rd3';
import Table from './Table';

class LineChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            xMax: this.getMax(this.props.lineData[0].values).x,
            yMax: this.getMax(this.props.lineData[0].values).y
        }
    }
    componentWillMount() {
        this.setState({
                data: this.props.lineData
            });
    }

    update(){
        const x = this.state.data;
        let newX = x[0].values.length;
        const newY = parseFloat(ReactDOM.findDOMNode(this.refs.newYValue).value);
        x[0].values.push({x:newX, y: newY});
        const _xMax = this.getMax(x[0].values).x;
        const _yMax = this.getMax(x[0].values).y;
        ReactDOM.findDOMNode(this.refs.newYValue).value = '';
        ReactDOM.findDOMNode(this.refs.newYValue).focus();
        this.setState({
                data: x,
                xMax: _xMax,
                yMax: _yMax
            });
        // console.log(this.state);
    }

    getMax(arr){
        const _x = d3.max(arr, function(d) { return d.x; });
        const _y = d3.max(arr, function(d) { return d.y; })
        return {x:_x, y: _y};
    }

    render () {
        const LineChart = rd3.LineChart;
        return  (
            <div className="col-md-12">
                <LineChart
                legend={true}
                data={this.state.data}
                width='100%'
                height={400}
                color='#FF0000'
                viewBoxObject={{
                x: 0,
                y: 0,
                width: 500,
                height: 400
                }}
                title={this.props.title}
                yAxisLabel="Value"
                xAxisLabel="Period"
                domain={{x: [,this.state.xMax], y: [0, this.state.yMax]}}
                gridHorizontal={true}
                />
            <div className="form-group">
                    <label>New Data Point: </label>
                    <input className="form-control" type="number" ref="newYValue" />

            </div>
            <div className="form-group">
                <button className="btn btn-default" onClick={this.update.bind(this)}>Add Point</button>
            </div>
            <Table title="EP 01" data={this.state.data[0].values} />
        </div>
      )
    }
}

export default LineChart;
