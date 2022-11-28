import './Navbar.css';

import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <nav className="Nav">
      <ul className="Nav__toolbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <Button value={'Nav__Button'}/>
    </nav>
  );
}

export default Navbar;