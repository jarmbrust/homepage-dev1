import React from 'react';
import './Oosular.scss';
import {
  Table,
  Container
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Moons = () => {
  return (
    <div className="oosular-background">
      <Container className="col-md-6">
        <h2>Tracking time in Oosular</h2>
        <p>The world of Oosular has nine small moons.  The corresponding nine months of the year are determined by which moon is closest to the 
          planet during that time.  Each month is about 40 days long, and the year is 361 days long.  The last day is the annual Day of Darkness, 
          where some believe the mysterious black 10th moon is closest to the world and the veil between death and life is at its thinnest. 
          This is considered the last day of the year, and a day that the spirits of the dead freely walk the world.
        </p>
        <p>
          Current date is the __ day of ____ in the year 1395 of the founding of Nokoya, otherwise known as 2273 of the Fourth Age of the world.
        </p>
        <Table bordered hover dark className="table-moon">
          <caption>The Nine Lunar Months (+1 day)</caption>
          <tbody>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Days</th>
            <th scope="col">Major Holidays</th>
            <th scope="col">???</th>
          </tr>
          <tr>
            <td>Ouros</td>
            <td>40</td>
            <td>Day of Rebirth (1st), Feast of the New Year (12th), </td>
            <td></td>
          </tr>
          <tr>
            <td>Darnu</td>
            <td>37</td>
            <td>Lover's Day (6th), The founding of Zlago (18th, Zlago only), The Fall of Gondus (35th)</td>
            <td></td>
          </tr>
          <tr>
            <td>Yovo</td>
            <td>42</td>
            <td>Festival of Fertility (3rd), Holy Day of Tornoc (8th), Blessings of the Trinity (40th)</td>
            <td></td>
          </tr>
          <tr>
            <td>Quess</td>
            <td>41</td>
            <td>Day of the Dragons (21st), Birthday of King Teotu of Zlago (29th)</td>
            <td></td>
          </tr>
          <tr>
            <td>Marrado</td>
            <td>35</td>
            <td>Founding of the Nokoyan Empire (7th)</td>
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
            <td>Dasca</td>
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
        <p>Not everyone believes there exists a 10th moon, but those that do hold that it is a gateway to the Far Realms where the spirits 
          of those who died during the year travel to their rest in the lands of Galuula.  Others hold that the 
          day is simply a day where all the "normal" moons are far enough away from the world that their life-giving presence leaves all living
          creatures with a sense of unease.  Whatever the individual's belief, people of various cultures revere this day, which is often
          referred to as the Day of Darkness and Night of Souls.</p>
      </Container>
    </div>
  );
}

export default Moons;
