import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginScreen from "./common/screens/LoginScreen";
import DashboardScreen from "./common/screens/DashboardScreen";
import Logout from "./common/screens/Logout";
import MarineLifeScreen from "./marine-life/screens/MarineLifeScreen";
import SpeciesScreen from "./marine-life/screens/SpeciesScreen";
import AddEditSpeciesScreen from "./marine-life/screens/AddEditSpeciesScreen";
import DiveSpotsScreen from "./dive-spots/screens/DiveSpotsScreen";
import {Species} from "./marine-life/types";
import {DiveSpot} from "./dive-spots/types";
import DiveSpotScreen from "./dive-spots/screens/DiveSpotScreen";
import AddDiveSpotScreen from "./dive-spots/screens/AddDiveSpotScreen";
import SurfSpotsScreen from "./surf-spots/screens/SurfSpotsScreen";
import {SurfSpot} from "./surf-spots/types";
import { GlobalContext } from './common/components/GlobalContext';
import SurfSpotScreen from "./surf-spots/screens/SurfSpotScreen";
import AddSurfSpotScreen from "./surf-spots/screens/AddSurfSpotScreen";
import TechStackScreen from "./tech-stack/screens/TechStackScreen";
import {Tech} from "./tech-stack/types";
import TechScreen from "./tech-stack/screens/TechScreen";
import AddTechScreen from "./tech-stack/screens/AddTechScreen";



const App = () => {
    const initSpecies: Species[] = [];
    const [marineLife, setMarineLife] = useState(initSpecies)
    const initDiveSpots: DiveSpot[] = [];
    const [diveSpots, setDiveSpots] = useState(initDiveSpots)
    const initSurfSpots: SurfSpot[] = [];
    const [surfSpots, setSurfSpots] = useState(initSurfSpots)
    const initTechStack: Tech[] = []
    const [techStack, setTechStack] = useState(initTechStack)
    return (
        <GlobalContext.Provider value={{
            marineLife,
            setMarineLife,
            diveSpots,
            setDiveSpots,
            surfSpots,
            setSurfSpots,
            techStack,
            setTechStack,
        }}>
            <Router>
              <Routes>
                <Route path='/' element={<DashboardScreen/>}/>
                <Route path='/marine' element={<MarineLifeScreen/>}/>
                <Route path='/marine/:id' element={<SpeciesScreen/>}/>
                <Route path='/marine/new' element={<AddEditSpeciesScreen/>}/>
                <Route path='/dive' element={<DiveSpotsScreen/>}/>
                <Route path='/dive/:id' element={<DiveSpotScreen/>}/>
                <Route path='/dive/new' element={<AddDiveSpotScreen/>}/>
                <Route path='/surf' element={<SurfSpotsScreen/>}/>
                <Route path='/surf/:id' element={<SurfSpotScreen/>}/>
                <Route path='/surf/new' element={<AddSurfSpotScreen/>}/>
                <Route path='/tech' element={<TechStackScreen/>}/>
                <Route path='/tech/:id' element={<TechScreen/>}/>
                <Route path='/tech/new' element={<AddTechScreen/>}/>
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='/logout' element={<Logout/>}/>
              </Routes>
            </Router>
        </GlobalContext.Provider>
    );
}

export default App;
