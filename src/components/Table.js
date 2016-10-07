import React, { Component } from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            points:this.props.data,
            title: this.props.title
        }
    }
    render () {
        
        return (
            <div>
                <h4>{this.state.title}</h4>
                <BootstrapTable data={this.state.points} striped={true} hover={true}>
                    <TableHeaderColumn isKey={true}  dataField="x">Period</TableHeaderColumn>
                    <TableHeaderColumn dataField="y">Value</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default Table;
