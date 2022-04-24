import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginScreen from "./common/screens/LoginScreen";
import DashboardScreen from "./common/screens/DashboardScreen";
import Logout from "./common/screens/Logout";
import MarineLifeScreen from "./marine-life/screens/MarineLifeScreen";
import SpeciesScreen from "./marine-life/screens/SpeciesScreen";
import {GlobalContext} from "./common/types";
import AddEditSpeciesScreen from "./marine-life/screens/AddEditSpeciesScreen";
import DiveSpotsScreen from "./dive-spots/screens/DiveSpotsScreen";
import {Species} from "./marine-life/types";
import {DiveSpot} from "./dive-spots/types";



const App = () => {
    const initSpecies: Species[] = [];
    const [marineLife, setMarineLife] = useState(initSpecies)
    const initDiveSpots: DiveSpot[] = [];
    const [diveSpots, setDiveSpots] = useState(initDiveSpots)
    return (
        <GlobalContext.Provider value={{marineLife, setMarineLife, diveSpots, setDiveSpots}}>
            <Router>
              <Routes>
                <Route path='/' element={<DashboardScreen/>}/>
                <Route path='/marine' element={<MarineLifeScreen/>}/>
                <Route path='/marine/:id' element={<SpeciesScreen/>}/>
                <Route path='/marine/new' element={<AddEditSpeciesScreen/>}/>
                <Route path='/dive' element={<DiveSpotsScreen/>}/>
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='/logout' element={<Logout/>}/>
              </Routes>
            </Router>
        </GlobalContext.Provider>
    );
}

export default App;
