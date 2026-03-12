import { useState } from 'react';
function Signin() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name);
  };

  return (
     <form onSubmit={handleSubmit}>
      <label>Email:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>Password:
        <input
          type="password" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
export default Signin;