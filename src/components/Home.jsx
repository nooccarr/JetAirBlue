import { Carousel } from 'react-responsive-carousel';
// import HomeTopCarousel from '../assets/images/home-carousel-top.webp';
// import HomeBottomCarouselFirst from '../assets/images/caravan-1.jpg';
// import HomeBottomCarouselSecond from '../assets/images/home-carousel-bottom-2.webp';
// import HomeBottomCarouselThird from '../assets/images/home-carousel-bottom-3.webp';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const tours = [
  {
    title: 'Manhattan Classic Plane Tour',
    description: 'Take a flight that you will remember for a lifetime! Departing from the Downtown Manhattan Heliport, the Classic Manhattan Tour begins at the majestic the Statue of Liberty, followed by the world-famous Manhattan Skyline.',
    image: 'https://placehold.co/360x240'
  },
  {
    title: 'Manhattan Deluxe Plane Tour',
    description: 'An exciting and comprehensive helicopter tour of New York City with breathtaking views and excellent photo opportunities! This extended version of the Classic Tour will treat you to the best views of New York City including the Statue of Liberty, Empire State Building and Central park.',
    image: 'https://placehold.co/360x240'
  },
    {
    title: 'Montauk Plane Tour',
    description: 'An exciting and comprehensive helicopter tour of New York City with breathtaking views and excellent photo opportunities! This extended version of the Classic Tour will treat you to the best views of New York City including the Statue of Liberty, Empire State Building and Central park.',
    image: 'https://placehold.co/360x240'
  },
];

const values = [
  {
    title: 'safety first',
    description: 'Safety is paramount! We fly Bell407 planes that include the state-of-the-art TCAS system (Traffic Collision Avoidance System) maintained by our in-house team of factory-certified technicians! On site, we ensure you receive a safety briefing and are always escorted to your aircraft by our trained ground crew.',
  },
  {
    title: 'experienced pilots',
    description: 'Jet Air Blue conducts regular recurring training to ensure our pilots are ready to take you on a journey you will never forget. Our pilots come to Jet Air Blue with at least 1,000 flight hours, and their training ensures they know the Bell407 aircraft inside and out, not to mention some facts about NYC they can share with you on your tour.',
  },
  {
    title: 'quality aircraft',
    description: 'Jet Air Blue flies the Bell407, a 6-seat aircraft that is renowned for its safety and comfort. The Bell407 is the most popular helicopter in the world, with over 1,600 flying worldwide. The Bell407 is equipped with a Rolls Royce engine, and is known for its reliability and smooth ride.',
  },
  {
    title: '5 star service',
    description: 'Our service is how we stand out! We understand that your Jet Air Blue experience begins the first time you contact us. From our reservations, ground crew and pilots, we strive to ensure you have a stress-free and exciting experience. Our attention to customer satisfaction is why we’re rated 5 stars on TripAdvisor!',
  },
];

const Home = () => {
  const imagesCarouselTop = () => (
    <Carousel showThumbs={false} showIndicators={false}>
      <div className='home-main-image-top'>
        <img src='https://placehold.co/1920x1080' />
        {/* <img src={HomeTopCarousel} /> */}
      </div>
    </Carousel>
  );

  const imagesCarouselBottom = () => (
    <Carousel autoPlay interval="10000" infiniteLoop showThumbs={false}>
      <div className='home-main-image-bottom'>
        {/* <img src={HomeBottomCarouselFirst} /> */}
        <img src='https://placehold.co/1920x1080' />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div className='home-main-image-bottom'>
        {/* <img src={HomeBottomCarouselSecond} /> */}
        <img src='https://placehold.co/1920x1080' />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div className='home-main-image-bottom'>
        {/* <img src={HomeBottomCarouselThird} /> */}
        <img src='https://placehold.co/1920x1080' />
        {/* <p className="legend">Legend 3</p> */}
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
          {coloredButton('book now')}
          {clearButton('learn more')}
        </div>
      </div>
    </div>
  );

  const tourCardList = () => (
    <div className='tour-card-list'>
      {tours.map(tour => tourCard(tour))}
    </div>
  );

  const coloredButton = (text) => (
    <button className='book-now-button'>{text}</button>
  );

  const clearButton = (text) => (
    <button className='learn-more-button'>{text}</button>
  );

  const valueList = () => (
    <div className='home-value-list'>
      {values.map(value => (
        <div className='home-value-container'>
          <h4 className='home-value-title'>{value.title}</h4>
          <p className='home-value-description'>{value.description}</p>
        </div>
      ))}
    </div>
  );

  const requestInfo = () => (
    <div className='home-request-info-form'>
      <form className='home-request-info-form-container'>
        <h2 className='home-request-info-title'>Request Information</h2>
        <span className='home-request-info-span'>We’d love to hear from you. Please fill out the contact form and our team will be in touch to discuss your travel needs.</span>
        <div className='home-request-input-container'>
          <label htmlFor='fname' className='home-request-input-label'>First Name</label>
          <input type='text' id='fname' name='fname' className='home-request-input' />
        </div>
        <div className='home-request-input-container'>
          <label htmlFor='lname' className='home-request-input-label'>Last Name</label>
          <input type='text' id='lname' name='lname' className='home-request-input' />
        </div>
        <div className='home-request-input-container'>
          <label htmlFor='email' className='home-request-input-label'>Email</label>
          <input type='email' id='email' name='email' className='home-request-input' />
        </div>
        <div className='home-request-input-container'>
          <label htmlFor='phone' className='home-request-input-label'>Phone</label>
          <input type='tel' id='phone' name='phone' className='home-request-input' />
        </div>
        <div className='home-request-input-container'>
          <label htmlFor='message' className='home-request-input-label'>What Can We Assist You With?</label>
          <input id='text' name='message' className='home-request-input' />
        </div>
        <div className='home-request-button-container'>
          {clearButton('book now')}
        </div>
      </form>
    </div>
  );

  return (
    <div className='page-container'>
      {imagesCarouselTop()}
      {imagesCarouselBottom()}
      <section className='home-choose-tour-container'>
        <h3 className='home-choose-tour-text'>Choose a Plane Tour</h3>
        {tourCardList()}
      </section>
      <section className='home-why-choose-us-container'>
        <h3 className='home-why-choose-us-text'>Why Choose Jet Air Blue Planes?</h3>
        {valueList()}
      </section>
      <section className='home-request-info-container'>
        {requestInfo()}
        <div className='home-request-info-image'>
          <img src="https://placehold.co/1080x1080" />
        </div>
      </section>
    </div>

  );
};

export default Home;