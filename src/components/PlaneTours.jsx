import TopImageSection from './TopImageSection';
import useScrollTop from './hooks/useScrollTop';
import ClassicManhattanCard from '../assets/images/home-classic-manhattan-card.jpg';
import DeluxeManhattanCard from '../assets/images/home-deluxe-manhattan-card.jpg';
import MontaukCard from '../assets/images/home-montauk-card.jpg';
import { Link } from 'react-router-dom';
import { coloredButton, clearButton } from '../utils/Button';
import { FormattedMessage } from 'react-intl';

const tours = [
  {
    slug: 'classic-manhattan-plane-tour',
    title: 'Classic Manhattan Plane Tour',
    description:
      'Embark on a breathtaking journey from Long Island Republic Airport. Marvel at iconic landmarks, cityscapes, and the magnificence of renowned locations over Manhattan. Prepare for an extraordinary adventure that guarantees an exhilarating experience, uncovering the most captivating spots in the heart of New York City!',
    image: ClassicManhattanCard,
  },
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

const PlaneTours = () => {
  useScrollTop();

  const tourCard = ({ slug, title, description, image }) => (
    <div className="plane-tour-card-container" key={title}>
      <div className="tour-card-image-container">
        <Link to={`../${slug}`}>
          <img src={image} className="tour-card-image" />
        </Link>
      </div>
      <div className="tour-card-text-container">
        <div>
          <Link to={`../${slug}`} className="tour-card-title-link">
            <h4 className="tour-card-title">
              <FormattedMessage
                id={`tour.${title}.title`}
                defaultMessage={title}
              />
            </h4>
          </Link>
          <p className="tour-card-description">
            {' '}
            <FormattedMessage
              id={`tour.${title}.description`}
              defaultMessage={description}
            />
          </p>
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
    <div className="plane-tour-card-list">
      {tours.map((tour) => tourCard(tour))}
    </div>
  );

  const tourCardSection = (tours) => (
    <section>
      <p className="plane-tours-paragraph">
        Take to the skies and see Manhattan from breathtaking new heights! Our
        unique helicopter tours show you the best of the many world-famous
        landmarks New York City has to offer.
      </p>
      {tourCardList(tours)}
    </section>
  );

  const planeToursOutro = (
    <div className="plane-tour-outro-section">
      <div className="about-us-intro-text-container">
        <h3 className="about-us-title">who are we?</h3>
        <p className="about-us-description">
          Our team of professionals at Manhattan Helicopters cares about the
          experience our clients have. We are committed to having you walk away
          happy, satisfied and in awe of your one-of-a-kind helicopter tour of
          New York City. While there are a handful of different Manhattan
          helicopter tours from which you can choose from, not all of the
          companies should be entrusted with your experience and safety. Take
          the guesswork out of choosing a tour company, by allowing Manhattan
          Helicopters to provide you with an affordable, safe, unforgettable New
          York City experience.
        </p>
      </div>
      <div className="about-us-intro-image-container">
        <img src="https://placehold.co/200x200" />
      </div>
    </div>
  );

  return (
    <main className="page-container">
      <TopImageSection
        title={
          <FormattedMessage
            id="plane-tours.title"
            defaultMessage="Jet Air Blue Plane Tours"
          />
        }
      />
      <div className="plane-tours-container">
        {tourCardSection(tours)}
        <div className="plane-tours-divider-container">
          <hr className="plane-tours-divider"></hr>
        </div>
        {planeToursOutro}
      </div>
    </main>
  );
};

export default PlaneTours;
