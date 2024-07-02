import TopImageSection from './TopImageSection';
import useScrollTop from './hooks/useScrollTop';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import styles from '../styles/accordion.module.css';
import chevronDown from '../assets/svgs/chevron-down.svg';
import { coloredButton } from '../utils/Button';
import { FormattedMessage } from 'react-intl';

const faqList = [
  {
    question:
      'Do I need a reservation to take a tour? If so how do I reserve a helicopter tour flight?',
    answer: [
      'To book a helicopter tour please call our reservations department at +1 (917) 720-4659 or toll-free at (888) 690-8513. Our customer service representatives speak multiple languages and can assist you with your reservation over the phone. If you book through a tour operator or hotel concierge he or she will reserve the time for you and coordinate your confirmation with you.',
    ],
  },
  {
    question:
      'How do I book a private tour with no other passengers? How do I reserve a large group?',
    answer: [
      'Our reservation agents can also arrange private tours or large groups for you. Please contact us at +1 (917) 720-4659 or toll-free at (888) 690-8513 to speak with one of our multi-lingual reservation agents. If you book through a tour operator or hotel concierge he or she will reserve the time for you and coordinate your confirmation with you.',
    ],
  },
  {
    question: 'Why are we charged a heliport fee?',
    answer: [
      'To maintain our operations, we have expenses associated with using the heliport facilities, including passenger and landing fees. The heliport fee we charge covers these costs, and we pass this fee along to our customers. This allows us to ensure that our operations run smoothly and our customers have a positive experience when using our services. We strive to provide the best service possible and covering these expenses with the heliport fee helps us achieve that goal.',
    ],
  },
  {
    question:
      'I have a voucher with my reservation on it. Do I need to print it out or can I show you on my phone?',
    answer: [
      'Please print out all vouchers and bring them to our customer service desk upon check-in.',
    ],
  },
  {
    question: 'What methods of payment are accepted?',
    answer: [
      'We accept cash in US dollars (USD), all major credit/debit cards and traveler’s checks.',
      '*We do not accept American Express.',
    ],
  },
  {
    question: 'During what hours are helicopter tour flights conducted?',
    answer: [
      'Helicopter tour operations are conducted from 9am to 7pm on Mondays through Saturdays and 9:00 am to 5:00 pm on Holidays. Therefore our latest reserved tour times are 6:30pm and 4:30pm respectively.',
    ],
  },
  {
    question: 'Where are you located? How do I get there?',
    answer: [
      'We are located at the Downtown Manhattan Heliport at Pier 6 on the East River. Our building is located just north of the Staten Island Ferry and just south of the Pier 11 South Street Seaport. Just follow the helicopters! Public transportation can be taken from anywhere in Manhattan using the MTA Subway. Click here for map. You will want to take the R train to the Whitehall stop and walk north past the Staten Island Ferry. We are located in the gray two-story building on the right with the large clock on it. If traveling by taxi please request that your driver take you to the “Downtown Manhattan Heliport” at Pier 6 on the East River. If driving from Manhattan you will want to take the West Side highway 9A south to the FDR tunnel exit (fork left) then after the tunnel immediately exit South Street. The heliport is on your right. Parking is not available at the heliport but there is a cash municipal parking lot at the next exit just west of Pier 11.',
    ],
  },
  {
    question: 'Will I go through a security check?',
    answer: [
      'Yes. When you approach the heliport a Manhattan Helicopters representative will accompany you to a security checkpoint where you will be scanned by a metal detector to ensure safety. Firearms, weapons, sharp objects, lighters, explosives and chemicals are prohibited at the heliport and aboard aircraft. Once your security check is complete you will be escorted to the reservation desk by a Manhattan Helicopters representative. There you will check-in with photo identification and you will be asked to leave your belongings in a secure private locker during the flight. You may take only your camera phone and glasses with you aboard the aircraft. If you don’t have a camera, photos are available for sale at the kiosk for $25 each or you may purchase a USB drive of your photos for $35. Please allow 45 minutes prior to your flight time for your security screening check-in and safety briefing.',
    ],
  },
  {
    question: 'Is flying in a helicopter safe?',
    answer: [
      'Yes! Flying with Manhattan Helicopters in our fleet of Bell 407 aircrafts is a very safe experience. The 407 helicopters leverage years of experience and incorporates lessons learned in those aircraft over the last 40 years. The result is technologically safer aircraft that provide a smooth ride a more powerful engine enhanced avionics and technical flight characteristics that make it a pilot’s dream to operate and fly. Our professional pilot aviators are factory-trained with thousands of hours in helicopters and certified by the Federal Aviation Administration (FAA). In 1994 the FAA issued a Special Federal Aviation Regulation (SFAR) 71 for increased helicopter tour safety. The regulation established minimum flight altitudes required clearances from terrain necessitated passenger safety precautions mandated flight performance plans be issued to pilots prior to flight demanded flotation equipment on helicopters touring off shore and required life jackets on passengers flying over water. Manhattan Helicopters goes over and above this regulation’s standards. All of our aircraft are flown at safe minimum altitudes separated from other air traffic and all of our pilots are specially trained to fly in New York City airspace. All of our aircraft are equipped with flotation devices on the skids for flights over water and you will be issued an FAA-approved safety life vest that you will wear around your waist comfortably during the flight. In September 2009 the FAA announced a plan to improve flight safety in the Hudson VFR corridor. The VFR corridor height was standardized to 1,300 feet and previously suggested items such as operating landing lights and cruising below 140 knots were marked as mandatory. All helicopter and airplane pilots are now required to self-announce their position and have appropriate area charts available. Additionally special pilot training courses for both transient pilots and charter pilots are offered to those traveling through New York City. The updated helicopter tour routes now create a seamless flow of sightseeing air traffic as all tours are required to depart from the Downtown Manhattan Heliport and follow the same tour routes. The new tour routes allows closer views of the following:',
    ],
    list: [
      'Statue of Liberty',
      'Freedom Tower',
      'Governor’s Island',
      'Ellis Island',
      'Staten Island Ferry',
      'Brooklyn Bridge',
      'Verrazano Bridge',
      'Wall Street',
      'Times Square',
      'Chrysler Building',
      'U.S.S. Intrepid',
      'George Washington Bridge',
      'Central Park',
      'and many more!',
    ],
  },
  {
    question: 'Who else is flying in the helicopter with me?',
    answer: [
      'You will either fly with three other passengers or five other passengers depending on the aircraft dispatched that day. Aircraft are chosen for passengers based on weight and balance to maximize safety and security. If you reserved your seat with other people they will fly with you. Due to weight and balance they may not sit next to you aboard the aircraft but we always strive to keep groups together. Safety and a balanced center of gravity is first priority when it comes to seating arrangements.',
    ],
  },
  {
    question: 'What type of helicopter will I take?',
    answer: [
      'Our fleet includes luxurious six-passenger Bell 407s and beautiful four-passenger Bell 206B Jet Rangers. Additional aircraft can be dispatched to accommodate large groups. All groups will be split into four passengers or six passengers. See our Aircraft page to view the helicopters.',
    ],
  },
  {
    question: 'How is seating in the helicopter arranged?',
    answer: [
      'Seating in the helicopter is arranged by weight and balance to maximize safety and security. Persons with disabilities will be accommodated accordingly.',
    ],
  },
  {
    question: 'May I choose my aircraft or my seat?',
    answer: [
      'There are multiple seats in the helicopters each with their own spectacular view. Due to weight and balance restrictions we must seat our passengers accordingly to balance the helicopter’s center of gravity. Please advise us of any disabilities prior to departure so we can accommodate you.',
    ],
  },
  {
    question: 'What happens if there is bad weather?',
    answer: [
      'Manhattan Helicopters will not conduct air tours in bad weather that impacts our safe operation of the helicopter. If you have any weather concerns please contact our reservations department at +1 (917) 720-4659 or toll-free at (888) 690-8513. They are in contact with Flight Operations at all times regarding hazardous weather conditions.',
    ],
  },
  {
    question:
      'Are there any other circumstances where my helicopter tour flight would be delayed?',
    answer: [
      'Our goal is to fly you on time or ahead of schedule. A flight may be delayed due to intermittent weather conditions a maintenance issue that was unplanned or as a result of some other operational issue beyond our control. Our Operations personnel will keep you informed and provide you with updates or the opportunity to reschedule should you require that option.',
    ],
  },
  {
    question: 'Why are we required to show up 45 minutes prior to flight time?',
    answer: [
      'Prior to flight you will go through a security screening then check in with the reservations desk. You will then be asked to place your belongings in a private secure locker and use the restroom if necessary. Passengers will then be weighed and assigned a flight accordingly. After that you will watch a safety video and listen to a verbal safety briefing from a member of our aircraft loading crew. The crewmember will then outfit each passenger with a life vest. This process takes about 45 minutes so checking in 45 minutes to departure is required.',
    ],
  },
  {
    question: 'What can I bring on the helicopter?',
    answer: [
      'You are permitted to bring a camera phone and glasses/sunglasses aboard the aircraft. Purses, bags, handbags, camera bags, scarves, hats and other loose items of clothing will need to stay at the heliport in a private secure locker. There’s a $2 locker fee.',
    ],
  },
  {
    question: 'Will I be able to take pictures or video?',
    answer: [
      'You may take pictures or video once aboard the aircraft. Taking pictures on the heliport ramp while walking to the helicopter is strictly prohibited.',
    ],
    bolded:
      'Taking pictures on the heliport ramp while walking to the helicopter is strictly prohibited.',
  },
  {
    question: 'How is the tour narrated?',
    answer: [
      'We are the only helicopter tour company to offer you guided tour narration in nine languages (two at a time) through a premium aviation headset. The pre-recorded narration allows for your pilot to focus on communicating with air traffic control in busy New York City airspace. Don’t worry our pilots are VERY fun and will chime in often!',
    ],
  },
  {
    question: 'Will my helicopter tour experience be fun?',
    answer: [
      'We can promise you from the time you book your reservation to the time you ride in our helicopters to the time you leave the heliport you will have the most fun of your life flying with Manhattan Helicopters!',
    ],
  },
  {
    question: 'What if I want to fly with just my family?',
    answer: [
      'Private helicopter tours are also available. The six-seat helicopter Bell 407 can be rented for a 30-minute exclusive private tour of New York City also. Private helicopter tours are perfect fits for birthdays, wedding proposals, anniversaries and more! You will see over 30 of New York City’s most historical and breathtaking sights from the comfort of your leather seat looking out your own private window. Please call our reservations department at +1 (917) 720-4659 or toll-free at (888) 690-8513 to book your private helicopter tour!',
    ],
  },
  {
    question: 'Do you recommend any hotels in the area?',
    answer: [
      'For hotel accommodations we recommend, New York Marriott at the Brooklyn Bridge.  https://www.marriott.com/hotels/travel/nycbk-new-york-marriott-at-the-brooklyn-bridge/',
    ],
    anchored:
      'https://www.marriott.com/hotels/travel/nycbk-new-york-marriott-at-the-brooklyn-bridge/',
  },
  {
    question: 'Other Important Information',
    answer: [
      '*Pricing is per seat. Each helicopter is filled with 6 passengers. There is a $40 per person heliport fee as mandated by heliport. Cancellations made within 24 hours of the scheduled departure time as well as no-shows will incur 100% of tour charges. Please contact Manhattan Helicopters at least 24 hours in advance and we will re-schedule your tour at no cost. Late arrivals will be addressed on a case-by-case basis depending on seating and aircraft availability. Reservations made at the heliport forfeit their right to cancel after payment has been made. A deposit may be required to guarantee seats. 300 lbs max weight per passenger. Passengers over 250lbs will incur an additional fee. The scheduled duration of our tours may vary based on flight routing and weather conditions. Manhattan Helicopters reserves the right to amend the flight paths without notice. All passengers must pass a metal detector and present a government-issued ID for security purposes. Prices are subject to change without notice. Management reserves the right to refuse boarding to a passenger or to upgrade passengers at any time. Manhattan Helicopters reserves the right to alter or terminate any flights due to security maintenance, aircraft availability, emergencies, weather, or acts of God.',
    ],
  },
];

