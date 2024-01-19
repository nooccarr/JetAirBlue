import { coloredButton, clearButton } from './Button';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const tourCard = ({ slug, title, description, image }, classname) => (
  <div className={`tour-card-container ${classname}`} key={title}>
    <div className="tour-card-image-container">
      <Link to={slug}>
        <img src={image} className="tour-card-image" />
      </Link>
    </div>
    <div className="tour-card-text-container">
      <div>
        <Link to={slug} className="tour-card-title-link">
          <h4 className="tour-card-title">
            <FormattedMessage
              id={`tour.${title}.title`}
              defaultMessage={title}
            />
          </h4>
        </Link>
        <p className="tour-card-description">
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
        <Link to={slug} className="tour-card-button-link">
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

export const tourCardList = (tours, classname) => (
  <div className="tour-card-list">
    {tours.map((tour) => tourCard(tour, classname))}
  </div>
);

const tourCardSection = ({ title, tours, classname }) => (
  <section className="home-choose-tour-container">
    <h3 className="home-choose-tour-text">{title}</h3>
    {tourCardList(tours, classname)}
  </section>
);

export default tourCardSection;
