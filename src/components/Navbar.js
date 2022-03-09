import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Navbar = () => {
    const userProfile = useSelector((state) => state.userProfile);
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <h1 className="navbar-brand nav-title nav-text">
                    BitBucket
                </h1>
                <div className="navbar-nav ml-auto">
                {userProfile?
                    <Link
                        className="navbar-brand nav-title nav-text"
                        to="/"
                    >
                        Logout
                    </Link>:null}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;