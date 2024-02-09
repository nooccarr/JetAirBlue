import { Link } from 'react-router-dom';
import { menuItems } from './MenuItems';
import MenuItems from './MenuItems.jsx';
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
          className=""
          onClick={() => !isMenuOpen && setIsLanguageOpen(!isLanguageOpen)}
        >
          <img
            className="inline-block"
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

  const subMenus = menuItems.map((menu) => {
    return menu.submenu;
  });

  const NavBarMobile = (
    <ul>
      <li className="bg-[#060d17] text-[#b5b7ba] font-semibold -mx-52 px-5 py-2.5 -mt-1 cursor-text">
        <FormattedMessage
          id={`header.navbar.menu.${menuItems[1].title}`}
          defaultMessage="Plane Tours"
        />
      </li>
      {subMenus[1].map((subMenu) => {
        return (
          <Link to={subMenu.url}>
            <li
              className="bg-[#060d17] -mx-52 px-5 py-2.5 -mt-1 hover:underline"
              key={subMenu.title}
            >
              <FormattedMessage
                id={`header.navbar.menu.${subMenu.title}`}
                defaultMessage={subMenu.title}
              />
            </li>
          </Link>
        );
      })}
      <li className="bg-[#060d17] text-[#b5b7ba] font-semibold -mx-52 px-5 py-2.5 -mt-1 cursor-text">
        <FormattedMessage
          id={`header.navbar.menu.${menuItems[2].title}`}
          defaultMessage="More"
        />
      </li>
      {subMenus[2].map((subMenu) => {
        return (
          <Link to={subMenu.url}>
            <li
              className="bg-[#060d17] -mx-52 px-5 py-2.5 -mt-1 hover:underline last:rounded-b-md"
              key={subMenu.title}
            >
              <FormattedMessage
                id={`header.navbar.menu.${subMenu.title}`}
                defaultMessage={subMenu.title}
              />
            </li>
          </Link>
        );
      })}
    </ul>
  );

  const NavBarDesktop = (
    <ul className="navbar-menu-container gap-10">
      {menuItems.map((menu, index) => {
        return <MenuItems items={menu} key={index} />;
      })}
      <button className="header-button">
        <FormattedMessage
          id="button.book-a-plane-tour"
          defaultMessage="Book a Plane Tour"
        />
      </button>
      <div className="text-[13px] font-bold flex items-center">
        <FlagDropdown />
      </div>
    </ul>
  );

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="header-logo my-4">
          {/* <img src='/images/logo.png' alt='logo' /> */}
          jet air blue
        </Link>
        <div className="flex gap-10">
          {!isMobile && <div>{NavBarDesktop}</div>}

          {isMobile && (
            <div className="flex items-center gap-4">
              <div className="inline text-[13px] font-bold ">
                <FlagDropdown />
              </div>
              <div
                onClick={() => !isLanguageOpen && setIsMenuOpen(!isMenuOpen)}
                className={`inline-block border border-black ${
                  isMenuOpen && 'border-white'
                } px-1 rounded-md hover:cursor-pointer`}
              >
                <img
                  className="header-menu-button inline-block"
                  src={Menu}
                  alt="Menu"
                />
                {isMenuOpen && (
                  <div className="absolute z-10 mt-5">{NavBarMobile}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
