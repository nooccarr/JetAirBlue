import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const tours = [
  {
    title: 'Manhattan Plane Tour',
    description: 'Take a flight that you will remember for a lifetime! Departing from the Downtown Manhattan Heliport, the Classic Manhattan Tour begins at the majestic the Statue of Liberty, followed by the world-famous Manhattan Skyline.',
    image: 'https://placehold.co/360x240'
  },
  {
    title: 'Montauk Plane Tour',
    description: 'An exciting and comprehensive helicopter tour of New York City with breathtaking views and excellent photo opportunities! This extended version of the Classic Tour will treat you to the best views of New York City including the Statue of Liberty, Empire State Building and Central park.',
    image: 'https://placehold.co/360x240'
  },
];

const Home = () => {

  const imagesCarouselTop = () => (
    <Carousel autoPlay interval="10000" infiniteLoop showThumbs={false}>
      <div className='home-main-image'>
        <img src="https://placehold.co/1920x525" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div className='home-main-image'>
        <img src="https://placehold.co/1920x525" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div className='home-main-image'>
        <img src="https://placehold.co/1920x525" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );

  const imagesCarouselBottom = () => (
    <Carousel showThumbs={false} showIndicators={false}>
      <div className='home-main-image'>
        <img src="https://placehold.co/1920x525" />
      </div>
    </Carousel>
  );

  const tourCard = ({ title, description, image }) => (
    <div className='tour-card-container'>
      <div className='tour-card-image-container'>
        <img src={image} className='tour-card-image' />
      </div>
      <div className='tour-card-text-container'>
        <div>
          <h4 className='tour-card-title'>{title}</h4>
          <p className='tour-card-description'>{description}</p>
        </div>
        <div className='tour-card-button-container'>
          {bookNowButton()}
          {learnMoreButton()}
        </div>
      </div>
    </div>
  );

  const tourCardList = () => (
    <div className='tour-card-list'>
      {tours.map(tour => tourCard(tour))}
    </div>
  );

  const bookNowButton = () => (
    <button className='book-now-button'>book now</button>
  );

  const learnMoreButton = () => (
    <button className='learn-more-button'>learn more</button>
  );

  return (
    <div className='page-container'>
      {imagesCarouselTop()}
      {imagesCarouselBottom()}
      <section className='home-choose-tour-container'>
        <h3 className='home-choose-tour-text'>Choose a Plane Tour</h3>
        {tourCardList()}
      </section>
    </div>

  );
};

export default Home;