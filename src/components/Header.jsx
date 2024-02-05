import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useContext, useEffect, useState } from 'react';
import { Context } from './contextWrapper';
import { FormattedMessage } from 'react-intl';
import Menu from '../assets/svgs/menu.svg';
import UsFlag from '../assets/svgs/us-flag.svg';
import KrFlag from '../assets/svgs/kr-flag.svg';
import Language from '../assets/svgs/language.svg';

const options = [
  { value: 'ko-KR', label: '한국어', flag: KrFlag },
  { value: 'en-US', label: 'ENGLISH', flag: UsFlag },
];

const Header = () => {
  const context = useContext(Context);

  const [isMobile, setIsMobile] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    const onWindowResize = () => {
      window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  const FlagDropdown = () => {
    return (
      <div className="inline-block relative hover:cursor-pointer text-start">
        <div
          className="hover:underline"
          onClick={() => !isMenuOpen && setIsLanguageOpen(!isLanguageOpen)}
        >
          {/* {context.locale === 'ko-KR' ? '한국어' : 'ENGLISH'} */}
          <img
            className="inline-block me-2"
            src={Language}
            alt=""
            width="20"
            height="20"
          />
        </div>
        {isLanguageOpen && (
          <div className="absolute z-10 text-start">
            {options.map((option, index) => (
              <div
                key={index}
                className="bg-[#060d17] last:rounded-b-md w-32 -mx-12 px-5 py-2.5 hover:underline"
                onClick={() => {
                  context.selectLanguage(option);
                  setIsLanguageOpen(false);
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
        <Link to="/" className="header-logo my-4">
          {/* <img src='/images/logo.png' alt='logo' /> */}
          jet air blue
        </Link>
        {!isMobile && <NavBar />}
        <div className="my-4">
          {!isMobile && (
            <>
              <button className="header-button me-10">
                <FormattedMessage
                  id="button.book-a-plane-tour"
                  defaultMessage="Book a Plane Tour"
                />
              </button>
              <div className="inline text-[13px] font-bold">
                <FlagDropdown />
              </div>
            </>
          )}
          {isMobile && (
            <>
              <div className="inline text-[13px] font-bold me-10 lg-me-15">
                <FlagDropdown />
              </div>
              <div
                onClick={() => !isLanguageOpen && setIsMenuOpen(!isMenuOpen)}
                className={`inline-block border border-black hover:border-white ${
                  isMenuOpen && 'border-white'
                } px-1 rounded-md hover:cursor-pointer`}
              >
                <img
                  className="header-menu-button inline-block"
                  src={Menu}
                  alt="Menu"
                />
                {isMenuOpen && (
                  <div className="absolute z-10 mt-5">
                    <NavBar dropdown="true" />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
