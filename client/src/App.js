import React from 'react';
import { Routes, Route, BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import { useAuth0, Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navigation_Bar/Navbar';
import Home_Page from './Components/Navbar/Navigation_Bar/Home_Page';
import About from './Components/Navbar/About_Section/About';
import Health from './Components/Navbar/Health_Section/Health';
import Contact from './Components/Navbar/ChatBot_Section/Contact';
import Footer from './Components/Navbar/Navigation_Bar/Footer';
import Signup from './Components/Navbar/Credentional_Section/Signup';
import Login from './Components/Navbar/Credentional_Section/Login';
import ReactDOM from 'react-dom';
import History from './Components/Navbar/History_Section/History';
import Profile from './Components/Navbar/User_Profile/Profile';

const AppContent = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth0();
  const hideNavbar = location.pathname === '/signup' || location.pathname === '/';

  return (
    <>
      {!hideNavbar && <Navbar/>}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home_Page/> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home_page" element={<Home_Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/health" element={<Health />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer />
    </>
  );
}


const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const domain = 'http://localhost:3000';  // Ensure these are set in your .env file


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;