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

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div className="absolute top-[48px] md:top-[53px] -left-[147px] md:-left-[193px] w-[240px] z-10 text-start flex">
            {options.map((option, index) => (
              <div
                key={index}
                className="bg-[#060d17] px-5 py-2.5 hover:underline"
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
    <ul className="pb-96 px-5 bg-[#060d17]">
      <li className="text-[#b5b7ba] font-semibold pt-2.5 pb-0 mb-2.5  cursor-text border-b-1 border-[#b5b7ba]">
        <FormattedMessage
          id={`header.navbar.menu.${menuItems[1].title}`}
          defaultMessage="Plane Tours"
        />
      </li>
      {subMenus[1].map((subMenu) => {
        return (
          <Link to={subMenu.url} key={subMenu.title}>
            <li
              className="bg-[#060d17] py-2.5  hover:underline"
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
      <li className="text-[#b5b7ba] font-semibold pt-6 pb-0 mb-2.5  cursor-text border-b-1 border-[#b5b7ba]">
        <FormattedMessage
          id={`header.navbar.menu.${menuItems[2].title}`}
          defaultMessage="More"
        />
      </li>

      {subMenus[2].map((subMenu) => {
        return (
          <Link to={subMenu.url} key={subMenu.title}>
            <li
              className="bg-[#060d17] py-2.5  hover:underline"
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
          <div className="hidden md:block">{NavBarDesktop}</div>

          <div className="md:hidden flex items-center gap-4">
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
                <div className="absolute z-10 left-0 top-[75px] w-full">
                  {NavBarMobile}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
