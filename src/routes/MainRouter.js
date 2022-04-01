import {
    BrowserRouter as Router,
    Redirect,
    Route
} from "react-router-dom";
import { Admin } from '../pages/Admin';
import { Home } from '../pages/Home';
import { Student } from '../pages/Student';
import { Teacher } from '../pages/Teacher';

export const MainRouter = () => {
    return (
        <Router>
            <Route path="/admin" component={Admin} />
            <Route path="/uczen" component={Student} />
            <Route path="/nauczyciel" component={Teacher} />
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route exact path='/home' component={Home} />
        </Router>
    );
};
