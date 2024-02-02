import { Link } from 'react-router-dom';
import { menuItems } from './MenuItems';
import MenuItems from './MenuItems.jsx';
import { FormattedMessage } from 'react-intl';

const NavBar = ({ dropdown }) => {
  const subMenus = menuItems.map((menu) => {
    return menu.submenu;
  });

  return (
    <nav>
      {dropdown ? (
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
      ) : (
        <ul className="navbar-menu-container">
          {menuItems.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
          })}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
