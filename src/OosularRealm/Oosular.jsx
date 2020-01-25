import React, { Component } from 'react';
import './Oosular.scss';
import {
  Container,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  Table,
  DropdownMenu,
  UncontrolledTooltip
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from '../Images/North_Rana__Oosular.png'; 


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
          <h1 className="title">The Lands of Oosular</h1>
          <p>Map of the western portion of the continent of North Rana.</p>
          <img src={Map} alt="Oosular Map, North Rana" width="710.5" height="408.5"></img>
          <br />
          <Moons />
          <div>
            <h2>Peoples and Races of the Continents of Rana</h2>
            <p>There are a diverse number of humanoids that live in the northern and southern continents of Rana...</p>

            <UncontrolledButtonDropdown id="race-dropdown" text="Select Race">
              <DropdownToggle caret>
                Select Race
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={this.onClickHandler}>Human</DropdownItem>
                <DropdownItem onClick={this.onClickHandler}>Elf</DropdownItem>
                <DropdownItem onClick={this.onClickHandler}>Dwarf</DropdownItem>
                <DropdownItem onClick={this.onClickHandler}>Halfling</DropdownItem>
                <DropdownItem onClick={this.onClickHandler}>Tiefling</DropdownItem>
                <DropdownItem onClick={this.onClickHandler}>Orc</DropdownItem>
                <DropdownItem onClick={this.onClickHandler}>Goblinoid</DropdownItem>
                <DropdownItem onClick={this.onClickHandler}>Lizardfolk</DropdownItem>
                <DropdownItem onClick={this.onClickHandler}>Yaun-Ti</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>

            <div className='race-description'>{this.raceDescription(this.state.value)}</div>
            <br />

          </div>
          <div>
            <p>There are other groups and peoples as well in North and South Rana...</p>
            <ul>
              <li>Kobold flame disciples</li>
              <li></li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }

  humans() {
    return (
      <div><h3>Humans</h3>
        <p><span style={{textDecoration: "underline", color:"blue"}} href="#" id="humantooltip">[Gameplay Note:]</span></p>
        <UncontrolledTooltip placement="right" target="humantooltip">
          All humans use the variant rules from the PHB: +1 to 2 ability scores of your choice,
          one extra skill proficiency, and one starting feat.
        </UncontrolledTooltip>
        <p><span className="race-heading">Nokos</span>: Said to be the decedents of the ancient Nokoyans who, as legend goes, once ruled most of Oosular. 
          They generally have light to medium skin tones and darker hair and eyes.</p>
        <p><span className="race-heading">Tarok</span>: A fair hair and skinned people who live in the northern portions of the northern continent. 
          They generally speak the North Ranan dialect and the traditional language of Taro. Most of the northern barbarians are 
          of the Tarok people, but not all Tarok are barbarians.</p>
        <p><span className="race-heading">Ven</span>: A darker skinned people that originally are believed to have come from the western sea and settled southern Rana. They
          speak in the South Ranan dialect and the language of the Ven.</p>
      </div> 
    );
  }

  elves() {
    return (
      <div>
        <h3>Elves</h3>
        <p><span className="race-heading">High Elves</span>: Claim to be the oldest and most "pure" elves, and to have once had an empire greater than Nokoya.  
          They have very light to almost albino skin tones, hair that ranges from light blond, light blue, or white, and eye colors that often are gold, 
          but can be silver, violet, or pale blue. They tend to be quite slim and stand on average around six and a half feet tall. They are scattered 
          around in enclaves usually in human cities, and are seen as highly intelligent, eccentric, and aloof.  These elves are also the longest lived 
          of any known mortal humanoid (making it into their 6th, and on rare cases even 9th centuries), but are prone to in-breeding 
          (and all the fun traits that come from that) due to their low numbers and birth rates.  They speak the high-elven dialect as well as some regional
          languages. Most have at least some training in magic and often serve as advisors to kings.</p>
        <p><span className="race-heading">Wood Elves</span>: Range from light to medium skin tones and hair from blond, brown, red, black and green. They are slim of build and stand just
          over 5' on average.  Some trade and intermix with human communities, although many tribes (often coined "wild elves") take a more xenophobic 
          approach to outsiders and stay secluded in their forests.  They rarely tattoo themselves, but love elaborate semi-permanent body-paint.
          They can live into their 3rd century and speak the wood elf dialect as well as some regional languages. Culturally they don't 
          revere any specific gods, but follow the teachings of their druids.</p>
        <p><span className="race-heading">Half Elves</span>: Usually of wood elf decent, they have a mixture of their parents' traits. They are generally accepted in most human communities
          although it can vary widely amongst the elves. High elf half-breeds are very rare and viewed as pariahs amongst the elves.</p>
      </div>
    );
  }

  dwarves() {
    return(
      <div>
        <h3>Dwarves</h3>
        <p><span className="race-heading">Hill Dwarves</span>: Most populous of the dwarves who mix with the human nations, 
          they have medium to darker skin tones, dark red, black, grey, and dark blue hair is common. Men will always have beards unless a convicted 
          criminal or outcast (or insane). Women generally grow their hair long and usually in intricate traditional braids.  Tattoos are very common, 
          and often tell a story about the clan the dwarf is from. Body piercings of fine jewelry are common to those that can afford it. 
          They stand just over four feed tall on average.</p>
        <p><span className="race-heading">Mountain Dwarves</span>: Slightly taller and fairer skinned then their hill dwarf cousins, 
          with blond, black, red, or brown hair coloring, the mountain dwarves tend to stay in their mountains and are content to have minimal 
          trade with outsiders if their lands and mines are left alone. Adventuring mountain dwarves are almost always outcasts or disgraced in some manner.</p>
      </div>
    );
  }

  halflings() {
    return(
      <div>
        <h3>Halflings</h3>
        <p><span className="race-heading">Lightfoot</span>: Standing around 3 feet tall they are amongst the smallest of the PC races.  
          They are generally fair skinned with darker hair colors.  Not necessarily slim, but they do often tend to be fairly lean and well 
          toned for their size.  Often found as merchants and traders as a people they tend to travel a lot.  Those that
          are older and successful at their jobs (ie. rich) usually settle down and grow fat and are looked at with envy and respect by the community.
          Tattooing the left arm, sometimes fully from wrist to shoulder, is common, but rarely do they mark any other place on their bodies.</p>
        <p><span className="race-heading">Stout</span>: Tend to be stockier and darker then their cousins, and are usually 
          found in mountain dwarf communities.  They are rarely seen outside their communities, as a culture they are not much for exploration or adventure.</p>
      </div>
    );
  }

  tieflings() {
    return(
      <div>
        <h3>Tieflings</h3>
        <p><span className="race-heading">Infernal/Abyssal</span>: All the stats and looks from the books.  Sometimes viewed with distrust, they are decedents with demonic or
          infernal blood in their heritage. Many are decedents of the ancient city of Vurlang, which was given over to corruption and destroyed
          long ago.</p>
        <p><span className="race-heading">Bloodsworn</span>: Humans (usually) that have formed a direct pact with the forces of the abyss.  The have blood-red skin and solid black
          eyes.  Tieflings found out to be bloodsworn are almost always viewed with disdain.</p>
      </div>
    );
  }

  orcs() {
    return(
      <div>
        <h3>Orcs</h3>
        <p><span className="race-heading" style={{textDecoration: "underline", color:"blue"}} href="#" id="orctooltip">Orcs*:</span> Orc culture 
          is violent and brutal, and very similar to what is outlined in the books. Orc tribes dominate the north and northeastern portions of the North Rana.
        </p>
        <UncontrolledTooltip placement="right" target="orctooltip">
          Orcs are not yet available as a playable class...
        </UncontrolledTooltip>
        <p><span className="race-heading">Half-Orcs</span>: Decedents of humans who have interbred or been interbred with orcs.</p>
      </div>
    );
  }

  goblinoids() {
    return(
      <div>
        <h3>Goblinoids</h3>
        <p><span className="race-heading">Hobgoblins</span>:&nbsp;Standing nearly as tall as an average human, with lean and strong builds
          yellowish/orange skin tones and dark hair, hobgoblins come from a violent and repressive culture.  Brutally raised
          from childhood in the service of the hobgoblin empires, hobgoblins have a grim and determined outlook on life.  Their culture
          teaches that conflict and strife are the crucible that forges the ultimate hobgoblin warrior, and they have this credo beaten
          into them as children.  Organized, brutal, and cunning, hobgoblins seek out challenge and battle to test 
          themselves and their limits.  PC hobgoblins are either from a decimated outlining tribe, outcasts of the greater
          empire, or soldiers of fortune seeking fame and infamy. Due to the way they were raised, hobgoblins are almost
          always lawful and (almost) always evil.</p>
        <p><span className="race-heading" style={{textDecoration: "underline", color:"blue"}} href="#" id="goblintooltip">Goblins*</span>:&nbsp;
          Wiry, cunning, and mischievous (and have the ability to breed almost
          like rabbits), goblins are viewed far and wide as dangerous pests. Rarely are they allowed in many of the more
          civilized locals, and when they are they are often watched like hawks. It is not uncommon for more remote townships to offer bounties
          for goblin kills (usually they accept pairs of ears as proof of kill).  Goblins can be found in almost any local, and are often raised
          in warren-like lairs where the largest and strongest bully the smaller and make the rules. Children are many times kept in cages or pens 
          until they are old enough to be useful and fend for themselves.</p>
          <UncontrolledTooltip placement="right" target="goblintooltip">
            Goblins are not yet available as a playable class...
          </UncontrolledTooltip>
        <p><span className="race-heading" style={{textDecoration: "underline", color:"blue"}} href="#" id="bugbeartooltip">Bugbears*</span>:&nbsp;
          Standing from 6 to 8 feet tall, bugbears are Big, strong, and mean. Ambush predators and raiders, bugbears are found in small groups or
          hired out as muscle for other races.  Bugbears don't form much in the way of family attachments, and children are cared for by their 
          mothers until they can fend for themselves -- then abandoned at that young age.  Occasionally they are bred and trained as shock troops
          by hobgoblins, when their chaotic nature can be suppressed, or sometimes harnessed for effect.</p>
          <UncontrolledTooltip placement="right" target="bugbeartooltip">
            Bugbears are not yet available as a playable class...
          </UncontrolledTooltip>
      </div>
    );
  }

  lizardfolk() {
    return(
      <div>
        <h3>Lizardfolk</h3>
        <p><span className="race-heading">Swampfolk</span>: Dark green scales and a multi-color crest on the head identifies 
          the swampfolk.  Generally xenophobic and hostile to outsiders, the tribes of the southern swamps usually keep to
          themselves, only making their presence known (often violently) when someone trespasses their territory. Otherwise they are very similar
          to marshfolk (see below) except that their multicolor fins do not appear to designate a role in the tribe.</p>
        <p><span className="race-heading">Marshfolk</span>: More likely to trade with outsiders than their swamp-dwelling
          cousins, the marshfolk scales are generally a brownish-green in coloration, and have either an orange, yellow, or bright red
          crest. This fin on the top of their heads and back of their neck identifies their role in marshfolk society
          as it's coloration is due partly to the diet an individual was fed as a hatchling. 
          Red crests indicate the marshfolk is a shaman, and orange and yellow are hunters and warriors. 
          White or pale colored crests are elders and tribal leaders. Females tend to be slightly larger than males 
          (standing just over 6 feet tall), and there are no cultural notions regarding gender roles.</p>
      </div>
    );
  }

  yaunti() {
    return(
      <div>
        <h3>Yaun-Ti</h3>
        <p><span className="race-heading">Pureblood</span>: Believed decedents of those who worshiped, or were otherwise infused with the 
          powers of ancient snake cults.  Purebloods can be born to two otherwise normal looking humans, and as children show few signs 
          of what they are to become. Most who discover their ancestry take great pains to hide it,
          using makeup or minor magic glamors to obscure what few features might appear (which are often snake-like eyes, faint patches of scales and 
          odd colorations). Many times they are rejected by their family and persecuted by society at large when discovered. 
          This can lead to many purebloods embracing their heritage and seeking out the secret 
          societies and snake cults that are believed to exist even to this day.  Purebloods, regardless of their intentions, generally loose their 
          emotions over time, becoming cold as the blood of the snakes themselves. They rarely ever form bonds, viewing others as tools to 
          manipulate in some fashion. As such, many eventually become neutral evil in outlook, but there are those who fight that compulsion.</p>
      </div>
    );
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