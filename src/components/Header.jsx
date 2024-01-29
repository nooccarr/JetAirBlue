import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useContext, useEffect, useState } from 'react';
import { Context } from './contextWrapper';
import { FormattedMessage } from 'react-intl';
import Menu from '../assets/svgs/menu.svg';
import UsFlag from '../assets/svgs/us-flag.svg';
import KrFlag from '../assets/svgs/kr-flag.svg';

const Header = () => {
  const context = useContext(Context);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    const onWindowResize = () => {
      window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="header-logo">
          {/* <img src='/images/logo.png' alt='logo' /> */}
          jet air blue
        </Link>
        {!isMobile && <NavBar />}
        <div>
          {!isMobile && (
            <button className="header-button">
              <FormattedMessage
                id="button.book-a-plane-tour"
                defaultMessage="Book a Plane Tour"
              />
            </button>
          )}
          {isMobile && (
            <img className="header-menu-button" src={Menu} alt="Menu" />
          )}
          <div className="inline ps-4 text-[13px] font-bold">
            <select
              className="text-white bg-black focus-visible:outline-none hover:underline hover:cursor-pointer"
              value={context.locale}
              onChange={context.selectLanguage}
            >
              <option value="ko-KR" className="">
                <img className="" src={KrFlag} alt="Korean Flag" />
                한국어
              </option>
              <option value="en-US" className="">
                <img className="" src={UsFlag} alt="United States Flag" />
                ENGLISH
              </option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
