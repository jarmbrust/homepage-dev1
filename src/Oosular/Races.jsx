import React from 'react';
import './Oosular.scss';
import {
  UncontrolledTooltip,
  Container
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Races = (props) => {
  return (
    <div className="oosular-background">
      <Container className="col-md-6">
        {raceDescription(props.race)}
      </Container>
    </div>
  );
}
  
function raceDescription(race) {
  switch(race) {
    case 'Human':
      return humans();
    case 'Elf':
      return elves();
    case 'Dwarf':
      return dwarves();
    case 'Halfling':
      return halflings();
    case 'Tiefling':
      return tieflings();
    case 'Orc':
      return orcs();
    case 'Goblinoid':
      return goblinoids();
    case 'Lizardfolk':
      return lizardfolk();
    case 'Yaun-Ti':
      return yaunti();
    default:
      return '';
  }
}

function humans() {
  return (
    <div><h3>Humans</h3>
      <p><span style={{textDecoration: "underline", color:"blue"}} href="#" id="humantooltip">*Gameplay Note*</span></p>
      <UncontrolledTooltip placement="right" target="humantooltip">
        All human PCs use the variant rules from the PHB: +1 to 2 ability scores of your choice,
        one extra skill proficiency, and one starting feat.
      </UncontrolledTooltip>
      <p><span className="race-heading">Nokos</span>: The decedents of the humans who made up the original Nokoyan empire.  The empire
        fell centuries ago but the people endure and can be found most places there are humans.  They generally have light to medium skin 
        tones and darker hair and eyes.  They don't have a distinctive culture having appropriated much
        throughout the years, but some worship a pantheon of three gods, otherwise known just as The Trinity.  Nokoyans have a
        cultural tradition of wearing makeup around their eyes, a tradition very common with the females but most men
        practice it too.  They tend as a culture to be quite religious since the fall of their empire, and
        from their people come some of the most powerful clerics and paladins.
      </p>
      <p><span className="race-heading">Tarok</span>: A fair skinned people who live in the northern portions of the continent, 
        and tribes of them still inhabit parts of the frontier.  The most famous, or infamous, of them are the tribes of the
        Kaza-Groth who dominated the lands of the frontier for centuries with their perpetual wars, until the last of the 
        great tribes migrated north just over a century ago.  The Tarok, and especially the Kaza-Groth, value strength and courage and venerate
        the scars they gained in battle or those applied via sacred rituals.  Their valuation of strength goes so far that some tribes have
        interbred with orcs, seeking to gain the orc might and ferocity in battle.  As a result, most in-game half-orcs
        are of Tarok ancestry.
        </p>
      <p><span className="race-heading">Ven</span>: A darker skinned people whom originally came from beyond the western sea and settled 
        in the south most portion of the western lands.  They speak the language of the Ven as well as the common tongue of the western lands,
        and they brought with them a lunar-based religion with nine gods, one for each moon. Each is worshiped on their respective months. 
        They have customs which elevate intelligence, craftiness, and the practice of the arcane arts.
        As a result, many wizards and eldrich knights hail from this group of people.  Most Ven wear their hair short or shave their heads,
        a practice common even among their women. They also tend to be fond of jewelry and Ven of both genders wear bracelets,
        earings, and various body piercings.
      </p>
    </div> 
  );
}

function elves() {
  return (
    <div>
      <h3>Elves</h3>
      <p><span className="race-heading">High Elves</span>: Claim to be the oldest and most "pure" elves, and to have
        once had an empire long ago that was greater than the Nokoyan.  They have very light to almost albino skin tones,
        hair that ranges from light blond, light blue, or white, and eye colors that often are gold, 
        but can be silver, violet, or pale blue. They tend to be quite slim and stand on average around six and a half feet tall and,
        having no population center of their own, are often found are scattered around in enclaves usually in human cities.
        They are seen as highly intelligent, eccentric, and often appear aloof to non-high elves.  These elves are also the longest lived 
        of any known mortal humanoid (making it into their 5th, and on rare cases even 8th centuries), but are prone to in-breeding 
        (and all the fun traits that come from that) due to their low numbers and birth rates.  They speak the high-elven 
        dialect as well as some regional languages. Most have at least some training in magic and often serve as advisors to kings.
        Those that hold to a religion usually revere what they call The Source -- the origin of all things magical.
      </p>
      <p><span className="race-heading">Wood Elves</span>: Range from light to medium skin tones with hair from blond, brown, red, black and green. 
        They are slim of build and seldom stand much over five feet tall.  Some trade and intermix with human communities, 
        although some tribes (often coined "wild elves") take a more xenophobic approach to outsiders and stay secluded in their forests.
        They rarely tattoo themselves, but love elaborate semi-permanent body paint worn by both males and females.
        They can live into their 3rd century and speak the wood elf dialect as well as some regional languages.
        Culturally they don't revere any specific gods, but follow the teachings of their druids.
      </p>
      <p><span className="race-heading">Half Elves</span>: Almost always of wood elf decent, they have a mixture of their parents' traits. 
        They are generally accepted in most human communities although their level of acceptance can vary widely amongst the elves. 
        High elf half-breeds are very rare (almost non-existent) and viewed as pariahs amongst the elves.
        Half-elves don't really have a distinctive culture, usually adopting either the elven or human culture they were raised in. 
        They generally live for about a century and a half.
      </p>
    </div>
  );
}

function dwarves() {
  return(
    <div>
      <h3>Dwarves</h3>
      <p><span className="race-heading">Hill Dwarves</span>: Most populous of the dwarves who mix with the human nations, 
        they have medium to darker skin tones, dark red, black, grey, and dark blue hair is common. Men will always have beards unless a convicted 
        criminal or outcast (or insane). Women generally grow their hair long and usually in intricate traditional braids.  Tattoos are very common, 
        and often tell a story about the clan the dwarf is from. Body piercings of fine jewelry are common to those that can afford it. 
        They stand just over four feed tall on average.  As a people they worship one god, Tornoc, as creator and protector.  Some (but not all) 
        go so far as to decry all other gods as false and can react quite negatively to priests and clerics of other religions.
        Clerics to Tornoc often see it as a right of passage to travel the world some before returning to their clans to teach and worship.</p>
      <p><span className="race-heading">Mountain Dwarves</span>: Slightly taller and fairer skinned then their hill dwarf cousins, 
        with blond, black, red, or brown hair coloring, the mountain dwarves tend to stay in their mountains and are content to have minimal 
        trade with outsiders as long as their lands and mines are left alone. Adventuring mountain dwarves are almost always outcasts or 
        disgraced in some manner.  Most follow an ancient practice of elemental worship (usually the elements of earth and fire 
        take prominence), which often brings them into conflict with their hill dwarf cousins.</p>
    </div>
  );
}

function halflings() {
  return(
    <div>
      <h3>Halflings</h3>
      <p><span className="race-heading">Lightfoot</span>: Standing around three feet tall they are amongst the smallest of the PC races.  
        They are generally fair skinned with darker hair colors.  Not necessarily slim, but they do often tend to be fairly lean and well 
        toned for their size.  Often found as merchants and traders, they also as a people they tend to travel a lot.  Those that
        are older and wealthy usually settle down and grow fat. They are looked at with envy and respect by the community.
        Tattooing the left arm, sometimes fully from wrist to shoulder, is common, but rarely do they mark any other place on their bodies.
        They usually tend to be meh on the whole religion thing, accepting healing and aid from priests and clerics without qualm, and sometimes
        listening politely to their sermons if need be, but very rarely worshiping anything themselves.  Halfling clerics or paladins are
        extremely rare.  They tend instead to see the world, and life in general, as a place to enjoy good company and good food, and endeavor
        become as prosperous and comfortable as possible.  Some take it a step farter though and live a hedonistic lifestyle enjoying 
        any and all forms of pleasure they can afford.</p>
      <p>Adventurers and thrill-seekers are not uncommon among the younger halflings, and even some of the more "mature" types, but generally
        speaking if a halfling has the means to retire in comfort they tend to do so.
      </p>
      <p><span className="race-heading">Stout</span>: Tend to be stockier and darker then their cousins, and are usually 
        found in mountain dwarf communities.  They are rarely seen outside their communities, as a culture they are not much for 
        exploration or adventure. They usually follow the same elemental worship as their the Mountain Dwarves allies.</p>
    </div>
  );
}

function tieflings() {
  return(
    <div>
      <h3>Tieflings</h3>
      <p><span className="race-heading">Demonic</span>: Standing about the height and weight of the average human, with appearances as described
        in the PHB, they are the decedents of those with demonic blood.  Some claim to be able to traced their bloodlines back
        over 3500 years to the time of the Blood Empire, ruled as it was by the cabal of half-demon sorcerers. Some take pride in their
        ancestry, but many reject the demonic heritage, seeing it as a corruption they must overcome. Those who embrace it are not necessarily evil, 
        but tend to be, and are rarely ever of a good alignment. Some of those who embrace it go so far as to worship their demonic parentage,
        maybe even becoming a leader or founder of a cult to their demonic ancestor.  The bad reputation tieflings tend to have is one of the reasons 
        they to be feared and distrusted by the common folk.
      </p>
      <p><span className="race-heading">Infernal</span>: Often resulting when someone forms a pact with one of the Lords of Hell, 
        they have fully embraced what they have become and are almost always evil, seeking to reek destruction, domination, 
        and oppression wherever they go. Many are warlocks or paladins with an oath of ______.
      </p>
    </div>
  );
}

function orcs() {
  return(
    <div>
      <h3>Orcs</h3>
      <p><span className="race-heading" style={{textDecoration: "underline", color:"blue"}} href="#" id="orctooltip">Orcs</span>: Orc culture 
        is violent and brutal, and very similar to what is outlined in the books. Orc tribes dominate parts of the frontier, and are
        a threat to any who venture too far off the beaten path.  Orcs worship the savage spirits of ancestors, and orc clerics 
        harness these chaotic spirits to use their powers to smite those who would oppose the orcs.
      </p>
      <p><span className="race-heading">Half-Orcs</span>: 
        Decedents of humans who have interbred or been interbred with orcs.  Most half-orcs are of Tarok ancestry as those 
        human tribes intentionally interbred with their orc neighbors in an attempt to gain the orc strength and ferocity in their tribe.
        PC orcs could be barbarians of those tribes or have been born on the frontier in other human communities.  It is unlikely that 
        any half-orcs born in the orc tribes could be PC's due to the orc chaotic evil nature.
      </p>
      <UncontrolledTooltip placement="right" target="orctooltip">
        Orcs are not likely to be allowed as PC's due to their redundancy with half-orcs, and the strong and savage chaotic evil nature of orcs.
        Exceptions might be allowed for a good backstory, but that will be on a case by case basis.
      </UncontrolledTooltip>
      {/* <UncontrolledTooltip placement="right" target="halforctooltip">
        See orc tooltip above.  Plus, if orcs are allowed as PC's then chances that half-orcs will exist as a race are slim since it would be
        somewhat redundant.
      </UncontrolledTooltip> */}
    </div>
  );
}

function goblinoids() {
  return(
    <div>
      <h3>Goblinoids</h3>
      <p><span className="race-heading">Hobgoblins</span>:&nbsp;Standing nearly as tall as an average human, with lean and strong builds,
        yellowish/orange skin tones, and dark hair, hobgoblins come from a violent and oppressive culture.  Brutally raised
        from childhood in the service of the hobgoblin empire of Toulk and it's semi-divine emperor, hobgoblins have 
        a grim and determined outlook on life.  Their culture teaches that conflict and strife are the crucible that
        forges the ultimate hobgoblin warrior, and they have this credo beaten into them as children.  Organized, brutal, and cunning, 
        hobgoblins seek out challenge and battle to test themselves and their limits.  Hobgoblins worship their god-emperor who is said to have 
        ruled them for the last 400 years. All other religion is forbidden and they seek to bring all peoples under the dominion of the emperor.
        The empire is located to the southeast of the frontier and it is not uncommon to run into hobgoblin patrols.</p>
      <p>PC hobgoblins are either from a decimated and disgraced legion, outcasts of the
        empire, or soldiers of fortune seeking fame and infamy. Due to the way they were raised, hobgoblins are pretty much
        always lawful and (almost) always evil.  Players have more flexibility in alignment, but *probably* should at least be lawful.
      </p>
      <p><span className="race-heading">Goblins</span>:&nbsp;
        Wiry, cunning, and mischievous (with the ability to breed almost like rabbits), goblins are viewed far and wide as dangerous pests. 
        Rarely are they allowed in many of the more
        civilized locals, and when they are they are watched like hawks. It is not uncommon for more remote townships to offer bounties
        for goblin kills (usually they accept pairs of ears as proof of kill).  Goblins can be found in almost any location, and are often raised
        in warren-like lairs where the largest and strongest bully and torment the smaller ones.  Children are many times kept in cages or pens 
        until they are old enough to be useful and fend for themselves. Goblins raised in the hobgoblin empire follow the god-emperor, 
        other "wild goblins" usually follow a loose form of dark shamanism
        based around appeasing and enslaving evil spirits.
      </p>
      <p>PC goblins are rare and often have trouble getting into many civilized places. Sometimes in bigger cities they can blend 
        into the crowd and therefore are often are not harassed... much.  But, generally they will have to get used to always being suspect.
      </p>
      <p><span className="race-heading">Bugbears</span>:&nbsp;
        Standing from 6 to 8 feet tall, bugbears are big, strong, and mean. Ambush predators and raiders, bugbears are found in small groups or
        hired out as muscle for other races.  Bugbears don't form much in the way of family attachments, and children are cared for by their 
        mothers until they are abandoned as soon as they can fend for themselves.  Occasionally they are bred and trained as shock troops
        by hobgoblins, when their chaotic nature can be suppressed or harnessed for effect.</p>
      <p>PC bugbears have some of the same issues as goblins getting into civilized places usually because of their reputation as marauders and
        chaotic killers.  Often though they can hire themselves out as muscle, bodyguards, or mercenaries.  Bugbears don't have much in the way
        of gods. Most out in the world live in small groups and don't bother with such things.  Those that live amongst other races
        sometimes adopt their gods, but only in so far as they are useful to the bugbear, otherwise, again, they don't bother.
      </p>
    </div>
  );
}

function lizardfolk() {
  return(
    <div>
      <h3>Lizardfolk</h3>
      <p><span className="race-heading">Swampfolk</span>: Dark green scales and a multi-color crest on the head identifies 
        the swampfolk.  Generally xenophobic and hostile to outsiders, the tribes of the southern swamps usually keep to
        themselves, only making their presence known (often violently) when someone trespasses their territory. 
        Otherwise they are very similar to marshfolk (see below) except that their multicolor fins do not appear
        to designate a role in the tribe.</p>
      <p><span className="race-heading">Marshfolk</span>: More likely to trade with outsiders than their swamp-dwelling
        cousins, the marshfolk scales are generally a brownish-green in coloration, and have either an orange, yellow, or bright red
        crest. This fin on the top of their heads and back of their neck identifies their role in marshfolk society
        as it's coloration is due to the diet an individual was fed as a hatchling. 
        Red crests indicate the marshfolk is a shaman, and orange and yellow are hunters and warriors. 
        White or pale colored crests are elders and tribal leaders (as the coloring of the fins pales with age). 
        Females tend to be slightly larger than males (standing six and a half feet tall on average), 
        and there are no cultural notions regarding gender roles. Their religion is a form of shamanistic ancestor worship
        which all lizardfolk follow (except for those that might have been raised outside the tribes). They are egg-laying,
        but "warm blooded" in the sense that cold weather does not have much more of an adverse affect on them as it 
        would the average human.  Although they do tend to be a little more lethargic in cold weather.</p>
      <p>Marshfolk PC's are usually those who come from a decimated tribe, or have a curiosity about the outside world
        and decide to strike out for a time.
      </p>
    </div>
  );
}

function yaunti() {
  return(
    <div>
      <h3>Yaun-Ti</h3>
      <p><span className="race-heading" style={{textDecoration: "underline", color:"blue"}} href="#" id="yauntitooltip">Pureblood</span>: Believed 
        decedents of those who worshiped, or were otherwise infused with the powers of ancient snake cults. This taint in the human
        bloodlines goes back farther than recorded history. Purebloods can be born to two otherwise normal looking humans, and as children show few signs 
        of what they are to become. Most who discover their ancestry take great pains to hide it,
        using makeup or minor magic glamors to obscure what few features might appear (which are often snake-like eyes, faint patches of scales and 
        odd colorations and sometimes baldness). Many times they are rejected by their family and persecuted by society at large when discovered. 
        This can lead to many purebloods embracing their heritage and seeking out the secret 
        societies and snake cults that are believed to exist even to this day.</p>
        <p>Purebloods, regardless of their intentions, generally loose their 
        emotions over time, becoming cold as the blood of the snakes themselves. They rarely ever form bonds, viewing others as tools to 
        manipulate in some fashion. As such, many eventually become neutral evil in outlook, but there are those who fight that compulsion.</p>
        <UncontrolledTooltip placement="right" target="yauntitooltip">
          Since there is some overlap with Tieflings regarding how Yaun-Ti are laid out, I *may* not include them as a PC race. I'm
          still undecided as of this writing.
        </UncontrolledTooltip>
    </div>
  );
}

export default Races;
