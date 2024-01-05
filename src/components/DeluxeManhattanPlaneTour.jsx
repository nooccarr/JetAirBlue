import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import ClassicManhattanCard from '../assets/images/related-classic-manhattan-card.jpg';
import VipManhattanCard from '../assets/images/related-vip-manhattan-card.jpg';
import ClassicManhattanMap from '../assets/images/classic-manhattan-map.jpg';
import { coloredButton, clearButton } from '../utils/Button';
import styles from '../styles/accordion.module.css';
import chevronDown from '../assets/svgs/chevron-down.svg';

const tour = {
  title: 'deluxe manhattan plane tour',
  duration: '60 Minutes',
  availability: 'Monday-Sunday 10:00am-5:00pm',
  description: ['An exciting and comprehensive airplane tour of New York City with breathtaking views and excellent photo opportunities! This extended version of the Classic Tour will treat you to the best views of New York City including the Statue of Liberty, Empire State Building and Central park.', 'In addition to several must-see attractions, passengers will enjoy a flight over historic Uptown Manhattan (Columbia University & Harlem) and The Bronx (Yankee Stadium). Consider upgrading from the Classic Tour and you’ll know New York better than a native!'],
  sights: ['Statue of Liberty', 'Ellis Island', 'One World Trade Center', '9/11 Memorial', 'Battery Park', 'Financial District', 'Empire State Building', 'Chrysler Building', 'Times Square', 'Central Park', 'U.S.S. Intrepid Sea, Air & Space Museum', 'Grant’s Tomb', 'Columbia University', 'George Washington Bridge', 'Harlem', 'Spuyten Duyvil Bridge', 'Palisades Cliff']
};

const relatedTours = [
  {
    title: 'Classic Manhattan Plane Tour',
    description: 'Take a flight that you will remember for a lifetime! Departing from the Republic Airport (Farmingdale, LI), the Classic Manhattan Tour begins at the majestic the Statue of Liberty, followed by the world-famous Manhattan Skyline.',
    image: ClassicManhattanCard
  },
    {
    title: 'VIP Manhattan Plane Tour',
    description: 'All aboard for the most spectacular and unforgettable experience of your New York visit! With the extended route and approximately 60-minute duration, you’ll be sure to feel like a VIP on the VIP Tour!',
    image: VipManhattanCard
  }
];

const DeluxeManhattanPlaneTour = () => {
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
      <h3 className='tour-info-section-sighting-title'>An Extended Trip Over the Skyline</h3>
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

const tourCard = ({ title, description, image }) => (
  <div className='tour-card-container related-tour-card-container' key={title}>
    <div className='tour-card-image-container related-tour-card-image-container'>
      <img src={image} className='tour-card-image' />
    </div>
    <div className='tour-card-text-container'>
      <div>
        <h4 className='tour-card-title related-tour-card-title'>{title}</h4>
        <p className='tour-card-description related-tour-card-description'>{description}</p>
      </div>
      <div className='tour-card-button-container'>
        {coloredButton('book now')}
        {clearButton('learn more')}
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

export default DeluxeManhattanPlaneTour;