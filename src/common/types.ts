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
export const coolnessOptions: {label: string, value: Coolness}[] = [
    {label: "Just OK", value: "just OK."},
    {label: "Super cool", value: "super cool!"},
]
export type GlobalContextType = {
    marineLife: Species[] | undefined
    setMarineLife: (species: Species[]) => void
    diveSpots: DiveSpot[] | undefined
    setDiveSpots: (spots: DiveSpot[]) => void
}

export const initialGlobalState: GlobalContextType = {
    marineLife: undefined,
    setMarineLife: () => console.log('Unimplemented provider'),
    diveSpots: undefined,
    setDiveSpots: () => console.log('unimplemented provider')
}

export const GlobalContext = createContext<GlobalContextType>(initialGlobalState)
export const useGlobalContext = () => useContext(GlobalContext)