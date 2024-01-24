import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useScrollTop from './hooks/useScrollTop';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import TopImageSection from './TopImageSection';
import { coloredButton } from '../utils/Button';

const ContactUs = () => {
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

  const contactUsForm = (
    <form className="contact-us-form" ref={form} onSubmit={sendEmail}>
      <h3 className="contact-us-form-title">Send Us a Message</h3>
      {emailSent ? (
        <p>The form has been submitted successfully.</p>
      ) : (
        <>
          {' '}
          <div className="contact-us-input-container">
            <label htmlFor="name" className="contact-us-input-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="first_name"
              className="contact-us-input"
              required
            />
          </div>
          <div className="contact-us-input-container">
            <label htmlFor="email" className="contact-us-input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="reply_to"
              className="contact-us-input"
              required
            />
          </div>
          <div className="contact-us-input-container">
            <label htmlFor="phone" className="contact-us-input-label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone_number"
              className="contact-us-input"
            />
          </div>
          <div className="contact-us-input-container">
            <label htmlFor="message" className="contact-us-input-label">
              Message
            </label>
            <textarea
              id="textarea"
              name="message"
              rows="10"
              className="contact-us-textarea"
              required
            />
          </div>
          <div className="contact-us-button-container">
            {coloredButton('submit', 'contact-us-button')}
          </div>
        </>
      )}
    </form>
  );

  const contactUsInfo = (
    <div className="contact-us-info-container">
      <h3 className="contact-us-info-title">Jet Air Blue Planes</h3>
      <div className="contact-us-icon-info-container">
        <ul className="contact-us-icon-container">
          <li className="contact-info">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </li>
          <li className="contact-info">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </li>
          <li className="contact-info">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
          </li>
        </ul>

        <ul className="contact-us-ctc-info-container">
          <li className="contact-info">
            <a href="tel:+1-718-359-1070">718-359-1070</a>
          </li>
          <li className="contact-info">
            <a href="mailto: test@test.com">jouncpark@gmail.com</a>
          </li>
          <li className="contact-info">
            <a
              href="https://maps.app.goo.gl/fc9EKkDM2yR1QnMQ7"
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

      <h4 className="contact-us-info-hours">Hours of Operation</h4>
      <p className="contact-us-info-desc">Monday-Friday, 10 am to 5 pm</p>
      <p className="contact-us-info-desc">Saturday-Sunday, 10 am to 5 pm</p>
      <h5 className="contact-us-info-holiday">Holiday Hours</h5>
      <p className="contact-us-info-desc">10 am to 5 pm</p>
      <div className="about-us-intro-image-container">
        <img src="https://placehold.co/100x100" />
      </div>
    </div>
  );

  return (
    <main className="page-container">
      <TopImageSection
        title="Contact Us"
        description="Customer Service Lines are Open from 10am-5pm"
      />
      <div className="contact-us-container">
        <div className="contact-us-form-info-container">
          {contactUsForm}
          {contactUsInfo}
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
