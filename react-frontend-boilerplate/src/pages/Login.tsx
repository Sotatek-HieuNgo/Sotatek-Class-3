import axios from 'axios';
import React, { useState } from 'react';
import Header from '../components/Header';

const initialState = {
    username: '',
    password: '',
};

const Login = () => {
  const [input, setInput] = useState(initialState);

  const { username, password } = input;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
  };

  const handleLogin = async () => {
      const {data} = await axios.post('http://localhost:5000/api/v1/auth/login', { username, password });
      if (data.code === 200) {
          localStorage.setItem('isLogged', 'true');
          window.location.href = '/';
      }
  };

  const handleClear = () => {
      setInput(initialState);
  };
  
  return (
      <div className="App">
          <h1>Sign In</h1>
          <label>Username</label>
          <input type="text" name="username" value={username} onChange={handleInput} />
          <label>Password</label>
          <input type="text" name="password" value={password} onChange={handleInput} />
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleClear}>Clear</button>
      </div>
  );
};

export default Login;