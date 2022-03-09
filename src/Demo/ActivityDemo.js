import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserProfile, setUserActivities } from '../actions';
import Activity from '../pages/Activity';
import Loading from '../components/Loading';
import { demoProfileData, demoRecentActivitiesData} from './demoData';

const ActivityDemo = () => {
    const [finishedLoading, setFinishedLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserProfile(demoProfileData));
        dispatch(setUserActivities(demoRecentActivitiesData));
        setTimeout(() => {
            setFinishedLoading(true);
        }, 1500);
    });

    if (finishedLoading === false) {
        return (
            <div>
                <Loading text={'Talking to Demo.'} />
            </div>
        );
    }
    return (
        <div className="container p-0">
            <Activity />
        </div>
    );
};

export default ActivityDemo;