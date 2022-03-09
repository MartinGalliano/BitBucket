import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import StravaRedirect from "../pages/StravaRedirect";
import YourDistance from "../pages/YourDistance";
import YourDistanceDemo from '../Demo/YourDistanceDemo'
import Navbar from "../components/Navbar";
import Recent from "../pages/Activity";
import ActivityDemo from "../Demo/ActivityDemo";
import NotFound from "../pages/NotFound";
class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <div className="main">
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/redirect" component={StravaRedirect} />
                        <Route path="/yourdistance" component={YourDistance} />
                        <Route path="/demo" component={YourDistanceDemo} />
                        <Route path="/recent" component={Recent} />
                        <Route path="/recentDemo" component={ActivityDemo} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default AppRouter;
