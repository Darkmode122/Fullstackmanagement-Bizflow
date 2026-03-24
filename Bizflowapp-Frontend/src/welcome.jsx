import { Link } from 'react-router-dom';
import './welcome.css'
function Welcome() {
    return (
        <div>
        <nav>
      <div>
        <ul>
          <li>
            <Link className='linklogo' to="/home">
              <img src="/logo.png" alt="Logo"/>
            </Link>
          </li>
        <li className="navbarleft">
          <Link to="/signout">Sign Out</Link>
        </li>
        
        </ul>
     </div>
       </nav>
    <div className="welcome-container">
            <h1>Welcome to Bizflowapp!</h1>
            <p>Your one-stop solution for efficient business workflow management.</p>
        </div>
    </div>
  );
}
export default Welcome;
