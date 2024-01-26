import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import useScrollTop from './hooks/useScrollTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faCalendarAlt,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ClassicManhattanCard from '../assets/images/related-classic-manhattan-card.jpg';
import MontaukCard from '../assets/images/related-montauk.jpg';
import DeluxeManhattanRoute from '../assets/videos/deluxe-manhattan-route.mp4';
import DeluxeManhattanRoutePoster from '../assets/images/posters/deluxe-manhattan-route.jpg';
import { coloredButton, clearButton } from '../utils/Button';
import styles from '../styles/accordion.module.css';
import chevronDown from '../assets/svgs/chevron-down.svg';
import { FormattedMessage } from 'react-intl';

const tour = {
  title: 'Deluxe Manhattan Plane Tour',
  duration: '90 Minutes',
  availability: 'Monday-Sunday 10:00am-5:00pm',
  fare: '$400 per person',
  description: [
    'Experience the captivating Manhattan and Montauk Scenic Tour, a seamless blend of the Classic Manhattan Plane Tour and the enchanting Montauk Plane Tour.',
    'The journey unfolds from Long Island Republic Airport, taking you along the Hudson River to the mesmerizing Manhattan skyline – a bustling cityscape with iconic landmarks and skyscrapers. As the tour progresses, glide over the tranquil landscapes of Jones Beach, adding a laid-back coastal touch to the adventure.',
    "Continue the exploration towards Montauk, where the focal point is the striking Montauk Lighthouse and the coastal wonders that make this destination truly extraordinary. Gardiner's Island, a picturesque gem in the Atlantic, adds the perfect finishing touch before completing the loop back to Long Island Republic Airport.",
    'This fusion tour promises an unforgettable experience, seamlessly blending the magic of Manhattan with the coastal charm of Montauk. Discover the best of both worlds on the Manhattan and Montauk Scenic Tour!',
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
    'Long Island South Shoreline',
    'Jones Beach',
    'Fire Island',
    'East Hampton',
    'Montauk Recreation Area',
    'Montauk Airport',
    'Montauk Lighthouse',
    'Gardiners Island',
    'Smithtown Bay',
    'Long Island North Shoreline',
  ],
};

const relatedTours = [
  {
    slug: 'classic-manhattan-plane-tour',
    title: 'Classic Manhattan Plane Tour',
    // description: 'Take a flight that you will remember for a lifetime! Departing from the Republic Airport (Farmingdale, LI), the Classic Manhattan Tour begins at the majestic the Statue of Liberty, followed by the world-famous Manhattan Skyline.',
    description:
      'Embark on a breathtaking journey from Long Island Republic Airport. Marvel at iconic landmarks, cityscapes, and the magnificence of renowned locations over Manhattan. Prepare for an extraordinary adventure that guarantees an exhilarating experience, uncovering the most captivating spots in the heart of New York City!',
    image: ClassicManhattanCard,
  },
  {
    slug: 'montauk-plane-tour',
    title: 'Montauk Plane Tour',
    // description: 'All aboard for the most spectacular and unforgettable experience of your New York visit! Departing from the Republic Airport (Farmingdale, LI), the Montauk Tour will treat you to the best views of Long Island including the Jones Beach, East Hampton, and Montauk.',
    description:
      'Explore the Montauk Scenic Flight, a coastal journey of unparalleled beauty. Gracefully circling the iconic Montauk Lighthouse, stand against the coastal backdrop, and marvel at the natural wonders. Glide over charming landscapes, catch glimpses of coastal allure, and experience the enchanting aerial beauty of the eastern end of New York.',
    image: MontaukCard,
  },
];

const DeluxeManhattanPlaneTour = () => {
  useScrollTop();

  const topImageSection = (title) => (
    <div className="tour-main-image-container">
      <section className="tour-main-image">
        <div className="tour-main-image-caption-container">
          <h1 className="tour-main-image-caption-title">{title}</h1>
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
          defaultMessage="An Extended Trip Over the Sky"
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
      <ul className="tour-info-section-sighting-list-ul">
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
            poster={DeluxeManhattanRoutePoster}
          >
            <source src={DeluxeManhattanRoute} type="video/mp4" />
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
          <ul className="tour-accordion-ul">
            <li className="tour-accordion-li">
              <strong className="tour-accordion-strong">체크인</strong>
              <p className="tour-accordion-p">
                예약된 스케쥴보다 최소 45분 전에는 출발지에 도착하세요.
              </p>
              <p className="tour-accordion-p">
                모든 승객은 유효한 사진 신분증을 제출해야 합니다.
              </p>
            </li>
            <li className="tour-accordion-li">
              <strong className="tour-accordion-strong">안전수칙</strong>
              <p className="tour-accordion-p">
                비행 전 필수적인 기내 안전수칙에 대해 안내드립니다. 가이드의
                모든 지침을 따라주세요.
              </p>
            </li>
            <li className="tour-accordion-li">
              <strong className="tour-accordion-strong">날씨 조건</strong>
              <p className="tour-accordion-p">
                항공 비행은 날씨 조건에 따라 달라집니다. 기상 악화로 비행할 수가
                없을 때 예약 날짜변경, 전액 크레딧 또는 환불이 제공됩니다.
              </p>
            </li>
            <li className="tour-accordion-li">
              <strong className="tour-accordion-strong">취소 정책</strong>
              <p className="tour-accordion-p">
                최소한 48시간 전에는 예약을 취소해 주세요.
              </p>
              <p className="tour-accordion-p">
                예약 취소는 24시간 전에 하시면 전액 환불해 드립니다.
              </p>
            </li>
            <li className="tour-accordion-li">
              <strong className="tour-accordion-strong">복장</strong>
              <p className="tour-accordion-p">
                비행 당일 날씨 조건을 고려하여 간편한 복장으로 탑승하시고 무거운
                가방은 삼가해주세요.
              </p>
            </li>
            <li className="tour-accordion-li">
              <strong className="tour-accordion-strong">
                사진 촬영 및 기기
              </strong>
              <p className="tour-accordion-p">
                카메라 및 모바일 기기 사용이 허용되며 분실하지 않도록 안전하게
                보관하세요. 기기 사용에 관한 가이드의 지시를 따라주셔야 합니다.
              </p>
            </li>
            <li className="tour-accordion-li">
              <strong className="tour-accordion-strong">오시는 길</strong>

              <p className="tour-accordion-p">
                리퍼블릭 공항까지는 택시 또는 승용차로 오시길 권장합니다.
                플러싱에서는 40분, 맨하탄에서는 한시간 정도 소요됩니다.
              </p>
            </li>
            <li className="tour-accordion-li">
              <strong className="tour-accordion-strong">즐기기</strong>
              <p className="tour-accordion-p">
                편안하게 아름다운 경치를 즐기며 소중한 추억을 만드십시오!
              </p>
              <p className="tour-accordion-p">
                추가 정보나 도움이 필요한 경우 언제든지 고객 서비스 팀에
                문의하십시오. Jet Air Blue를 선택해 주셔서 감사합니다.
              </p>
            </li>
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );

  const tourCard = ({ slug, title, description, image }) => (
    <div
      className="tour-card-container related-tour-card-container"
      key={title}
    >
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

export default DeluxeManhattanPlaneTour;
