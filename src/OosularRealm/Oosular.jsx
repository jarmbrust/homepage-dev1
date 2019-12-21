import React, { Component } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import './Oosular.css';
import "bootstrap/dist/css/bootstrap.css";

class Oosular extends Component {
  render() {
    return (
      <div className="oosular-background">
        <Container>
          <Row sm={3}></Row>
          <Row sm={6}>
            <p>Brief intro to a fantasy Dungeons and Dragons game I am creating... currently a brain dump, but will fix it up and organize it!</p>
            <br />
            <h1 className="title">The Lands of Oosular</h1>
            <p>The world of Oosular has nine moons.  The nine months of the year are determined by which moon is closest to the planet during that time.  Each month is about 40 days long, and the year is 361 days long.  The last day is the annual Day of Darkness, where some believe the mysterious black 10th moon is closest to the world and the veil between death and life is at its thinnest. This is considered the last day of the year, and a day that the spirits of the dead freely walk the world.</p>
            <p>Not everyone believes there exists a 10th moon, many hold that it is simply a gateway to the Far Realms, where the spirits of those who died throughout the year travel to their rest in the lands of Galuula.  Some who do believe in the 10th moon, hold that the moon itself is a goddess named Galuula, and the spirits travel there to her embrace rest.  Others hold that the day is simply a day where all the “normal” moons are far enough away from the world that their life-giving presence leaves all living creatures with a sense of unease.  Whatever the individual’s exact view, people of various cultures revere this day, which is often referred to as the festival of Galu, the Night of Souls.</p>
            <Table bordered hover>
              <caption>The Nine Lunar Months</caption>
              <tbody>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Days</th>
                <th scope="col">Major Holidays</th>
                <th scope="col">???</th>
              </tr>
              <tr>
                <td>Ous</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Darnu</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Yovo</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Quess</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Mar</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Taque</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Satoro</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Dasx</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Mok</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              </tbody>
            </Table>
          </Row>
          <Row sm={3}></Row>
        </Container>
      </div>
    );
  }
}

export default Oosular;