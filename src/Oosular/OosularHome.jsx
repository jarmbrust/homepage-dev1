import React from 'react';
import './Oosular.scss';
import {
  Container
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const OosularHome = () => {
    return (
      <div className="oosular-background">
        <Container className="col-md-6">
          <br />
          <h1 className="title">The World of Oosular</h1>
          <h2>The Western Lands of the Continent of Ous</h2>
          <h2>and the Eastern Frontier</h2>
          <p>
            In a time before the Great Reckoning, thousands of years after the fall of the ancient god-kings of Xanotus to
            the Dragon Lords of Tos, fifteen hundred years after the Necromancers of Prentos failed in their bid for immortality
            and were cast down by the Murn'Ator, eight hundred years after the mighty Nokoyan Empire crumbled from within, 
            and almost a century after the last of the barbarian warlords of the Kaza-Groth retreated to the north, 
            the lands of the western edge of the continent of Ous knew some measure of peace...
          </p>
          <p>
            For over two generations of men peace and prosperity spread across the lands.  There were bad years of course, but overall crops prospered, towns sprung up, 
            kingdoms expanded, and cities grew.  Eventually expansion and growing populations did take its toll however and as tensions flared when borders were 
            disputed and the rich lands skirmished over and blood had been shed.  The three great human cities of the region: 
            Aesana, Vrentae, and Rentu, had a fragile truce that had lasted for decades.  But many believed it was only a matter of time before open war broke 
            out and shattered the last 90 years of peace.
          </p>
          <p>
            But the machinations of nobility within the courts of the great cities were little more than gossip and rumor in the frontier.  
            The eastern most edge of the civilized west where the influence of the three great cities was tenuous at best, 
            the frontier was a rugged placed where only the strong and cunning survived and prospered.
          </p>
          <p>
            Lesser nobles, knights, and other minor royalty who were either recklessly ambitious or outcast from the prestigious courts of the west, ruled over
            the tiny fiefdoms of the east.  The staked out claims and their serfs planted crops on ground made rich by the bones of the peoples who
            lived in the great empires of the past.  Lands that were once held by the tribes of the Kaza-Groth who fought against the technomancers of 
            the Nokoyan war machine.  Lands that had, before that been stalked by the Murn'Ator in search of any infidels in the cities of the nine Kingdoms of 
            Kannamos -- infidels who would dare defy their great god.  The last of the "true" dragons flew the skys above these very lands many centuries ago, rising
            on currents of air blowing over the even then ancient tombs of the insane half-demon sorcerers of the Blood Empire.
          </p>
          <p>
            All the history and rumors of artifacts and treasure attracted both treasure hunters and thrill seekers eager to
            delve the debts and brave the risks for fame and fortune.  Many have lost their lives in the attempt, some their very souls.  But just as
            adventurers run think on the frontier, so too do the indentured servants working off debts, peasants following their lords east, and 
            in some places slaves that toil away far from any sympathetic eyes and western antislavery laws.
          </p>
          <p>
            In a caravan to Serrato, a place otherwise known as "The Last Keep", adventurers are huddled against the pouring rain.  Sitting in the back of
            an open cart, they look to the east in the hopes of finding fame, fortune, or just a chance to start a new life on the frontier.
          </p>
        </Container>
      </div>
    );
}
  
export default OosularHome;
