import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    useHistory
  } from "react-router-dom";
import Admin from './Admin'
import Homepage from './Homepage'
import Student from './Student'
import Teacher from './Teacher'

const MainRouter = () => {
    
    return (
        <Router>
            <Route path="/admin" component={Admin}/>
            <Route path="/uczen" component={Student}/>
            <Route path="/nauczyciel" component={Teacher}/>
            <Route exact path="/" component={Homepage}>
                <Homepage/>
            </Route>
        </Router>
    );
};


export default MainRouter;
