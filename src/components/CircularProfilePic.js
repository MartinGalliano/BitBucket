import React from "react";

const CircularProfilePic = ({ imageURL }) => {
    return (
        <div className="circular--portrait mx-auto p-0 container ">
            <img src={imageURL} alt="profile" />
        </div>
    );
};

export default CircularProfilePic;