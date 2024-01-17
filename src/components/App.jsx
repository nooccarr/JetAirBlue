import { Routes, Route } from 'react-router-dom';
import Wrapper from './contextWrapper';
import Layout from './Layout';
import Home from './Home';
import PlaneTours from './PlaneTours';
import ClassicManhattanPlaneTour from './ClassicManhattanPlaneTour';
import DeluxeManhattanPlaneTour from './DeluxeManhattanPlaneTour';
// import VipManhattanPlaneTour from './VipManhattanPlaneTour';
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
    <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='plane-tours' element={<PlaneTours />} />
          <Route path='classic-manhattan-plane-tour' element={<ClassicManhattanPlaneTour />} />
          <Route path='deluxe-manhattan-plane-tour' element={<DeluxeManhattanPlaneTour />} />
          {/* <Route path='vip-manhattan-plane-tour' element={<VipManhattanPlaneTour />} /> */}
          <Route path='montauk-plane-tour' element={<MontaukPlaneTour />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='faq' element={<Faq />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer />
    </Wrapper>
  );
};

export default App;
