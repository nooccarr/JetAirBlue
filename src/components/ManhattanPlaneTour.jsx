import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import TourCards from '../utils/TourCards';
import ManhattanDeluxeCard from '../assets/images/manhattan-card-2.jpg';
import MontaukCard from '../assets/images/montauk-card-1.jpg';
import ClassicManhattanMap from '../assets/images/classic-manhattan-map.jpg';
import styles from '../styles/accordion.module.css';
import chevronDown from '../assets/svgs/chevron-down.svg';

const tour = {
  title: 'classic manhattan plane tour',
  duration: '12-15 Minutes',
  availability: 'Monday-Saturday 9:30am-6:30pm',
  description: 'Take a flight that you will remember for a lifetime! Departing from the Downtown Manhattan Heliport, the Classic Manhattan Tour begins at the majestic the Statue of Liberty, followed by the world-famous Manhattan Skyline.',
  sights: ['Statue of Liberty', 'Ellis Island', 'Financial District', 'One World Trade Center', '9/11 Memorial * Battery Park', 'Empire State Building', 'Chrysler Building', 'Central Park', 'U.S.S. Intrepid Sea', 'Air & Space Museum', 'George Washington Bridge', 'Brooklyn Bridge', 'Times Square', 'Yankee Stadium']
};

const relatedTours = [
  {
    title: 'Deluxe Manhattan Plane Tour',
    description: 'An exciting and comprehensive helicopter tour of New York City with breathtaking views and excellent photo opportunities! This extended version of the Classic Tour will treat you to the best views of New York City including the Statue of Liberty, Empire State Building and Central park.',
    image: ManhattanDeluxeCard
  },
    {
    title: 'Montauk Plane Tour',
    description: 'An exciting and comprehensive helicopter tour of New York City with breathtaking views and excellent photo opportunities! This extended version of the Classic Tour will treat you to the best views of New York City including the Statue of Liberty, Empire State Building and Central park.',
    image: MontaukCard
  }
]

const ManhattanPlaneTour = () => {


  const topImageSection = (title) => (
    <div className='tour-main-image-container'>
      <section className='tour-main-image'>
        <div className='tour-main-image-caption-container'>
          <h1 className='tour-main-image-caption-title'>{title}</h1>
        </div>
      </section>
    </div>
  );

  const tourInfoSection = ({ duration, availability, description, sights }) => (
    <div>
      <div>
        <p>quick details</p>
        <li>
          <span>duration:</span>
          <span>{duration}</span>
        </li>
        <li>
          <span>availability:</span>
          <span>{availability}</span>
        </li>
      </div>
      <h3>The Ride of a Lifetime</h3>
      <div>
        <p>{description}</p>
      </div>
      <h4>sights include:</h4>
      <ul>
        {sights.map(sight => <li key={sight}>{sight}</li>)}
      </ul>
    </div>
  );

  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
        </>
      }
      // className={styles.item}
      className={({ isEnter }) => `${styles.item} ${isEnter && styles.itemExpanded}`}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );

  const tourInfoAccordion = () => (
    <div className={styles.info}>
      <Accordion transition transitionTimeout={250}>
        <AccordionItem header='Airplane Route'>
          <img src={ClassicManhattanMap} />
        </AccordionItem>
        <AccordionItem header='Policy Information, Disclaimers, & Airport Fees'>
          *Pricing is per seat. There’s an additional $40 per person heliport fee due at check-in. Cancellations made within 24 hours of the scheduled departure time as well as no-shows will incur 100% of tour charges. Please contact Manhattan Helicopters at least 24 hours in advance and we will re-schedule your tour at no cost. Late arrivals will be addressed on a case-by-case basis depending on seating and aircraft availability. Reservations made at the heliport forfeit their right to cancel after payment has been made. The maximum weight is 300 pounds (136 kilograms) per passenger. Passengers weighing over 250lbs, or 113 kg must purchase an additional seat. The scheduled duration of our tours may vary based on flight routing and weather conditions.
          <br/>
          <br/>
          Manhattan Helicopters reserves the right to amend the flight paths without notice. Flight routes will be altered during Yankee home games to avoid restricted airspace. All passengers must pass a metal detector and present a government-issued ID for security purposes. Prices are subject to change without notice. Management reserves the right to refuse boarding to a passenger or to upgrade passengers at any time. Manhattan Helicopters reserves the right to alter or terminate any flights due to security maintenance, aircraft availability, emergencies, weather, or acts of God.
          <br/>
          <br/>
          Narrated audio language selection is not guaranteed and is based on availability. Should more than 2 languages be requested on the same flight, the audio commentary may default to English. Due to the unpredictable nature of technical difficulties, we cannot provide assurance for the audio functionality of the headsets.
        </AccordionItem>
      </Accordion>
    </div>
  );

  return (
    <main className='page-container'>
      {topImageSection(tour.title)}
      <div className='plane-tour-container'>
        {tourInfoSection(tour)}
        {tourInfoAccordion()}
        <TourCards title={'Related Airplane Tours'} tours={relatedTours} classname={'related-tour-card-container'} />
      </div>
    </main>
  );
};

export default ManhattanPlaneTour;