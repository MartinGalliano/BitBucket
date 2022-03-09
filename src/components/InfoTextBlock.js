import React from "react";

const InfoTextBlock = ({ text, distance, usingMetric,time,elevation, elapsed}) => {
    const units = usingMetric ? "Kilometers" : "Miles";
    const totalDistance = usingMetric ? distance.kms : distance.miles;

    return (
        <div className="mt-5 orange-border w-100 pos-absolute">
            <div className="centered-text">
                <h5 className="sport-info-orange">{text}</h5>
                <h5 className="bold-poppins">{totalDistance}  {units}</h5>
                <h5 className="sport-info-black"> Accumulated time:  {time}</h5>
                <h5 className="sport-info-black"> Elevation:  {elevation}</h5>
                <h5 className="sport-info-black"> Elapsed time:  {elapsed}</h5>
            </div>
        </div>
    );
};

export default InfoTextBlock;