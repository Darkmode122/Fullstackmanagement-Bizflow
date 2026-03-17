import { useState } from 'react';
function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmitPassword = (e) => {
    e.preventDefault();
  }

  return (
    <div className='form-container'>
     <form onSubmit={handleSubmit}>
      <label className='email'>Email:
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
      <input className="submitbutton" type="submit" />
    </form>
    </div>
  ) 
}
export default Signin;