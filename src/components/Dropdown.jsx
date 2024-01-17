import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="dropdown-menu-item">
          <Link to={submenu.url}>
            <FormattedMessage
              id={`header.navbar.menu.${submenu.title}`}
              defaultMessage={submenu.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
