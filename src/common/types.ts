import {Species} from "../marine-life/types";
import {createContext, useContext} from "react";

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

export type GlobalContextType = {
    marineLife: Species[]
    setMarineLife: (species: Species[]) => void
}

export const initialGlobalState: GlobalContextType = {
    marineLife: [],
    setMarineLife: (value) => {
        console.log('Unimplemented provider')
    }
}

export const GlobalContext = createContext<GlobalContextType>(initialGlobalState)
export const useGlobalContext = () => useContext(GlobalContext)