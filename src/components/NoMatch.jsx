import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <h1>404</h1>
      <h3>Sorry, the page not found</h3>
      <p>
        <Link to="/">Go to the Home page</Link>
      </p>
    </>
  );
};

export default NoMatch;