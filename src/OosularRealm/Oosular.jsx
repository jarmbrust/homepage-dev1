import React, { Component } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import './Oosular.scss';
import "bootstrap/dist/css/bootstrap.css";

class Oosular extends Component {
  render() {
    return (
      <div className="oosular-background">
        <Container>
          <Row sm={3}></Row>
          <Row sm={6}>
            <br />
            <p>Brief intro to a fantasy Dungeons and Dragons game I am creating... currently a brain dump, but will fix it up and organize it!</p>
            <br />
            <h1 className="title">The Lands of Oosular</h1>
            <p>The world of Oosular has nine small moons.  The corresponding nine months of the year are determined by which moon is closest to the 
              planet during that time.  Each month is about 40 days long, and the year is 361 days long.  The last day is the annual Day of Darkness, 
              where some believe the mysterious black 10th moon is closest to the world and the veil between death and life is at its thinnest. 
              This is considered the last day of the year, and a day that the spirits of the dead freely walk the world.</p>
            <Table bordered hover>
              <caption>The Nine Lunar Months (+1 day)</caption>
              <tbody>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Days</th>
                <th scope="col">Major Holidays</th>
                <th scope="col">???</th>
              </tr>
              <tr>
                <td>Ous</td>
                <td>40</td>
                <td>Day of Rebirth (1st), Feast of the New Year (12th)</td>
                <td></td>
              </tr>
              <tr>
                <td>Darnu</td>
                <td>37</td>
                <td>Lover's Day (6th), The founding of Aeso (18th, Aeso only), The Fall of Gondus (35th)</td>
                <td></td>
              </tr>
              <tr>
                <td>Yovo</td>
                <td>42</td>
                <td>Festival of Fertility (3rd), Holy Day of Sann (8th)</td>
                <td></td>
              </tr>
              <tr>
                <td>Quess</td>
                <td>41</td>
                <td>tbd</td>
                <td></td>
              </tr>
              <tr>
                <td>Mar</td>
                <td>35</td>
                <td>tbd</td>
                <td></td>
              </tr>
              <tr>
                <td>Taque</td>
                <td>43</td>
                <td>tbd</td>
                <td></td>
              </tr>
              <tr>
                <td>Satoro</td>
                <td>41</td>
                <td>tbd</td>
                <td></td>
              </tr>
              <tr>
                <td>Dasx</td>
                <td>41</td>
                <td>tbd</td>
                <td></td>
              </tr>
              <tr>
                <td>Mok</td>
                <td>40</td>
                <td>tbd</td>
                <td></td>
              </tr>
              <tr>
                <td>Galuula</td>
                <td>1</td>
                <td>Day of Darkness, Night of Souls</td>
                <td></td>
              </tr>
              </tbody>
            </Table>
            <p>Not everyone believes there exists a 10th moon, but many hold that it is a gateway to the Far Realms where the spirits 
              of those who died throughout the year travel to their rest in the lands of Galuula.  Others hold that the 
              day is simply a day where all the "normal" moons are far enough away from the world that their life-giving presence leaves all living
              creatures with a sense of unease.  Whatever the individual's belief, people of various cultures revere this day, which is often
              referred to as the Night of Souls.</p>
            <div>
              <h2>Peoples and Races of the Continents of Rana</h2>
              <p>There are a diverse number of humanoids that live in the northern and southern continents of Rana...</p>
              <h3>Humans</h3>
              <p>Nokos -- Believe themselves the decedents of the ancient Nokoyans who, as legend goes, once ruled most of Oosular. 
                They generally have light to medium skin tones and darker hair and eyes.</p>
              <p>Tarok -- A fair hair and skinned people who live in the northern portions of the northern continent. 
                They generally speak the North Ranan dialect and the traditional language of Taro. </p>
              <p>Ven -- A darker skinned people that originally are believed to have come from the western sea and settled southern Rana. They
                speak in the South Ranan dialect and Ven.
              </p>
              <h3>Elves</h3>
              <p>High Elves (sometimes called "Grey Elves") -- </p>
              <p>Wood Elves -- </p>
              <p>Wild Elves -- </p>
              <p>Half Elves -- </p>
              <h3>Dwarves</h3>
              <p></p>
            </div>
          </Row>
          <Row sm={3}></Row>
        </Container>
      </div>
    );
  }
}

export default Oosular;