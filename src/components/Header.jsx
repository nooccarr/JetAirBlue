import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useContext } from 'react';
import { Context } from './contextWrapper';
import { FormattedMessage } from 'react-intl';

const Header = () => {
  const context = useContext(Context);

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="header-logo">
          {/* <img src='/images/logo.png' alt='logo' /> */}
          jet air blue
        </Link>
        <NavBar />
        <div>
          <button className="header-button">
            <FormattedMessage
              id="button.book-a-plane-tour"
              defaultMessage="Book a Plane Tour"
            />
          </button>
          <select value={context.locale} onChange={context.selectLanguage}>
            <option value="en-US">English</option>
            <option value="ko-KR">한국어</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
