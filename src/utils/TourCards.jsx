import { coloredButton, clearButton } from './Button';

const tourCard = ({ title, description, image }, classname) => (
  <div className={`tour-card-container ${classname}`} key={title}>
    <div className='tour-card-image-container'>
      <img src={image} className='tour-card-image' />
    </div>
    <div className='tour-card-text-container'>
      <div>
        <h4 className='tour-card-title'>{title}</h4>
        <p className='tour-card-description'>{description}</p>
      </div>
      <div className='tour-card-button-container'>
        {coloredButton('book now')}
        {clearButton('learn more')}
      </div>
    </div>
  </div>
);

const tourCardList = (tours, classname) => (
  <div className='tour-card-list'>
    {tours.map(tour => tourCard(tour, classname))}
  </div>
);

const tourCardSection = ({ title, tours, classname }) => (
  <section className='home-choose-tour-container'>
    <h3 className='home-choose-tour-text'>{title}</h3>
    {tourCardList(tours, classname)}
  </section>
);

export default tourCardSection;