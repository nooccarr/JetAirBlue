import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import useScrollTop from './hooks/useScrollTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import DeluxeManhattanCard from '../assets/images/related-deluxe-manhattan-card.jpg';
import MontaukCard from '../assets/images/related-montauk.jpg';
import ClassicManhattanMap from '../assets/images/classic-manhattan-map.jpg';
import { coloredButton, clearButton } from '../utils/Button';
import styles from '../styles/accordion.module.css';
import chevronDown from '../assets/svgs/chevron-down.svg';

const tour = {
  title: 'classic manhattan plane tour',
  duration: '60 Minutes',
  availability: 'Monday-Sunday 10:00am-5:00pm',
  // description: ['Take a flight that you will remember for a lifetime! Departing from the Republic Airport (Farmingdale, LI), the Classic Manhattan Tour begins at the majestic the Statue of Liberty, followed by the world-famous Manhattan Skyline.'],
  // sights: ['Statue of Liberty', 'Ellis Island', 'One World Trade Center', '9/11 Memorial * Battery Park', 'Financial District', 'Empire State Building', 'Chrysler Building', 'Times Square', 'Central Park', 'U.S.S. Intrepid Sea, Air & Space Museum']
  description: [
    'Get ready for an exciting adventure with our Fantastic Manhattan Scenic Flight departing from Long Island Republic Airport in Farmingdale, New York.',
    'As the plane takes off, you\'ll cruise westward over the George Washington Bridge, catching a glimpse of Long Island\'s north coastline. Keep an eye out for the New Jersey Twin Towers on your right, standing tall in the distance. On the left, you\'ll pass the St. Patrick\'s Cathedral, cruise over Central Park, and get a peek at iconic landmarks like the Chrysler Building and the World Trade Center.',
    'Head south over the Hudson River, where you\'ll see JFK Airport, the Verrazano Bridge, and the laid-back vibes of Jones Beach. Finally, we\'ll loop back to Long Island Republic Airport, completing an exhilarating tour that covers all the must-see spots.',
    'This Fantastic Manhattan Scenic Flight is the perfect blend of fun and adventure – so buckle up and get ready for an unforgettable ride over the city that never sleeps!'
  ],
  sights: [
    'George Washington Bridge',
    'New Jersey Twin Towers',
    'St. Patrick\'s Cathedral',
    'Central Park',
    'U.S.S. Intrepid Sea, Air & Space Museum',
    'Times Square',
    'Chrysler Building',
    'Empire State Building',
    'One World Trade Center',
    'Financial District',
    '9/11 Memorial * Battery Park',
    'Statue of Liberty',
    'Ellis Island',
    'Verazzano Bridge',
    'JFK Airport',
    'Jones Beach',
  ]
};

const relatedTours = [
  {
    slug: 'deluxe-manhattan-plane-tour',
    title: 'Deluxe Manhattan Plane Tour',
    description: 'An exciting and comprehensive airplane tour of New York City with breathtaking views and excellent photo opportunities! This extended version of the Classic Tour will treat you to the best views of New York City including the Statue of Liberty, Empire State Building and Central park.',
    image: DeluxeManhattanCard
  },
  {
    slug: 'montauk-plane-tour',
    title: 'Montauk Plane Tour',
    description: 'All aboard for the most spectacular and unforgettable experience of your New York visit! Departing from the Republic Airport (Farmingdale, LI), the Montauk Tour will treat you to the best views of Long Island including the Jones Beach, East Hampton, and Montauk.',
    image: MontaukCard
  }
]

const ClassicManhattanPlaneTour = () => {
  useScrollTop();

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
    <div className='tour-info-section-container'>
      <div className='tour-info-section-quick-details-container'>
        <p className='tour-info-section-title'>quick details</p>
        <ul className='tour-info-section-ul'>
          <li className='tour-info-section-li'>
            <FontAwesomeIcon icon={faClock} />
            <span className='tour-info-section-li-prop'>duration:</span>
            <span>{duration}</span>
          </li>
          <li className='tour-info-section-li'>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span className='tour-info-section-li-prop'>availability:</span>
            <span>{availability}</span>
          </li>
        </ul>
      </div>
      <h3 className='tour-info-section-sighting-title'>Fantastic Manhattan Scenic Flight</h3>
      <div className='tour-info-section-sighting-description-container'>
        {description.map((paragraph, index) => (
          <p className='tour-info-section-sighting-description' key={index}>{`${paragraph}`}</p>
        ))}
      </div>
      <h4 className='tour-info-section-sighting-list-title'>sights include:</h4>
      <ul className='tour-info-section-sighting-list-ul'>
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

  const tourInfoAccordion = (
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

const tourCard = ({ slug, title, description, image }) => (
  <div className='tour-card-container related-tour-card-container' key={title}>
    <div className='tour-card-image-container related-tour-card-image-container'>
      <Link to={`../${slug}`}>
        <img src={image} className='tour-card-image' />
      </Link>
    </div>
    <div className='tour-card-text-container'>
      <div>
        <Link to={`../${slug}`} className='tour-card-title-link'>
          <h4 className='tour-card-title related-tour-card-title'>{title}</h4>
        </Link>
        <p className='tour-card-description related-tour-card-description'>{description}</p>
      </div>
      <div className='tour-card-button-container'>
        {coloredButton('book now')}
        <Link to={`../${slug}`} className='tour-card-button-link'>
          {clearButton('learn more')}
        </Link>
      </div>
    </div>
  </div>
);

const tourCardList = (tours) => (
  <div className='tour-card-list'>
    {tours.map(tour => tourCard(tour))}
  </div>
);

const tourCardSection = (title, tours) => (
  <section className='home-choose-tour-container'>
    <h3 className='home-choose-tour-text related-tour-text'>{title}</h3>
    {tourCardList(tours)}
  </section>
);


  return (
    <main className='page-container'>
      {topImageSection(tour.title)}
      <div className='plane-tour-container'>
        {tourInfoSection(tour)}
        {tourInfoAccordion}
        {tourCardSection('Related Airplane Tours', relatedTours, 'related-tour-card-container')}
      </div>
    </main>
  );
};

export default ClassicManhattanPlaneTour;