import { useState } from 'react';
import axious from 'axios';
import { useNavigate } from 'react-router-dom';


function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const handleChange = (e) => {
    setUsername(e.target.value);
  };

 const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  axious.post('http://localhost:8081/login', { username, password })
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
}
return (
    <div className='form-container'>
     <form onSubmit={handleSubmit}>
      <label className='username'>Username:
        <input
          type="text" 
          value={username}
          onChange={handleChange}
        />
      </label >
      <label className='password'>Password:
        <input
          type="password" 
          value={password}
          onChange={handleChangePassword}
        />
      </label>
      <button className="submitbutton" type="submit">
        Sign In
      </button>
    </form>
    </div>
  ) 
}
export default Signin;