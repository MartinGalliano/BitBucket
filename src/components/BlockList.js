import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

import HeaderBlock from "./HeaderBlock";
import InfoImageBlock from "./InfoImageBlock";
import InfoTextBlock from "./InfoTextBlock";
import SelectionBlock from "./SelectionBlock";

import earth from "../assets/earth.jpg";
import track from "../assets/track.jpg";
import usa from '../assets/usa.jpeg'
import pool from '../assets/pool.jpeg'

import {
    earthLaps,
    trackLaps,
    americaLaps,
    poolLaps
} from "../utils/functions";

const BlockList = () => {
    const userProfile = useSelector((state) => state.userProfile);
   /*  console.log(userProfile); */
    const userActivities = useSelector(state => state.userActivities);
    const metric = useSelector(state => state.metric);
    const sports = useSelector(state => state.sports);
    const totalDistance = useSelector(state => state.totalDistance);
    
    const totalRunDisplay = () => {
        if (sports.includes("running")) {
            return (
                <InfoTextBlock
                    text={'Running'}
                    distance={userActivities.runTotal}
                    usingMetric={metric}
                    time={userActivities.runTotal.time}
                    elevation={userActivities.runTotal.elevation}
                    elapsed={userActivities.runTotal.elapsed}
                />
            );
        }
    };

    const totalRideDisplay = () => {
        if (sports.includes("riding")) {
            return (
                <InfoTextBlock
                    text={"Riding"}
                    distance={userActivities.rideTotal}
                    usingMetric={metric}
                    time={userActivities.rideTotal.time}
                    elevation={userActivities.rideTotal.elevation}
                    elapsed={userActivities.rideTotal.elapsed}
                    />
            );
        }
    };

    const totalSwimDisplay = () => {
        if (sports.includes("swimming")) {
            return (
                <InfoTextBlock
                    text={"Swimming"}
                    distance={userActivities.swimTotal}
                    usingMetric={metric}
                    time={userActivities.swimTotal.time}
                    elevation={userActivities.swimTotal.elevation}
                    elapsed={userActivities.swimTotal.elapsed}   
                />
            );
        }
    };

    // If no sport selected, return "Choose a sport" message
    const pageDisplay = () => {
        if (sports.length === 0) {
            return (
                <h1 className="info-title mt-5">
                    Select a Sport to Continue
                </h1>
            );
        } else {
            return (
                <>
                   {userProfile.id !== 28256637 ?
                   <Link className="recentA" to="/recent">Recent distances</Link>: <Link className="recentA" to="/recentDemo">Recent distances</Link>}  
                    <h1 className="info-title mt-4">Your Totals</h1>
                    {totalRunDisplay()}
                    {totalRideDisplay()}
                    {totalSwimDisplay()}
                    <h1 className="info-title mt-5">How far have you gone?</h1>
                    <InfoImageBlock
                        imageSRC={track}
                        number={trackLaps(totalDistance)}
                        text={"Laps on a Track"}
                        usingMetric={metric}
                        kms={"(400 Meters)"}
                        miles={"(0.25 Miles)"}
                    />
                    <InfoImageBlock
                        imageSRC={pool}
                        number={poolLaps(totalDistance)}
                        text={"Olympic Swimming Pools"}
                        usingMetric={metric}
                        kms={"(50 Meters)"}
                        miles={"(0.03 Miles)"}
                    />
                    <InfoImageBlock
                        imageSRC={usa}
                        number={americaLaps(totalDistance)}
                        text={"Times Across America"}
                        usingMetric={metric}
                        kms={"(4,662 Kms)"}
                        miles={"(2,896 Miles)"}
                    />
                    <InfoImageBlock
                        imageSRC={earth}
                        number={earthLaps(totalDistance)}
                        text={"Around the Earth"}
                        usingMetric={metric}
                        kms={"(40,075 Kms)"}
                        miles={"(24,901 Miles)"}
                    />
                    
                </>
            );
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center text-center mt-3 w-100">
            <div className="w-100 px-4">
                <HeaderBlock />
                <SelectionBlock />
                {pageDisplay()}
            </div>
        </div>
    );
};

export default BlockList;