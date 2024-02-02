import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Carousel } from 'react-responsive-carousel';
import { coloredButton, clearButton } from '../utils/Button';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import useScrollTop from './hooks/useScrollTop';
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
    description:
      'Embark on a breathtaking journey from Long Island Republic Airport. Marvel at iconic landmarks, cityscapes, and the magnificence of renowned locations over Manhattan. Prepare for an extraordinary adventure that guarantees an exhilarating experience, uncovering the most captivating spots in the heart of New York City!',
    image: ClassicManhattanCard,
    carouselImage: HomeBottomCarouselFirst,
  },
  {
    slug: 'deluxe-manhattan-plane-tour',
    title: 'Deluxe Manhattan Plane Tour',
    description:
      'Experience the captivating Manhattan and Montauk Scenic Tour, a seamless blend of the Classic Manhattan Plane Tour and the enchanting Montauk Plane Tour. This fusion tour promises an unforgettable experience, seamlessly blending the magic of Manhattan with the coastal charm of Montauk. Discover the best of both worlds on the Manhattan and Montauk Scenic Tour.',
    image: DeluxeManhattanCard,
    carouselImage: HomeBottomCarouselSecond,
  },
  {
    slug: 'montauk-plane-tour',
    title: 'Montauk Plane Tour',
    description:
      'Explore the Montauk Scenic Flight, a coastal journey of unparalleled beauty. Gracefully circling the iconic Montauk Lighthouse, stand against the coastal backdrop, and marvel at the natural wonders. Glide over charming landscapes, catch glimpses of coastal allure, and experience the enchanting aerial beauty of the eastern end of New York.',
    image: MontaukCard,
    carouselImage: HomeBottomCarouselThird,
  },
];

// const values = [
//   {
//     title: 'safety first',
//     description: 'Safety is paramount! We fly Bell407 planes that include the state-of-the-art TCAS system (Traffic Collision Avoidance System) maintained by our in-house team of factory-certified technicians! On site, we ensure you receive a safety briefing and are always escorted to your aircraft by our trained ground crew.',
//   },
//   {
//     title: 'experienced pilots',
//     description: 'Jet Air Blue conducts regular recurring training to ensure our pilots are ready to take you on a journey you will never forget. Our pilots come to Jet Air Blue with at least 1,000 flight hours, and their training ensures they know the Bell407 aircraft inside and out, not to mention some facts about NYC they can share with you on your tour.',
//   },
//   {
//     title: 'quality aircraft',
//     description: 'Jet Air Blue flies the Bell407, a 6-seat aircraft that is renowned for its safety and comfort. The Bell407 is the most popular helicopter in the world, with over 1,600 flying worldwide. The Bell407 is equipped with a Rolls Royce engine, and is known for its reliability and smooth ride.',
//   },
//   {
//     title: '5 star service',
//     description: 'Our service is how we stand out! We understand that your Jet Air Blue experience begins the first time you contact us. From our reservations, ground crew and pilots, we strive to ensure you have a stress-free and exciting experience. Our attention to customer satisfaction is why we’re rated 5 stars on TripAdvisor!',
//   },
// ];

