import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    useHistory
  } from "react-router-dom";
import Admin from './Admin'
import Homepage from './Homepage'

const MainRouter = () => {
    
    return (
        <Router>
            <Route path="/admin" component={Admin}/>
            <Route path="/uczen">Uczeń</Route>
            <Route path="/nauczyciel">Nauczyciel</Route>
            <Route exact path="/" component={Homepage}>
                <Homepage/>
            </Route>
        </Router>
    );
};


export default MainRouter;
