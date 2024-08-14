import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';

// Configure Axios to include credentials with requests
axios.defaults.withCredentials = true;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/login', { username, password });
            console.log('Login successful');
            console.log(response.data);
            navigate('/home_page');
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Incorrect username or password');
        }
    };

    return (
        <div className='login-back'>
            <div className='container container1'>
                <h2 className='sign'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className='my-2'>Login</button>
                    {errorMessage && <div className="alert alert-danger my-2">{errorMessage}</div>}
                </form>
                <button className='my-2'>
                    <Link to="/signup" className='login-link'>Signup</Link>
                </button>
            </div>
        </div>
    );
}

export default Login;
