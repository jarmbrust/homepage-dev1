import React, { Component } from 'react';
import {
  Table,
  Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cats extends Component {
  render() {
    return(
       <div className="cats">
        <Container className="themed-container" fluid="sm">
        <Table dark className="table-pets">
          <caption>Cats in the order they were adopted:</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Coloring</th>
              <th>Aprox Age</th>
              <th>Pictures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>"Kitten"</td>
              <td>Calico</td>
              <td>12</td>
              <td></td>
            </tr>
            <tr>
              <td>Vecna</td>
              <td>White with Black Spots</td>
              <td> &lt; 1</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        </Container>
      </div>
    );
  }
}

export default Cats;
