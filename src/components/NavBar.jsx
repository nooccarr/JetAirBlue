import { menuItems } from './MenuItems';
import MenuItems from './MenuItems.jsx';

const NavBar = () => {
  return (
    <nav>
      <ul className='menus'>
        {menuItems.map((menu, index) => {
          return (
            <MenuItems items={menu} key={index} />
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;