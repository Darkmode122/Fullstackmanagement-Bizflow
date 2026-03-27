import { Link } from 'react-router-dom';
import './welcome.css'
import { useState, useEffect } from 'react';

function Welcome() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => {setData(data)})
      .catch(err => console.log(err));
  }, []);
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
          <li><Link to="/Task">Task Management</Link></li>
          <li className='navbarleft'>
            <Link to="/">Sign Out</Link>
          </li>
        </ul>
     </div>
       </nav>
    <div className="welcome-container">
            <h1>Welcome {data.map(user => user.username).join(', ')} to Bizflowapp!</h1>
            <p>Your one-stop solution for efficient business workflow management.</p>

        </div>
    </div>
  );
}
export default Welcome;
