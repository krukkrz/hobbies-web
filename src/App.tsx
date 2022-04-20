import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginScreen from "./common/screens/LoginScreen";
import DashboardScreen from "./common/screens/DashboardScreen";
import Logout from "./common/screens/Logout";

const App = () => {
    return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </Router>
    );
}

export default App;
