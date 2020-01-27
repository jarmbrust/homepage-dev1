import React, { Component } from 'react';
import {
  Table,
  Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Dogs extends Component {

  render() {
    return(
      <div className="dogs">
        <Container className="themed-container" fluid="sm">
        <Table dark>
          <caption>Dogs in the order they were adopted:</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Breed</th>
              <th>Aprox Age</th>
              <th>Pictures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chewie</td>
              <td>Black Lab Mix</td>
              <td>10</td>
              <td></td>
            </tr>
            <tr>
              <td>Stormageddon Dark Lord of All (aka. Stormy)</td>
              <td>Chihuahua Mix</td>
              <td>13</td>
              <td></td>
            </tr>
            <tr>
              <td>Lexi</td>
              <td>Chihuahua Mix</td>
              <td>5</td>
              <td></td>
            </tr>
            <tr>
              <td>Muppet</td>
              <td>Chinese Crested Terrier Mix</td>
              <td>6</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        </Container>
      </div>
    );
  }
}

export default Dogs;
