import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Table, Label } from 'semantic-ui-react'

class Dogs extends Component {

  render() {
    return(
      <div className="dogs">
        <span className="table-title">The dogs, in the order they were adopted:</span>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Breed</Table.HeaderCell>
              <Table.HeaderCell>Aprox Age</Table.HeaderCell>
              <Table.HeaderCell>Pictures</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
         
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Chewie</Label>
              </Table.Cell>
              <Table.Cell>Black Lab Mix</Table.Cell>
              <Table.Cell>10</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Stormageddon Dark Lord of All (aka. Stormy)</Label>
              </Table.Cell>
              <Table.Cell>Chihuahua Mix</Table.Cell>
              <Table.Cell>13</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Lexi</Label>
              </Table.Cell>
              <Table.Cell>Chihuahua Mix</Table.Cell>
              <Table.Cell>5</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Muppet</Label>
              </Table.Cell>
              <Table.Cell>Chinese-Crested Terrier Mix</Table.Cell>
              <Table.Cell>6</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            </Table.Body>
        </Table>
      </div>
    );
  }
}

export default Dogs;