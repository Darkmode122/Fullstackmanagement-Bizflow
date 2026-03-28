import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'; // import axios
import './welcome.css';

function Welcome() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {

    axios.post('http://localhost:8081/check-session', {}, { withCredentials: true })
    .then(res => {

      if (res.data.valid) {
        setUsername(res.data.username);
      } else {
        navigate('/signin');
      }
    })
    .catch(err => {
      console.error("Session check failed:", err);
      navigate('/signin');
    });
  }, [navigate]);
  const handleLogout = () => {
    axios.post('http://localhost:8081/logout', {}, { withCredentials: true })
      .then(res => {
        if (res.data.status === "Success") {
          navigate('/signin'); // Redirect to login after successful logout
        }
      })
      .catch(err => console.log(err));
  };
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
            <Link to="/" onClick={handleLogout}>
              Sign Out
            </Link>
          </li>
        </ul>
     </div>
       </nav>
    <div className="welcome-container">
            <h1>Welcome {username} to Bizflowapp!</h1>
            <p>Your one-stop solution for efficient business workflow management.</p>

        </div>
    </div>
  );
}
export default Welcome;
