import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.css";

class Dogs extends Component {

  render() {
    return(
      <div className="dogs">
        <Table bordered hover>
          <caption>The dogs, in the order they were adpoted:</caption>
          <tbody>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Breed</th>
              <th scope="col">Aprox Age</th>
              <th scope="col">Pictures</th>
            </tr>
            <tr>
              <td>Chewie</td>
              <td>Black lab mix</td>
              <td>10</td>
              <td></td>
            </tr>
            <tr>
              <td>Stormageddon Dark Lord of All (aka. Stormy)</td>
              <td>Chihuahua mix</td>
              <td>13</td>
              <td></td>
            </tr>
            <tr>
              <td>Lexi</td>
              <td>Chihuahua mix</td>
              <td>5</td>
              <td></td>
            </tr>
            <tr>
              <td>Muppet</td>
              <td>Chinese-crested terrier mix</td>
              <td>6</td>
              <td></td>
            </tr>
            </tbody>
        </Table>
      </div>
    );
  }
}

export default Dogs;