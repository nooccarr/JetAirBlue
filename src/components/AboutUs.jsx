import TopImageSection from "./TopImageSection";
const reasons = ['10+ Years of Tour Experience', 'Affordable Prices', 'Great Customer Service', 'Modern Helicopters', 'Our friendly staff and personable pilots will go out of their way to make sure you feel comfortable and have fun throughout the entire flight.', 'There is No Language Barrier', 'Having given New York City helicopter tours for years we understand that the city is a true melting pot of cultures. This is why we are proud to offer tours in multiple languages'];
const languages = ['English', 'Korean', 'Chinese', 'Japanese', 'Portugese', 'Spanish'];
const captains = ['Raffaele Molfetta', 'Adam Chunn', 'Dillon Schroder', 'Matthew Layden', 'Benjamin Bodnar', 'Michael Conte', 'Laura Douvier', 'Jonah Garber', 'Dewayne Goar', 'Wojciech Grodnicki', 'Edward Huerta Jr', 'Jena Kendall', 'Aldan McNeil', 'Alexander Ralston', 'Robert Rodgame', 'David Sundlof', 'Moises Torres'];
const staffs = [
  { position: 'CEO', name: 'Itai Shoshani' },
  { position: 'Director of Operations', name: 'Ralph Molfetta' },
  { position: 'Chief Pilot', name: 'Adam Chunn' },
  { position: 'Assistant Chief Pilot', name: 'Dillon Schroder' },
  { position: 'Training Captain', name: 'Matthew Layden' },
  { position: 'Fleet Manager', name: 'Manny Nalawatta' },
  { position: 'General Manager', name: 'Melana Mallah' },
  { position: 'Accounting Clerk', name: 'Simone De Freitas' },
  { position: 'Charter Flight Coordinator Supervisor', name: 'Daniel Vargas' },
  { position: 'Lead Charter Coordinator', name: 'Cleo David' },
  { position: 'Ramp Agents Supervisor', name: 'Osvaldo Vigo' },
  { position: 'Operations Coordinator', name: 'Omar Korayem' },
  { position: 'Operations Coordinator', name: 'Leo LeBrun' }
]

const AboutUs = () => {



  const aboutUsIntro = () => (
    <div className='about-us-intro-section'>
      <div className='about-us-intro-text-container'>
        <h3 className='about-us-title'>who are we?</h3>
        <p className='about-us-description'>Our team of professionals at Manhattan Helicopters cares about the experience our clients have. We are committed to having you walk away happy, satisfied and in awe of your one-of-a-kind helicopter tour of New York City. While there are a handful of different Manhattan helicopter tours from which you can choose from, not all of the companies should be entrusted with your experience and safety. Take the guesswork out of choosing a tour company, by allowing Manhattan Helicopters to provide you with an affordable, safe, unforgettable New York City experience.</p>
      </div>
      <div className='about-us-intro-image-container'>
        <img src='https://placehold.co/200x200' />
      </div>
    </div>
  );

  const aboutUsInfoSectionOne = () => (
    <div className='about-us-info-section-container'>
      <h3 className='about-us-title'>Excellence Through Service</h3>
      <p className='about-us-description'>Serving both tourists and locals since 2006, we were recently awarded the TripAdvisor Certificate of Excellence. This means you, our customers, wrote wonderful reviews to make us a top-rated company. As a locally-owned company, we have a true understanding of New York City itself and are committed to making sure you learn its history while creating a life-long memory.</p>
    </div>
  );

  const aboutUsInfoSectionTwo = () => (
    <div className='about-us-info-section-container'>
      <h3 className='about-us-title'>There are a host of reasons to trust us as the premium source of Manhattan helicopter tours:</h3>
      <ul className='about-us-ul'>
        {reasons.map((reason, index) => <li key={index}>{reason}</li>)}
      </ul>
      <p className='about-us-description'>Moreover, as part of our dedicated, top-of-the-line customer service, we will always take into consideration customers who have never flown in a helicopter. We understand that your first time may make you slightly nervous, which is why our friendly staff and personable pilots will go out of their way to make sure you feel comfortable and at ease throughout the entire flight.</p>
    </div>
  );

  const aboutUsInfoSectionThree = () => (
    <div className='about-us-info-section-container'>
      <h3 className='about-us-title'>There is No Language Barrier</h3>
      <p className='about-us-description'>Having given New York City helicopter tours for years, we understand that the city is a true melting pot of cultures. This is why we are proud to offer tours in multiple languages.</p>
      <strong className='about-us-bold'>The languages we offer include:</strong>
      <ul className='about-us-ul'>
        {languages.map((language, index) => <li key={index}>{language}</li>)}
      </ul>
      <p className='about-us-description'>Trust your helicopter experience to us! Be sure to call us today at 212-845-9822 or 866-592-9655  to get more information on your exciting helicopter tour.</p>
      <p className='about-us-description'>Trust your helicopter experience to us!</p>
    </div>
  );

  const crewStaffList = () => (
    <div className='crew-staff-container'>
      <div className='grid-item-1'>
        <h3 className='about-us-title'>Crew</h3>
        {captains.map((captain, index) => (
          <h5 key={index} className='crew-li'>Captain: {captain}</h5>
        ))}
      </div>
      <div className='grid-item-2'>
        <h3 className='about-us-title'>Jet Air Blue Staff</h3>
        <ul className='staff-ul'>
          {staffs.map((staff, index) => (
            <li key={index}>
              <strong>{staff.position}: </strong>
              {staff.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  return (
    <main className='page-container'>
      <TopImageSection title='About Jet Air Blue Planes' />
      <div className='about-us-container'>
        {aboutUsIntro()}
        {aboutUsInfoSectionOne()}
        {aboutUsInfoSectionTwo()}
        {aboutUsInfoSectionThree()}

        {crewStaffList()}
      </div>
    </main>
  );
};

export default AboutUs;