import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import useScrollTop from './hooks/useScrollTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faCalendarAlt,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import DeluxeManhattanCard from '../assets/images/related-deluxe-manhattan-card.jpg';
import MontaukCard from '../assets/images/related-montauk.jpg';
import ClassicManhattanRoute from '../assets/videos/classic-manhattan-route.mp4';
import ClassicManhattanRoutePoster from '../assets/images/posters/classic-manhattan-route.jpg';
import { coloredButton, clearButton } from '../utils/Button';
import styles from '../styles/accordion.module.css';
import chevronDown from '../assets/svgs/chevron-down.svg';
import { FormattedMessage } from 'react-intl';

const tour = {
  title: 'Classic Manhattan Plane Tour',
  duration: '60 Minutes',
  availability: 'Monday-Sunday 10:00am-5:00pm',
  fare: '$250 per person',
  // description: ['Take a flight that you will remember for a lifetime! Departing from the Republic Airport (Farmingdale, LI), the Classic Manhattan Tour begins at the majestic the Statue of Liberty, followed by the world-famous Manhattan Skyline.'],
  // sights: ['Statue of Liberty', 'Ellis Island', 'One World Trade Center', '9/11 Memorial * Battery Park', 'Financial District', 'Empire State Building', 'Chrysler Building', 'Times Square', 'Central Park', 'U.S.S. Intrepid Sea, Air & Space Museum']
  description: [
    'Get ready for an exciting adventure with our Fantastic Manhattan Scenic Flight departing from Long Island Republic Airport in Farmingdale, New York.',
    "As the plane takes off, you'll cruise westward over the George Washington Bridge, catching a glimpse of Long Island's north coastline. Keep an eye out for the New Jersey Twin Towers on your right, standing tall in the distance. On the left, you'll pass the St. Patrick's Cathedral, cruise over Central Park, and get a peek at iconic landmarks like the Chrysler Building and the World Trade Center.",
    "Head south over the Hudson River, where you'll see JFK Airport, the Verrazano Bridge, and the laid-back vibes of Jones Beach. Finally, we'll loop back to Long Island Republic Airport, completing an exhilarating tour that covers all the must-see spots.",
    'This Fantastic Manhattan Scenic Flight is the perfect blend of fun and adventure – so buckle up and get ready for an unforgettable ride over the city that never sleeps!',
  ],
  sights: [
    'George Washington Bridge',
    'New Jersey Twin Towers',
    "St. Patrick's Cathedral",
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
  ],
};

const relatedTours = [
  {
    slug: 'deluxe-manhattan-plane-tour',
    title: 'Deluxe Manhattan Plane Tour',
    description:
      'Experience the captivating Manhattan and Montauk Scenic Tour, a seamless blend of the Classic Manhattan Plane Tour and the enchanting Montauk Plane Tour. This fusion tour promises an unforgettable experience, seamlessly blending the magic of Manhattan with the coastal charm of Montauk. Discover the best of both worlds on the Manhattan and Montauk Scenic Tour.',
    image: DeluxeManhattanCard,
  },
  {
    slug: 'montauk-plane-tour',
    title: 'Montauk Plane Tour',
    description:
      'Explore the Montauk Scenic Flight, a coastal journey of unparalleled beauty. Gracefully circling the iconic Montauk Lighthouse, stand against the coastal backdrop, and marvel at the natural wonders. Glide over charming landscapes, catch glimpses of coastal allure, and experience the enchanting aerial beauty of the eastern end of New York.',
    image: MontaukCard,
  },
];

