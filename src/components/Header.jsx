import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header>
      <div className='nav-area'>
        <Link to='/' className='logo'>
          Logo
          {/* <img src='/images/logo.png' alt='logo' /> */}
        </Link>
        <NavBar />
        <button className='btn'>Book a Plane Tour</button>
      </div>
    </header>
  );
};

export default Header;