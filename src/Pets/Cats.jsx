import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.css";

class Cats extends Component {
  render() {
    return(
       <div className="cats">
        <Table bordered hover>
          <caption>The cats, in the order they were adpoted:</caption>
          <tbody>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Coloring</th>
              <th scope="col">Aprox Age</th>
              <th scope="col">Pictures</th>
            </tr>
            <tr>
              <td>"Kitten"</td>
              <td>Calico</td>
              <td>9</td>
              <td></td>
            </tr>
            <tr>
              <td>Vecna</td>
              <td>White with black spots</td>
              <td>7 months</td>
              <td></td>
            </tr>
            </tbody>
        </Table>
      </div>
    );
  }
}

export default Cats;