import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
const Profile = () => {
    const [profile, setProfile] = useState({});
    const [editProfile, setEditProfile] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        currentPassword: '', // New field for password validation
        newPassword: '', // New field for new password
    });

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await axios.get('http://localhost:5001/profile', {
                withCredentials: true,
            });
            setProfile(response.data);
            setFormData({
                username: response.data.username,
                firstname: response.data.firstname,
                lastname: response.data.lastname,
                password: response.data.password,
            });
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        // Validate current password before updating (replace with your backend logic)
        if (!validateCurrentPassword(formData.currentPassword)) {
            console.error('Invalid current password');
            return; // Prevent update if validation fails
        }

        try {
            const updatedData = {
                username: formData.username,
                firstname: formData.firstname,
                lastname: formData.lastname,
                password: formData.password
            };

            if (formData.newPassword) {
                updatedData.newPassword = formData.newPassword;
            }

            await axios.put('http://localhost:5000/profile', updatedData, {
                withCredentials: true,
            });
            setEditProfile(false);
            fetchProfile(); // Refresh profile data after successful update
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const validateCurrentPassword = (currentPassword) => {

        return currentPassword === 'your_placeholder_password'; // Replace with actual validation logic
    };

    return (
        <div className='container my-4'>
            <h2 className='profile-user1'>Profile</h2>
            {editProfile ? (
                <form onSubmit={handleUpdateProfile}>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="password" // Use password type for security
                        name="currentPassword"
                        placeholder="Current Password"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="password" // Use password type for security
                        name="newPassword"
                        placeholder="New Password (Optional)"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                    />
                    <button className='my-2' type="submit">Update Profile</button>
                    <button className='my-2' type="button" onClick={() => setEditProfile(false)}>
                        Cancel
                    </button>
                </form>
            ) : (
                <div className='container my-2'>
                    <p className='profile-user my-4'>Username: {profile.username}</p>
                    <p className='profile-user my-4'>First Name: {profile.firstname}</p>
                    <p className='profile-user my-4'>Last Name: {profile.lastname}</p>
                    <p className='profile-user my-4'>Password: **************</p>
                    <button className='my-2' onClick={() => setEditProfile(true)}>Edit Profile</button>
                </div>
            )}
        </div>
    );
};

export default Profile;