const Home = () => {
  useScrollTop();
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_2agsawd';
    const templateId = 'template_so92cdp';
    const publicKey = 'KRBE_6VJ3UIScm0ro';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setEmailSent(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const imageTop = (
    <div className="home-main-image-top-container aspect-video min-h-[600px] w-full">
      {/* <img src='https://placehold.co/1920x1080' /> */}
      {/* <div className='home-main-image-top'> */}
      <div className="caption-container">
        <h1 className="caption-title">jet air blue planes</h1>
        <p className="caption-description">
          <FormattedMessage
            id="home.top-image.description"
            defaultMessage="breathtaking plane tours over new york city"
          />
        </p>
        <div className="caption-button-container">
          {coloredButton(
            <FormattedMessage
              id="button.book-a-plane-tour"
              defaultMessage="Book a Plane Tour"
            />,
            'home-book-now-button'
          )}
        </div>
      </div>
      {/* </div> */}
    </div>
  );

  const imagesCarousel = (tours) => (
    <Carousel autoPlay interval="10000" infiniteLoop showThumbs={false}>
      {tours.map((tour) => (
        <div key={tour.title}>
          <img
            className="home-main-image-bottom"
            style={{ filter: 'brightness(80%)' }}
            src={tour.carouselImage}
          />
          <div className="bottom-carousel-caption-container">
            <Link to={tour.slug} className="bottom-carousel-caption-title-link">
              <h1 className="bottom-carousel-caption-title">
                <FormattedMessage
                  id={`tour.${tour.title}.title`}
                  defaultMessage={tour.title}
                />
              </h1>
            </Link>
            <p className="bottom-carousel-caption-description">
              <FormattedMessage
                id={`tour.${tour.title}.description`}
                defaultMessage={tour.description}
              />
            </p>
            <div className="bottom-carousel-caption-button-container">
              <Link to={tour.slug}>
                {coloredButton(
                  <FormattedMessage
                    id="button.learn-more"
                    defaultMessage="Learn More"
                  />,
                  'home-learn-more-button'
                )}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );

  // const valueList = (
  //   <div className='home-value-list'>
  //     {values.map(value => (
  //       <div className='home-value-container' key={value.title}>
  //         <h4 className='home-value-title'>{value.title}</h4>
  //         <p className='home-value-description'>{value.description}</p>
  //       </div>
  //     ))}
  //   </div>
  // );

  const aboutTour = (
    <div className="about-tour-section">
      <div className="about-tour-container">
        <h3 className="about-tour-title">
          <FormattedMessage
            id="home.about-tour.title"
            defaultMessage="Marvel at the skies over Manhattan,"
          />
        </h3>
        <p className="about-tour-description">
          <FormattedMessage
            id="home.about-tour.description-0"
            defaultMessage="the unparalleled capital of the world, now seen from the air, adding a touch of magic to your experience!"
          />
        </p>
        <p className="about-tour-description">
          <FormattedMessage
            id="home.about-tour.description-1"
            defaultMessage="Behold the iconic skyline, featuring Central Park, Rockefeller Center, Time Square, and Grand Central Station – each narrating a unique tale of the city's rich history. Witness the majestic Empire State Building, the timeless Brooklyn Bridge, and the symbolic Wall Street. Take in the modern allure of the newly renovated World Trade Center and the historic Verrazano Bridge connecting Manhattan and Staten Island. Don't miss the Statue of Liberty, a French gift celebrating American Independence, once a gateway to dreams on Ellis Island."
          />
        </p>
        <p className="about-tour-description">
          <FormattedMessage
            id="home.about-tour.description-2"
            defaultMessage="This three-dimensional sightseeing adventure offers a fresh perspective on the captivating wonders of Manhattan!"
          />
        </p>
      </div>
    </div>
  );

  // id is for styling and associating input element with label
  // name attribute is used when sending information to the back-end of your website.
  const requestInfo = (
    <div className="home-request-info-form">
      <form
        className="home-request-info-form-container"
        ref={form}
        onSubmit={sendEmail}
      >
        <h2 className="home-request-info-title">
          <FormattedMessage
            id="home.request-info.title"
            defaultMessage="Request Information"
          />
        </h2>
        <span className="home-request-info-span">
          <FormattedMessage
            id={
              emailSent
                ? 'home.request-info.submitted'
                : 'home.request-info.description'
            }
            defaultMessage={
              emailSent
                ? 'The form has been submitted successfully.'
                : 'We’d love to hear from you. Please fill out the contact form and our team will be in touch to discuss your travel needs.'
            }
          />
        </span>
        {!emailSent && (
          <>
            <div className="home-request-input-container">
              <label htmlFor="fname" className="home-request-input-label">
                <FormattedMessage
                  id="home.request-info.first-name"
                  defaultMessage="First Name"
                />
              </label>
              <input
                type="text"
                id="fname"
                name="first_name"
                className="home-request-input"
                required
              />
            </div>
            <div className="home-request-input-container">
              <label htmlFor="lname" className="home-request-input-label">
                <FormattedMessage
                  id="home.request-info.last-name"
                  defaultMessage="Last Name"
                />
              </label>
              <input
                type="text"
                id="lname"
                name="last_name"
                className="home-request-input"
              />
            </div>
            <div className="home-request-input-container">
              <label htmlFor="email" className="home-request-input-label">
                <FormattedMessage
                  id="home.request-info.email"
                  defaultMessage="Email"
                />
              </label>
              <input
                type="email"
                id="email"
                name="reply_to"
                className="home-request-input"
                required
              />
            </div>
            <div className="home-request-input-container">
              <label htmlFor="phone" className="home-request-input-label">
                <FormattedMessage
                  id="home.request-info.phone"
                  defaultMessage="Phone"
                />
              </label>
              <input
                type="tel"
                id="phone"
                name="phone_number"
                className="home-request-input"
              />
            </div>
            <div className="home-request-input-container">
              <label htmlFor="message" className="home-request-input-label">
                <FormattedMessage
                  id="home.request-info.message"
                  defaultMessage="Message"
                />
              </label>
              <input
                id="text"
                name="message"
                className="home-request-input"
                required
              />
            </div>
            <div className="home-request-button-container">
              {clearButton(
                <FormattedMessage
                  id="button.book-now"
                  defaultMessage="Book Now"
                />,
                'home-request-button'
              )}
            </div>
          </>
        )}
      </form>
    </div>
  );

  return (
    <div className="page-container">
      {imageTop}
      {/* <section className='home-why-choose-us-container'>
        <h3 className='home-why-choose-us-text'>Why Choose Jet Air Blue Planes?</h3>
        {valueList}
      </section> */}
      {aboutTour}
      {imagesCarousel(tours)}
      <TourCards
        title={
          <FormattedMessage
            id="home.cards.title"
            defaultMessage="Choose a Plane Tour"
          />
        }
        tours={tours}
      />
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {requestInfo}
        <div className="order-first min-h-[650px] lg:order-last">
          <img className="home-request-info-image" src={HomeRequestInfo} />
        </div>
      </section>
    </div>
  );
};

export default Home;
