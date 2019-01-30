import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import './Table.css'
import './reacttable.css'
class Table1 extends Component {
  render() {
        function showDescription(cell,cell2, row) {
            return cell.city;
        }
        function showDescription2(cell,row) {
            return cell.name
            }
    return (
      <div>
        <BootstrapTable data={this.props.data} >
          
          <TableHeaderColumn isKey dataField='name' dataAlign='center'
                              headerAlign="center" width='1px'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='email' dataAlign='center'
                             headerAlign="center" width='1px'>
            Email
          </TableHeaderColumn>
          <TableHeaderColumn dataField='address' dataAlign='center'
                              width='1px' headerAlign="center" dataFormat={showDescription}>
            City
          </TableHeaderColumn>
          <TableHeaderColumn dataField='company' dataAlign='center'
                             headerAlign="center" width='1px' dataFormat={showDescription2}>
            Company
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )}}
export default Table1;