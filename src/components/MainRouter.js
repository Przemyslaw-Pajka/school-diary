import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Admin from './Admin'

const MainRouter = () => {
    return (
        <Router>
            <Route path="/admin" component={Admin}/>
            <Route path="/uczen">Uczeń</Route>
            <Route path="/nauczyciel">Nauczyciel</Route>
            <Route exact path="/"/>
        </Router>
    );
};


export default MainRouter;
