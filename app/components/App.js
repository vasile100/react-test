import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { footer } from '../styles/footer.scss';

const App = ({ children }) =>
  <div>
    <footer className={footer}>
      <Link to="/" className="btn btn-primary">Show Star Wars Characters</Link>
      <Link to="/about" className="btn btn-primary">About</Link>
    </footer>
    <hr></hr>
    <h1>Star Wars Characters List</h1>
    {children}
  </div>;

App.propTypes = {
    children: PropTypes.object,
};

export default App;
