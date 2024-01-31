import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useContext, useEffect, useState } from 'react';
import { Context } from './contextWrapper';
import { FormattedMessage } from 'react-intl';
import Menu from '../assets/svgs/menu.svg';
import UsFlag from '../assets/svgs/us-flag.svg';
import KrFlag from '../assets/svgs/kr-flag.svg';

const options = [
  { value: 'ko-KR', label: '한국어', flag: KrFlag },
  { value: 'en-US', label: 'ENGLISH', flag: UsFlag },
];

const Header = () => {
  const context = useContext(Context);

  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    const onWindowResize = () => {
      window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  const FlagDropdown = () => {
    return (
      <div className="inline-block relative w-24 hover:cursor-pointer text-start">
        <div className="hover:underline" onClick={() => setOpen(!open)}>
          {context.locale === 'ko-KR' ? '한국어' : 'ENGLISH'}
        </div>
        {open && (
          <div className="absolute z-10 text-start bg-black">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  context.selectLanguage(option);
                  setOpen(false);
                }}
              >
                <img
                  className="inline-block me-2"
                  src={option.flag}
                  alt=""
                  width="20"
                  height="20"
                />
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
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
            <>
              <div className="inline text-[13px] font-bold">
                <FlagDropdown />
                {/* <select
              className="text-white bg-black focus-visible:outline-none hover:underline hover:cursor-pointer"
              value={context.locale}
              onChange={context.selectLanguage}
            >
              <option value="ko-KR" className="">한국어</option>
              <option value="en-US" className="">ENGLISH</option>
            </select> */}
              </div>
              <button className="header-button">
                <FormattedMessage
                  id="button.book-a-plane-tour"
                  defaultMessage="Book a Plane Tour"
                />
              </button>
            </>
          )}
          {isMobile && (
            <img className="header-menu-button" src={Menu} alt="Menu" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
