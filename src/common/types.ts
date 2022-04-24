import {Species} from "../marine-life/types";
import {createContext, useContext} from "react";
import {DiveSpot} from "../dive-spots/types";

export type DashboardResponse = {
    username?: string;
    marineLife?: SimpleResult
    diveSpots?: DiveSpotsResult
    surfSpots?: SimpleResult
    techStack?: SimpleResult
}

export type DiveSpotsResult = {
    totalDives: number
    totalSpots: number
    maxDepth: number
}

export type SimpleResult = {
    total: number
}

export type Coolness = 'just OK.' | 'super cool!'

export type GlobalContextType = {
    marineLife: Species[]
    setMarineLife: (species: Species[]) => void
    diveSpots: DiveSpot[]
    setDiveSpots: (spots: DiveSpot[]) => void
}

export const initialGlobalState: GlobalContextType = {
    marineLife: [],
    setMarineLife: () => console.log('Unimplemented provider'),
    diveSpots: [],
    setDiveSpots: () => console.log('unimplemented provider')
}

export const GlobalContext = createContext<GlobalContextType>(initialGlobalState)
export const useGlobalContext = () => useContext(GlobalContext)