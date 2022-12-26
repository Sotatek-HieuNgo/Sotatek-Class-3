import React, { useState } from 'react';
import Header from '../components/Header';

const initialState = {
    username: '',
    password: '',
    confirmPassword: '',
};

const Register = () => {
    const [input, setInput] = useState(initialState);

    const { username, password } = input;

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleLogin = () => {};

    const handleClear = () => {
        setInput(initialState);
    };

    return (
        <div className="App">
            <h1>Sign Up</h1>
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={handleInput} />
            <label>Password</label>
            <input type="text" name="password" value={password} onChange={handleInput} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    );
};

export default Register;
