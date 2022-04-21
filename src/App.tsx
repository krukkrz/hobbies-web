import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginScreen from "./common/screens/LoginScreen";
import DashboardScreen from "./common/screens/DashboardScreen";
import Logout from "./common/screens/Logout";
import MarineLifeScreen from "./marine-life/screens/MarineLifeScreen";
import SpeciesScreen from "./marine-life/screens/SpeciesScreen";

export const routes = [
    { path: '/', breadcrumb: 'Dashboard' },
    { path: '/marine', breadcrumb: 'Marine life' },
];

const App = () => {
    return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardScreen/>}/>
        <Route path='/marine' element={<MarineLifeScreen/>}/>
        <Route path='/marine/:id' element={<SpeciesScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </Router>
    );
}

export default App;
