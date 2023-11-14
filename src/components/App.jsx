import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import PlaneTours from './PlaneTours';
import ManhattanPlaneTour from './ManhattanPlaneTour';
import MontaukPlaneTour from './MontaukPlaneTour';
import AboutUs from './AboutUs';
import Footer from './Footer';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import Faq from './Faq';
import NoMatch from './NoMatch';
import '../styles/app.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='plane-tours' element={<PlaneTours />} />
          <Route path='manhattan-plane-tour' element={<ManhattanPlaneTour />} />
          <Route path='montauk-plane-tour' element={<MontaukPlaneTour />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='faq' element={<Faq />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;