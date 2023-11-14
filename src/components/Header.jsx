import NavBar from './NavBar';

const Header = () => {
  return (
    <header>
      <div className='nav-area'>
        <a href='/' className='logo'>
          Logo
          {/* <img src='/images/logo.png' alt='logo' /> */}
        </a>
        <NavBar />
        <button className='btn'>Book a Plane Tour</button>
      </div>
    </header>
  );
};

export default Header;