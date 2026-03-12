import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link className='linklogo' to="/home">
              <img src="\logo.png" alt="Logo"/>
            </Link>
          </li>

        <li><Link to="/home">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        <li className="navbarleft">
          <Link to="/about">About Us</Link>
        </li>

        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </div>
    </nav>
    
  );
}



export default App;