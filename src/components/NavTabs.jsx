import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs d-flex align-items-end">
      <li className="nav-item border rounded-top">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item border rounded-top">
        <Link
          to="contact"
          className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item border rounded-top">
        <Link
          to="portfolio"
          className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item border rounded-top">
        <Link
          to="resume"
          className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
