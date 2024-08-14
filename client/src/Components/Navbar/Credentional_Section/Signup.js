import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Signup.css';

const Signup = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 

        setSuccessMessage('');
        setErrorMessage('');

        // Validate form inputs
        if (!firstname || !lastname || !username || !password || !confirmPassword) {
            setErrorMessage('Please fill out all fields');
            setLoading(false); // Set loading state back to false
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            setLoading(false); // Set loading state back to false
            return;
        }

        try {
            // Make signup request
            await axios.post('http://localhost:5001/signup', { firstname, lastname, username, password });
            console.log('Signup successful');
            setSuccessMessage('Signup successful'); // Set success message
        } catch (error) {
            console.error('Error signing up:', error);
            setErrorMessage('Error signing up. Please try again later.');
        } finally {
            setLoading(false); // Set loading state back to false
        }
    };

    return (
        <div className='signup-back'>
            <div className='container2 container'>
                <h2 className='sign'>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    <input type="text" placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    <button type="submit" disabled={loading}>Signup</button>
                    {loading && <span>Loading...</span>}
                </form>
                <p>Already have an account? <Link to="/" className='sign-link'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;