const Faq = () => {
  useScrollTop();

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

  const StyleText = ({ text, bolded, anchored }) => {
    const textArray = text.split(
      bolded ? bolded : anchored ? anchored : undefined
    );

    return (
      <>
        {textArray.map((item, index) => (
          <span key={index}>
            {item}
            {index !== textArray.length - 1 && bolded && <b>{bolded}</b>}
            {index !== textArray.length - 1 && anchored && (
              <a href={anchored} style={{ color: '#353437' }}>
                {anchored}
              </a>
            )}
          </span>
        ))}
      </>
    );
  };

  const faqInfoAccordion = (faqList) => (
    <div className={styles.faqInfo}>
      {faqList.map((faq) => (
        <Accordion transition transitionTimeout={250} key={faq.question}>
          <AccordionItem header={faq.question}>
            {faq.answer.map((answer, i) => (
              <p key={i}>
                {StyleText({
                  text: answer,
                  bolded: faq.bolded,
                  anchored: faq.anchored,
                })}
              </p>
            ))}
            {faq.list?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );

  const faqInfo = (
    <div>
      <h3 className="faq-info-title">
        <FormattedMessage id="faq.info.title" defaultMessage="faq" />
      </h3>
      {faqInfoAccordion(faqList)}
    </div>
  );

  const faqContactUsForm = (
    <form className="faq-contact-us-form">
      <h3 className="contact-us-form-title">
        <FormattedMessage
          id="faq.contact-us-form.title"
          defaultMessage="Still Have Questions?"
        />
      </h3>
      <div className="contact-us-input-container">
        <label htmlFor="name" className="contact-us-input-label">
          <FormattedMessage id="contact-us-form.name" defaultMessage="Name" />
        </label>
        <input type="text" id="name" name="name" className="contact-us-input" />
      </div>
      <div className="contact-us-input-container">
        <label htmlFor="email" className="contact-us-input-label">
          <FormattedMessage id="contact-us-form.email" defaultMessage="Email" />
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="contact-us-input"
        />
      </div>
      <div className="contact-us-input-container">
        <label htmlFor="phone" className="contact-us-input-label">
          <FormattedMessage id="contact-us-form.phone" defaultMessage="Phone" />
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
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
    </form>
  );

  return (
    <main className="page-container">
      <TopImageSection
        title={
          <FormattedMessage
            id="faq.title"
            defaultMessage="Frequently Asked Questions"
          />
        }
      />
      <div className="faq-container">
        <div className="faq-info-ctc-container">
          {faqInfo}
          {faqContactUsForm}
        </div>
      </div>
    </main>
  );
};

export default Faq;
