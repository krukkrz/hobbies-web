import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginScreen from "./common/screens/LoginScreen";
import DashboardScreen from "./common/screens/DashboardScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/' element={<DashboardScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