const ClassicManhattanPlaneTour = () => {
  useScrollTop();

  const topImageSection = (title) => (
    <div className="h-[232px] md:h-[357px]">
      <section className="tour-main-image animate-fadeIn">
        <div className="tour-main-image-caption-container">
          <h1 className="tour-main-image-caption-title text-center text-3xl md:text-6xl">
            {title}
          </h1>
        </div>
      </section>
    </div>
  );

  const tourInfoSection = ({
    title,
    duration,
    availability,
    fare,
    description,
    sights,
  }) => (
    <div className="tour-info-section-container">
      <div className="tour-info-section-quick-details-container">
        <p className="tour-info-section-title">
          <FormattedMessage
            id="tour.quick-details.title"
            defaultMessage="quick details"
          />
        </p>
        <ul className="tour-info-section-ul">
          <li className="tour-info-section-li">
            <FontAwesomeIcon icon={faClock} />
            <span className="tour-info-section-li-prop">
              <FormattedMessage
                id="tour.quick-details.duration"
                defaultMessage="duration:"
              />
            </span>
            <span>
              <FormattedMessage
                id={`tour.${title}.duration`}
                defaultMessage={duration}
              />
            </span>
          </li>
          <li className="tour-info-section-li">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span className="tour-info-section-li-prop">
              <FormattedMessage
                id="tour.quick-details.availability"
                defaultMessage="availability:"
              />
            </span>
            <span>
              <FormattedMessage
                id={`tour.${title}.availability`}
                defaultMessage={availability}
              />
            </span>
          </li>
          <li className="tour-info-section-li">
            <FontAwesomeIcon icon={faCoins} />
            <span className="tour-info-section-li-prop">
              <FormattedMessage
                id="tour.quick-details.fare"
                defaultMessage="fare:"
              />
            </span>
            <span>
              <FormattedMessage
                id={`tour.${title}.fare`}
                defaultMessage={fare}
              />
            </span>
          </li>
        </ul>
      </div>
      <h3 className="tour-info-section-sighting-title">
        <FormattedMessage
          id={`tour.${title}.sighting-title`}
          defaultMessage="Fantastic Manhattan Scenic Flight"
        />
      </h3>
      <div className="tour-info-section-sighting-description-container">
        {description.map((paragraph, index) => (
          <p className="tour-info-section-sighting-description" key={index}>
            <FormattedMessage
              id={`tour.${title}.full-description-${index}`}
              defaultMessage={paragraph}
            />
          </p>
        ))}
      </div>
      <h4 className="tour-info-section-sighting-list-title">
        <FormattedMessage
          id="tour.sights-list.title"
          defaultMessage="sights include"
        />
      </h4>
      <ul className="tour-info-section-sighting-list-ul marker:text-black list-disc pl-5 space-y-3">
        {sights.map((sight, index) => (
          <li key={index}>
            <FormattedMessage
              id={`tour.${title}.sights-list-${index}`}
              defaultMessage={sight}
            />
          </li>
        ))}
      </ul>
    </div>
  );

  const tourFlightGuide = (
    <ul className="tour-accordion-ul">
      <li className="tour-accordion-li">
        <strong className="tour-accordion-strong">
          <FormattedMessage
            id="tour.accordion-item-1.answer-0.title"
            defaultMessage="Check-in"
          />
        </strong>
        <p className="tour-accordion-p">
          <FormattedMessage
            id="tour.accordion-item-1.answer-0.description-0"
            defaultMessage="Arrive at the departure point at least 45 minutes before your scheduled tour."
          />
        </p>
        <p className="tour-accordion-p">
          <FormattedMessage
            id="tour.accordion-item-1.answer-0.description-1"
            defaultMessage="All passengers must present a valid photo ID."
          />
        </p>
      </li>
      <li className="tour-accordion-li">
        <strong className="tour-accordion-strong">
          <FormattedMessage
            id="tour.accordion-item-1.answer-1.title"
            defaultMessage="Safety Rules"
          />
        </strong>
        <p className="tour-accordion-p">
          <FormattedMessage
            id="tour.accordion-item-1.answer-1.description-0"
            defaultMessage="A mandatory safety briefing will be conducted before the flight. Follow all instructions provided by our experienced flight crew."
          />
        </p>
      </li>
      <li className="tour-accordion-li">
        <strong className="tour-accordion-strong">
          <FormattedMessage
            id="tour.accordion-item-1.answer-2.title"
            defaultMessage="Flight Conditions"
          />
        </strong>
        <p className="tour-accordion-p">
          <FormattedMessage
            id="tour.accordion-item-1.answer-2.description-0"
            defaultMessage="Tours are subject to weather conditions. In case of cancellations, we'll work with you to reschedule or provide a refund."
          />
        </p>
      </li>
      <li className="tour-accordion-li">
        <strong className="tour-accordion-strong">
          <FormattedMessage
            id="tour.accordion-item-1.answer-3.title"
            defaultMessage="Cancellation Policy"
          />
        </strong>
        <p className="tour-accordion-p">
          <FormattedMessage
            id="tour.accordion-item-1.answer-3.description-0"
            defaultMessage="Please cancel your reservation at least 48 hours in advance.."
          />
        </p>
        <p className="tour-accordion-p">
          <FormattedMessage
            id="tour.accordion-item-1.answer-3.description-1"
            defaultMessage="Cancellations must be made 24 hours in advance for a full refund."
          />
        </p>
      </li>
      <li className="tour-accordion-li">
        <strong className="tour-accordion-strong">
          <FormattedMessage
            id="tour.accordion-item-1.answer-4.title"
            defaultMessage="Attire"
          />
        </strong>
        <p className="tour-accordion-p">
          <FormattedMessage
            id="tour.accordion-item-1.answer-4.description-0"
            defaultMessage="Considering the weather conditions on the day of the tour, please dress comfortably and refrain from bringing heavy luggage."
          />
        </p>
      </li>
      <li className="tour-accordion-li">
        <strong className="tour-accordion-strong">
          <FormattedMessage
            id="tour.accordion-item-1.answer-5.title"
            defaultMessage="Photography and Devices"
          />
        </strong>
        <p className="tour-accordion-p">
          <FormattedMessage
            id="tour.accordion-item-1.answer-5.description-0"
            defaultMessage="You may bring your camera or smartphone to take photos and videos during the tour. Please follow crew instructions regarding device usage."
          />
        </p>
      </li>
      <li className="tour-accordion-li">
        <strong className="tour-accordion-strong">
          <FormattedMessage
            id="tour.accordion-item-1.answer-6.title"
            defaultMessage="Route"
          />
        </strong>

        <p className="tour-accordion-p">
          <FormattedMessage
            id="tour.accordion-item-1.answer-6.description-0"
            defaultMessage="We recommend reaching Republic Airport by taxi or car. It takes approximately 40 minutes from Flushing and one hour from Manhattan."
          />
        </p>
      </li>
      <li className="tour-accordion-li">
        <strong className="tour-accordion-strong">
          <FormattedMessage
            id="tour.accordion-item-1.answer-7.title"
            defaultMessage="Enjoy the Experience"
          />
        </strong>
        <p className="tour-accordion-p">
          <FormattedMessage
            id="tour.accordion-item-1.answer-7.description-0"
            defaultMessage="Relax, enjoy the breathtaking views, and make memories!"
          />
        </p>
        <p className="tour-accordion-p">
          <FormattedMessage
            id="tour.accordion-item-1.answer-7.description-1"
            defaultMessage="For any additional information or assistance, feel free to contact our customer service team. Thank you for choosing our scenic flight experience."
          />
        </p>
      </li>
    </ul>
  );

  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <img
            className={styles.chevron}
            src={chevronDown}
            alt="Chevron Down"
          />
        </>
      }
      // className={styles.item}
      className={({ isEnter }) =>
        `${styles.item} ${isEnter && styles.itemExpanded}`
      }
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );

  const tourInfoAccordion = (
    <div className={styles.info}>
      <Accordion transition transitionTimeout={250}>
        <AccordionItem
          header={
            <FormattedMessage
              id="tour.accordion-item-0.question"
              defaultMessage="Airplane Route"
            />
          }
        >
          <video
            width="100%"
            height="auto"
            controls
            poster={ClassicManhattanRoutePoster}
          >
            <source src={ClassicManhattanRoute} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </AccordionItem>
        <AccordionItem
          header={
            <FormattedMessage
              id="tour.accordion-item-1.question"
              defaultMessage="Policy Information, Disclaimers, & Airport Fees"
            />
          }
        >
          {tourFlightGuide}
        </AccordionItem>
      </Accordion>
    </div>
  );

  const tourCard = ({ slug, title, description, image }) => (
    <div
      className="tour-card-container related-tour-card-container flex flex-col justify-between"
      key={title}
    >
      <div>
        <div className="tour-card-image-container related-tour-card-image-container">
          <Link to={`../${slug}`}>
            <img src={image} className="tour-card-image" />
          </Link>
        </div>
        <div className="tour-card-text-container">
          <div>
            <Link to={`../${slug}`} className="tour-card-title-link">
              <h4 className="tour-card-title related-tour-card-title">
                <FormattedMessage
                  id={`tour.${title}.title`}
                  defaultMessage={title}
                />
              </h4>
            </Link>
            <p className="tour-card-description related-tour-card-description">
              <FormattedMessage
                id={`tour.${title}.description`}
                defaultMessage={description}
              />
            </p>
          </div>
        </div>
        <div className="tour-card-button-container">
          {coloredButton(
            <FormattedMessage id="button.book-now" defaultMessage="Book Now" />
          )}
          <Link to={`../${slug}`} className="tour-card-button-link">
            {clearButton(
              <FormattedMessage
                id="button.learn-more"
                defaultMessage="Learn More"
              />
            )}
          </Link>
        </div>
      </div>
    </div>
  );

  const tourCardList = (tours) => (
    <div className="tour-card-list">{tours.map((tour) => tourCard(tour))}</div>
  );

  const tourCardSection = (title, tours) => (
    <section className="home-choose-tour-container">
      <h3 className="home-choose-tour-text related-tour-text">{title}</h3>
      {tourCardList(tours)}
    </section>
  );

  return (
    <main className="page-container">
      {topImageSection(
        <FormattedMessage
          id={`tour.${tour.title}.title`}
          defaultMessage={tour.title}
        />
      )}
      <div className="plane-tour-container">
        {tourInfoSection(tour)}
        {tourInfoAccordion}
        {tourCardSection(
          <FormattedMessage
            id="tour.related-tours.title"
            defaultMessage="Related Airplane Tours"
          />,
          relatedTours,
          'related-tour-card-container'
        )}
      </div>
    </main>
  );
};

export default ClassicManhattanPlaneTour;
