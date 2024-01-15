import { Carousel } from 'react-responsive-carousel';
import { coloredButton, clearButton } from '../utils/Button';
import { Link } from 'react-router-dom';
import TourCards from '../utils/TourCards';
import HomeBottomCarouselFirst from '../assets/images/home-carousel-bottom-1.jpeg';
import HomeBottomCarouselSecond from '../assets/images/home-carousel-bottom-2.jpeg';
import HomeBottomCarouselThird from '../assets/images/home-carousel-bottom-3.jpg';
import ClassicManhattanCard from '../assets/images/home-classic-manhattan-card.jpg';
import DeluxeManhattanCard from '../assets/images/home-deluxe-manhattan-card.jpg';
import MontaukCard from '../assets/images/home-montauk-card.jpg';
import HomeRequestInfo from '../assets/images/home-request-info.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const tours = [
  {
    slug: 'classic-manhattan-plane-tour',
    title: 'Classic Manhattan Plane Tour',
    description: 'Embark on a breathtaking journey from Long Island Republic Airport. Marvel at iconic landmarks, cityscapes, and the magnificence of renowned locations over Manhattan. Prepare for an extraordinary adventure that guarantees an exhilarating experience, uncovering the most captivating spots in the heart of New York City!',
    image: ClassicManhattanCard,
    carouselImage: HomeBottomCarouselFirst
  },
  {
    slug: 'deluxe-manhattan-plane-tour',
    title: 'Deluxe Manhattan Plane Tour',
    description: 'An exciting and comprehensive helicopter tour of New York City with breathtaking views and excellent photo opportunities! This extended version of the Classic Tour will treat you to the best views of New York City including the Statue of Liberty, Empire State Building and Central park.',
    image: DeluxeManhattanCard,
    carouselImage: HomeBottomCarouselSecond
  },
  {
    slug: 'montauk-plane-tour',
    title: 'Montauk Plane Tour',
    description: 'An exciting and comprehensive helicopter tour of New York City with breathtaking views and excellent photo opportunities! This extended version of the Classic Tour will treat you to the best views of New York City including the Statue of Liberty, Empire State Building and Central park.',
    image: MontaukCard,
    carouselImage: HomeBottomCarouselThird
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
  const imageTop = (
    <div className='home-main-image-top-container'>
    {/* <img src='https://placehold.co/1920x1080' /> */}
      {/* <div className='home-main-image-top'> */}
      <div className='caption-container'>
        <h1 className='caption-title'>jet air blue planes</h1>
        <p className='caption-description'>breathtaking plane tours over new york city</p>
        <div className='caption-button-container'>
          {coloredButton('book a plane tour', 'home-book-now-button')}
        </div>
      </div>
      {/* </div> */}
    </div>
  );

  const imagesCarousel = (tours) => (
    <Carousel autoPlay interval="10000" infiniteLoop showThumbs={false}>
      {tours.map(tour => (
        <div key={tour.title}>
          <img className='home-main-image-bottom' style={{ filter: 'brightness(80%)'}} src={tour.carouselImage} />
          <div className='bottom-carousel-caption-container'>
            <Link to={tour.slug} className='bottom-carousel-caption-title-link'>
              <h1 className='bottom-carousel-caption-title'>{tour.title}</h1>
            </Link>
            <p className='bottom-carousel-caption-description'>{tour.description}</p>
            <div className='bottom-carousel-caption-button-container'>
              <Link to={tour.slug}>
                {coloredButton('learn more', 'home-learn-more-button')}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );




  const valueList = (
    <div className='home-value-list'>
      {values.map(value => (
        <div className='home-value-container' key={value.title}>
          <h4 className='home-value-title'>{value.title}</h4>
          <p className='home-value-description'>{value.description}</p>
        </div>
      ))}
    </div>
  );

  const requestInfo = (
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
          {clearButton('book now', 'home-request-button')}
        </div>
      </form>
    </div>
  );

  return (
    <div className='page-container'>
      {imageTop}
      <section className='home-why-choose-us-container'>
        <h3 className='home-why-choose-us-text'>Why Choose Jet Air Blue Planes?</h3>
        {valueList}
      </section>
      {imagesCarousel(tours)}
      <TourCards title={'Choose a Plane Tour'} tours={tours} />
      <section className='home-request-info-container'>
        {requestInfo}
        <div>
          <img className='home-request-info-image' src={HomeRequestInfo} />
        </div>
      </section>

    </div>

  );
};

export default Home;