import { React } from 'react';
import CircularProfilePic from './CircularProfilePic';
import { useSelector } from 'react-redux';
import blank from '../assets/blank.gif';

const HeaderBlock = () => {
    const userProfile = useSelector((state) => state.userProfile);
    const profileImage = userProfile.profile || blank;
    const firstName = userProfile.firstname || 'Guest';
    return (
        <div className="mt-5">
            <CircularProfilePic imageURL={profileImage}  />
        <h1>Hello, {firstName} </h1>
        </div>
    );
};

export default HeaderBlock;
