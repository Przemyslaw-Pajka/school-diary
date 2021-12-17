import {
    HashRouter as Router,
    Redirect,
    Route
} from "react-router-dom";
import { Admin } from './Admin'
import { Homepage } from './Homepage'
import { Student } from './Student'
import { Teacher } from './Teacher'

export const MainRouter = () => {
    return (
        <Router>
            <Route path="/admin" component={Admin} />
            <Route path="/uczen" component={Student} />
            <Route path="/nauczyciel" component={Teacher} />
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route exact path='/home' component={Homepage} />
        </Router>
    );
};
