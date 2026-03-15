import { useState } from 'react';
function Signin() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='form-container'>
     <form onSubmit={handleSubmit}>
      <label className='email'>Email:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label >
      <label className='password'>Password:
        <input
          type="password" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <input className="submitbutton" type="submit" />
    </form>
    </div>
  ) 
}
export default Signin;