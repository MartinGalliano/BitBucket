import React from 'react';
import stravaButton4X from '../assets/stravaButton4X.png';
import demoButton4X from '../assets/demoButton4X.png';
import Slider from "../components/Slider";


const UserId = process.env.REACT_APP_CLIENT_ID;


const URL = 'http://localhost:3000/redirect'; 

const scope = 'read';

const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${UserId}&response_type=code&redirect_uri=${URL}/exchange_token&approval_prompt=force&scope=${scope}`;

};

const handleDemoLogin = () => {
    window.location = 'demo';
};

const Home = () => {
    return (
        <div className="justify-content-center align-items-center text-center content-body">
            <div className="mt-5">
              <Slider></Slider>
                <h2 className="navbar-brand nav-title nav-text">
                Check your summary.
                </h2>
                <div>
                    <img
                        src={stravaButton4X}
                        onClick={handleLogin}
                        alt="login"
                        className="login-button mb-3"
                    ></img>
                </div>
                <div>
                    <img
                        src={demoButton4X}
                        onClick={handleDemoLogin}
                        alt="demo login"
                        className="login-button"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Home;
