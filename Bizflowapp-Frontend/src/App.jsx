import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <nav>
        <div>
          <ul>
            <li>
              <Link className='linklogo' to="/">
                <img src="/logo.png" alt="Logo"/>
              </Link>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className="navbar-left">
             <Link to="/about">About Us</Link>
            </li>
            <li>
             <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default App;
