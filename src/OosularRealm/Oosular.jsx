import React, { Component } from 'react';
import './Oosular.scss';
import {
  Container,
  Dropdown,
  Table
} from 'semantic-ui-react'

class Oosular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  raceDescription(race) {
    switch(race) {
      case 'Human':
        return this.humans();
      case 'Elf':
        return this.elves();
      case 'Dwarf':
        return this.dwarves();
      case 'Halfling':
        return this.halflings();
      case 'Tiefling':
        return this.tieflings();
      case 'Orc':
        return this.orcs();
      case 'Goblinoid':
        return this.goblinoids();
      case 'Lizardfolk':
        return this.lizardfolk();
      case 'Yaun-Ti':
        return this.yaunti();
      default:
        return '';
    }
  }

  onClickHandler = event => {
    const value = event.target.innerHTML;
    this.setState({ value })
  }

  render() {
    return (
      <div className="oosular-background">
      <Container>
          <br />
          <p>Brief intro to a fantasy Dungeons and Dragons game I am creating... currently a brain dump, but will fix it up and organize it!</p>
          <br />
          <h1 className="title">The Lands of Oosular</h1>
          <Moons />
          <div>
            <h2>Peoples and Races of the Continents of Rana</h2>
            <p>There are a diverse number of humanoids that live in the northern and southern continents of Rana...</p>

            <Dropdown id="race-dropdown-button" title="Select Race" caret="true" color="primary">
              <Dropdown.Menu>
                <Dropdown.Item onClick={this.onClickHandler}>Human</Dropdown.Item>
                <Dropdown.Item onClick={this.onClickHandler}>Elf</Dropdown.Item>
                <Dropdown.Item onClick={this.onClickHandler}>Dwarf</Dropdown.Item>
                <Dropdown.Item onClick={this.onClickHandler}>Halfling</Dropdown.Item>
                <Dropdown.Item onClick={this.onClickHandler}>Tiefling</Dropdown.Item>
                <Dropdown.Item onClick={this.onClickHandler}>Orc</Dropdown.Item>
                <Dropdown.Item onClick={this.onClickHandler}>Goblinoid</Dropdown.Item>
                <Dropdown.Item onClick={this.onClickHandler}>Lizardfolk</Dropdown.Item>
                <Dropdown.Item onClick={this.onClickHandler}>Yaun-Ti</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className='race-description'>{this.raceDescription(this.state.value)}</div>
            <br />
            <p>* Indicates a race that for now is not available to players.</p>
            <br />
          </div>
          
        </Container>
      </div>
    );
  }

  humans() {
    return (
      <div><h3>Humans</h3>
        <p>[Gameplay: All humans use the variant rules for stats]</p>
        <p><span style={{fontWeight: "bold"}}>Nokos</span>: Said to be the decedents of the ancient Nokoyans who, as legend goes, once ruled most of Oosular. 
          They generally have light to medium skin tones and darker hair and eyes.</p>
        <p><span style={{fontWeight: "bold"}}>Tarok</span>: A fair hair and skinned people who live in the northern portions of the northern continent. 
          They generally speak the North Ranan dialect and the traditional language of Taro. Most of the northern barbarians are 
          of the Tarok people, but not all Tarok are barbarians.</p>
        <p><span style={{fontWeight: "bold"}}>Ven</span>: A darker skinned people that originally are believed to have come from the western sea and settled southern Rana. They
          speak in the South Ranan dialect and the language of the Ven.</p>
      </div> 
    )
  }

  elves() {
    return (
      <div>
        <h3>Elves</h3>
        <p><span style={{fontWeight: "bold"}}>High Elves</span>: Claim to be the oldest and most "pure" elves, and to have once had an empire greater than Nokoya.  
          They have very light to almost albino skin tones, hair that ranges from light blond, light blue, or white, and eye colors that often are gold, 
          but can be silver, violet, or pale blue. They tend to be quite slim and stand on average around six and a half feet tall. They are scattered 
          around in enclaves usually in human cities, and are seen as highly intelligent, eccentric, and aloof.  These elves are also the longest lived 
          of any known mortal humanoid (making it into their 6th, and on rare cases even 9th centuries), but are prone to in-breeding 
          (and all the fun traits that come from that) due to their low numbers and birth rates.  They speak the high-elven dialect as well as some regional
          languages. Most have at least some training in magic and often serve as advisors to kings.</p>
        <p><span style={{fontWeight: "bold"}}>Wood Elves</span>: Range from light to medium skin tones and hair from blond, brown, red, black and green. They are slim of build and stand just
          over 5' on average.  Some trade and intermix with human communities, although many tribes (often coined "wild elves") take a more xenophobic 
          approach to outsiders and stay secluded in their forests.  They rarely tattoo themselves, but love elaborate semi-permanent body-paint.
          They can live into their 3rd century and speak the wood elf dialect as well as some regional languages. Culturally they don't 
          revere any specific gods, but follow the teachings of their druids.</p>
        <p><span style={{fontWeight: "bold"}}>Half Elves</span>: Usually of wood elf decent, they have a mixture of their parents' traits. They are generally accepted in most human communities
          although it can vary widely amongst the elves. High elf half-breeds are very rare and viewed as pariahs amongst the elves.</p>
      </div>
    )
  }

  dwarves() {
    return(
      <div>
        <h3>Dwarves</h3>
        <p><span style={{fontWeight: "bold"}}>Hill Dwarves</span>: Most populous of the dwarves who mix with the human nations, they have medium to darker skin tones, although dark red
          hair is somewhat common. Men will always have beards unless a convicted criminal or outcast (or insane). Women generally grow
          their hair long and braided too.  Tattoos are very common, and often tell a story about the clan the dwarf is from. They stand just over 
          four feed tall on average.</p>
        <p><span style={{fontWeight: "bold"}}>Mountain Dwarves</span>: Slightly taller and fairer skinned then their hill dwarf cousins, the mountain dwarves tend to stay in their
          mountains and are content to trade with outsiders if their lands and mines are left alone.  Adventuring ones are almost always outcasts.</p>
      </div>
    )
  }

  halflings() {
    return(
      <div>
        <h3>Halflings</h3>
        <p><span style={{fontWeight: "bold"}}>Lightfoot</span>: Standing around 3 feet tall they are amongst the smallest of the PC races.  They are generally fair skinned 
          with darker hair colors.  Not necessarily slim, but they do often tend to be fairly lean and well muscled for their size.  
          Often found as merchants and traders as a people they tend to travel a lot.  Those that
          are older and successful at their jobs usually settle down and grow fat. Tattooing the left arm, sometimes fully, is common, but rarely 
          do they mark any other place on their bodies.</p>
        <p><span style={{fontWeight: "bold"}}>Stout</span>: Tend to be stockier and darker then their cousins, and are usually found in mountain dwarf communities.</p>
      </div>
    )
  }

  tieflings() {
    return(
      <div>
        <h3>Tieflings</h3>
        <p><span style={{fontWeight: "bold"}}>Infernal/Abyssal</span>: All the stats and looks from the books.  Sometimes viewed with distrust, they are decedents with demonic or
          infernal blood in their heritage. Many are decedents of the ancient city of Vurlang, which was given over to corruption and destroyed
          long ago.</p>
        <p><span style={{fontWeight: "bold"}}>Bloodsworn</span>: Humans (usually) that have formed a direct pact with the forces of the abyss.  The have blood-red skin and solid black
          eyes.  Tieflings found out to be bloodsworn are almost always viewed with disdain.</p>
      </div>
    )
  }

  orcs() {
    return(
      <div>
        <h3>Orcs</h3>
        <p><span style={{fontWeight: "bold"}}>Orcs*</span>: Orc culture is violent and brutal, and very similar to what is outlined in the books. Orc tribes 
          dominate the north and northeastern portions of the North Rana.
        </p>
        <p><span style={{fontWeight: "bold"}}>Half-Orcs</span>: Decedents of humans who have interbred or been interbred with orcs.  </p>
      </div>
    )
  }

  goblinoids() {
    return(
      <div>
        <h3>Goblinoids</h3>
        <p><span style={{fontWeight: "bold"}}>Hobgoblins</span>: Standing almost as tall as a human, with lean and strong builds,
          yellowish/orange skin tones and dark hair, hobgoblins come from a violent and repressive culture.  Brutally raised
          from childhood in the service of the hobgoblin empire, hobgoblins have a grim and determined outlook on life, and
          live for conflict and strife.  Organize, brutal, and cunning, hobgoblins seek out challenge and battle to test 
          themselves and their limits.  PC hobgoblins are either from a decimated outlining tribe, outcasts of the greater
          empire, or soldiers of fortune seeking fame and infamy. Due to the way they were raised, hobgoblins are almost
          always lawful and (almost) always evil.</p>
        <p><span style={{fontWeight: "bold"}}>Goblins*</span>: Wiry, cunning, and mischievous (and have the ability to breed almost
          like rabbits), goblins are viewed far and wide as dangerous pests. Rarely are they allowed in many of the more
          civilized locals.</p>
        <p><span style={{fontWeight: "bold"}}>Bugbears*</span>: Big, strong, and mean.</p>
      </div>
    )
  }

  lizardfolk() {
    return(
      <div>
        <h3>Lizardfolk</h3>
        <p><span style={{fontWeight: "bold"}}>Swampfolk</span>: Dark green scales and a colorful crest on the head identifies 
          the swampfolk.  Generally xenophobic and hostile to outsiders, the tribes of the southern swamps usually keep to
          themselves; and only making their presence known when someone invades their territory.</p>
        <p><span style={{fontWeight: "bold"}}>Marshfolk</span>: More likely to trade with outsiders than their swamp-dwelling
          cousins, the marshfolk are generally a more brownish-green in coloration, and have either an orange, yellow, or bright red
          crest.</p>
      </div>
    )
  }

  yaunti() {
    return(
      <div>
        <h3>Yaun-Ti</h3>
        <p><span style={{fontWeight: "bold"}}>Pureblood</span>: Decedents of those who worshiped an ancient snake cult, Most
          yaun-ti hide their ancestry, living quietly among humans.  Some however embrace it and the reinsurance of the ancient
          cults.</p>
      </div>
    )
  }
}

class Moons extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
} 



export default Oosular;