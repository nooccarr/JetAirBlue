import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {

  const imagesCarousel = () => (
    <Carousel autoPlay interval="10000" infiniteLoop showThumbs={false}>
      <div>
        <img src="https://placehold.co/100x100" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://placehold.co/200x200" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://placehold.co/300x300" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );

  return (
    <>
      <Carousel showThumbs={false}>
        <div>
          <img src="https://placehold.co/100x100" />
        </div>
      </Carousel>
      {imagesCarousel()}
      <div className='page-wrapper'></div>

    </>

  );
};

export default Home;