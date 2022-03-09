import {React} from "react";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import HeaderBlock from "../components/HeaderBlock";


const Recent = () => {
    const userProfile = useSelector((state) => state.userProfile);
    if (!userProfile) {
        window.location = '/';
    }
    const RecentActivities = useSelector(state => state.userActivities);
/* console.log(RecentActivities); */
const recentRun = RecentActivities.recentRuns;
const recentRide = RecentActivities.recentRides;
const recentSwim = RecentActivities.recentSwims;
    
return (
        <div className="d-flex justify-content-center align-items-center text-center mt-3 w-100">
            <div className="w-100 px-4">
                <HeaderBlock />
                <br/>
                <h1> Your recent Activities</h1>
                {userProfile.id !== 28256637 ?
                <Link className="recentA" to = '/yourdistance' >Back</Link>:<Link className="recentA" to = '/demo' >Back</Link>}
                <br/>
                <div className="mt-5 orange-border w-100 pos-absolute">
            <div className="centered-text">
                <h5 className="sport-info-orange">Running</h5>
                <h5 className="bold-poppins">{recentRun.kms} kilometres </h5>
                <h5 className="sport-info-black"> Your times:  {recentRun.time}</h5>
                <h5 className="sport-info-black"> Elevation:  {recentRun.elevation}</h5>
                <h5 className="sport-info-black"> Elapsed time:  {recentRun.elapsed}</h5>
            </div>
        </div>

        <div className="mt-5 orange-border w-100 pos-absolute">
            <div className="centered-text">
                <h5 className="sport-info-orange">Riding</h5>
                <h5 className="bold-poppins">{recentRide.kms} kilometres </h5>
                <h5 className="sport-info-black"> Your times:  {recentRide.time}</h5>
                <h5 className="sport-info-black"> Elevation:  {recentRide.elevation}</h5>
                <h5 className="sport-info-black"> Elapsed time:  {recentRide.elapsed}</h5>
            </div>
        </div>
<div className="mt-5 orange-border w-100 pos-absolute">
            <div className="centered-text">
                <h5 className="sport-info-orange">Swimming</h5>
                <h5 className="bold-poppins">{recentSwim.kms} kilometres </h5>
                <h5 className="sport-info-black"> Your times:  {recentSwim.time}</h5>
                <h5 className="sport-info-black"> Elevation:  {recentSwim.elevation}</h5>
                <h5 className="sport-info-black"> Elapsed time:  {recentSwim.elapsed}</h5>
            </div>
        </div>
        
            </div>
        </div>
    );
};


export default Recent;