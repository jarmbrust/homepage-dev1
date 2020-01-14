import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Table, Label } from 'semantic-ui-react'

class Cats extends Component {
  render() {
    return(
       <div className="cats">
        <span className="table-title">The cats, in the order they were adopted:</span>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Coloring</Table.HeaderCell>
              <Table.HeaderCell>Aprox Age</Table.HeaderCell>
              <Table.HeaderCell>Pictures</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>"Kitten"</Label>
              </Table.Cell>
              <Table.Cell>Calico</Table.Cell>
              <Table.Cell>12</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Vecna</Label>
              </Table.Cell>
              <Table.Cell>White with Black Spots</Table.Cell>
              <Table.Cell>&lt; 1</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default Cats;