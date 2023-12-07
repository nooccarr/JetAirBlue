import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';


const MenuItems = ({ items }) => {
  const [depthLevel, setDepthLevel] = useState(0);
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    }
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
    setDepthLevel(1);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
    setDepthLevel(0);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  }

  return (
    <li
      className='navbar-menu-item'
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.submenu && items.url ? (
        <>
          <button
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 ? (
              items.title
            ) : (
              <>
                <Link to={items.url}>{items.title}</Link>
                {window.innerWidth < 960 ?
                  null :
                  depthLevel > 0 && window.innerWidth > 960 ? (
                    <span className='caret-icon'>
                      <FontAwesomeIcon icon={faCaretUp} />
                    </span>
                  ) : (
                    <span className='caret-icon'>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                  )
                }
              </>
            )}
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      )
      : !items.url && items.submenu ? (
        <>
          <button
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
            >
            {items.title}
            {window.innerWidth < 960 ?
              null :
              depthLevel > 0 && window.innerWidth > 960 ? (
                <span className='caret-icon'>
                  <FontAwesomeIcon icon={faCaretUp} />
                </span>
              ) : (
                <span className='caret-icon'>
                  <FontAwesomeIcon icon={faCaretDown} />
                </span>
              )
            }
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;