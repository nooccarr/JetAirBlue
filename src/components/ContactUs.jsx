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
import { FormattedMessage } from 'react-intl';
import NycApple from '../assets/images/nyc-apple.avif';

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
    <form className="p-5 md:p-10 bg-[#fdfdfd]" ref={form} onSubmit={sendEmail}>
      <h3 className="contact-us-form-title">
        <FormattedMessage
          id="contact-us.form.title"
          defaultMessage="Send Us a Message"
        />
      </h3>
      {emailSent ? (
        <p>The form has been submitted successfully.</p>
      ) : (
        <>
          <div className="contact-us-input-container">
            <label htmlFor="name" className="contact-us-input-label">
              <FormattedMessage
                id="contact-us-form.name"
                defaultMessage="Name"
              />
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
              <FormattedMessage
                id="contact-us-form.email"
                defaultMessage="Email"
              />
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
              <FormattedMessage
                id="contact-us-form.phone"
                defaultMessage="Phone"
              />
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
              <FormattedMessage
                id="contact-us-form.message"
                defaultMessage="Message"
              />
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
            {coloredButton(
              <FormattedMessage
                id="contact-us-form.button"
                defaultMessage="Submit"
              />,
              'contact-us-button'
            )}
          </div>
        </>
      )}
    </form>
  );

  const contactUsInfo = (
    <div className="p-5 md:p-10 bg-[#cce0ee] order-first md:order-last">
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

      <h4 className="contact-us-info-hours">
        <FormattedMessage
          id="contact-us.info.hours-of-operation"
          defaultMessage="Hours of Operation"
        />
      </h4>
      <p className="contact-us-info-desc">
        <FormattedMessage
          id="contact-us.info.weekdays"
          defaultMessage="Monday-Friday, 10 am to 5 pm"
        />
      </p>
      <p className="contact-us-info-desc">
        <FormattedMessage
          id="contact-us.info.weekends"
          defaultMessage="Saturday-Sunday, 10 am to 5 pm"
        />
      </p>
      <h5 className="contact-us-info-holiday">
        <FormattedMessage
          id="contact-us.info.holiday-hours"
          defaultMessage="Holiday Hours"
        />
      </h5>
      <p className="contact-us-info-desc">
        <FormattedMessage
          id="contact-us.info.holidays"
          defaultMessage="10 am to 5 pm"
        />
      </p>
      <div className="about-us-intro-image-container">
        {/* <img src="https://placehold.co/100x100" /> */}
        <img src={NycApple} />
      </div>
    </div>
  );

  return (
    <main className="page-container animate-fadeIn">
      <TopImageSection
        title={
          <FormattedMessage id="contact-us.title" defaultMessage="Contact Us" />
        }
        description={
          <FormattedMessage
            id="contact-us.sub-title"
            defaultMessage="Customer Service Lines are Open from 10am-5pm"
          />
        }
      />
      <div className="contact-us-container">
        <div className="grid md:grid-cols-2">
          {contactUsForm}
          {contactUsInfo}
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
