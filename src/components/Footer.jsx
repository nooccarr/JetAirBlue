import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  const contactInfo = () => (
    // <div className="w-[219px]">
    <div className="w-[229px]">
      <h3 className="footer-section-title">jet air blue</h3>
      <div className="footer-section-contact-us-container">
        <ul className="footer-section-icon-container">
          <li className="footer-contact-info">
            <span className="footer-contact-info-icon">
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </li>
          <li className="footer-contact-info">
            <span className="footer-contact-info-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </li>
          <li className="footer-contact-info">
            <span className="footer-contact-info-icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
          </li>
        </ul>

        <ul className="footer-section-info-container">
          <li className="footer-contact-info">
            <a href="tel:+1-718-359-1070" className="animated-underline">
              718-359-1070
            </a>
          </li>
          <li className="footer-contact-info">
            <a
              href="mailto: jouncpark@gmail.com"
              className="animated-underline"
            >
              jouncpark@gmail.com
            </a>
          </li>
          <li className="footer-contact-info pb-0">
            <a
              href="https://maps.app.goo.gl/fc9EKkDM2yR1QnMQ7"
              className="animated-underline"
              target="_blank"
              rel=""
            >
              <address>
                Republic Airport
                <br />
                7150 Republic Airport
                <br />
                Farmingdale, NY 11735
              </address>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  const externalLinks = () => (
    // <div className="w-[144px]">
    <div className="w-[231px]">
      <h3 className="footer-section-title">external links</h3>
      <ul className="footer-section-quick-links-container flex flex-col gap-1">
        <li className="footer-quick-links">
          <Link
            to="http://www.airtransport.or.kr"
            className="animated-underline"
            target="_blank"
          >
            <FormattedMessage
              id="footer.external-link.air-transport"
              defaultMessage="Korea Civil Aviation Association"
            />
          </Link>
        </li>
        <li className="footer-quick-links">
          <Link
            to="http://www.kulaa.or.kr"
            className="animated-underline"
            target="_blank"
          >
            <FormattedMessage
              id="footer.external-link.kulaa"
              defaultMessage="Korea Sport Aviation Association"
            />
          </Link>
        </li>
        <li className="footer-quick-links">
          <Link
            to="https://www.aircraftspruce.com"
            className="animated-underline"
            target="_blank"
          >
            <FormattedMessage
              id="footer.external-link.aircraft-spruce"
              defaultMessage="Aircraft Spruce & Specialty Co."
            />
          </Link>
        </li>
      </ul>
    </div>
  );

  const quickLinks = () => (
    // <div className="w-[174px]">
    <div className="w-[213x]">
      <h3 className="footer-section-title">quick links</h3>
      <ul className="footer-section-quick-links-container flex flex-col gap-1">
        <li className="footer-quick-links">
          <Link to="/" className="animated-underline">
            <FormattedMessage id="footer.link.home" defaultMessage="Home" />
          </Link>
        </li>
        <li className="footer-quick-links">
          <Link
            to="/classic-manhattan-plane-tour"
            className="animated-underline"
          >
            <FormattedMessage
              id="footer.link.classic-manhattan-plane-tour"
              defaultMessage="Classic Manhattan Plane Tour"
            />
          </Link>
        </li>
        <li className="footer-quick-links">
          <Link to="/montauk-plane-tour" className="animated-underline">
            <FormattedMessage
              id="footer.link.montauk-plane-tour"
              defaultMessage="Montauk Plane Tour"
            />
          </Link>
        </li>
        {/* <li className="footer-quick-links">
          <Link to="/faq">
            <FormattedMessage
              id="footer.link.faq"
              defaultMessage="frequently asked questions"
            />
          </Link>
        </li> */}
        <li className="footer-quick-links">
          <Link to="/contact-us" className="animated-underline">
            <FormattedMessage
              id="footer.link.contact-us"
              defaultMessage="contact us"
            />
          </Link>
        </li>
        <li className="footer-quick-links">
          <Link to="/gallery" className="animated-underline">
            <FormattedMessage
              id="footer.link.gallery"
              defaultMessage="gallery"
            />
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <footer>
      <section className="footer-container flex-col w-[235px] sm:w-full mx-auto sm:flex-row sm:justify-between gap-8">
        {contactInfo()}
        {externalLinks()}
        {quickLinks()}
      </section>
    </footer>
  );
};

export default Footer;
