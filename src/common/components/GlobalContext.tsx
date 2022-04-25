import {Species} from "../../marine-life/types";
import {DiveSpot} from "../../dive-spots/types";
import {SurfSpot} from "../../surf-spots/types";
import {createContext, useContext} from "react";
import {Tech} from "../../tech-stack/types";

export type GlobalContextType = {
    marineLife: Species[] | undefined
    setMarineLife: (species: Species[]) => void
    diveSpots: DiveSpot[] | undefined
    setDiveSpots: (spots: DiveSpot[]) => void
    surfSpots: SurfSpot[] | undefined
    setSurfSpots: (spots: SurfSpot[]) => void
    techStack: Tech[] | undefined
    setTechStack: (stack: Tech[]) => void
}

export const initialGlobalState: GlobalContextType = {
    marineLife: undefined,
    setMarineLife: () => console.log('Unimplemented provider'),
    diveSpots: undefined,
    setDiveSpots: () => console.log('unimplemented provider'),
    surfSpots: undefined,
    setSurfSpots: () => console.log('unimplemented provider'),
    techStack: undefined,
    setTechStack: () => console.log('unimplemented provider'),
}

export const GlobalContext = createContext<GlobalContextType>(initialGlobalState)
export const useGlobalContext = () => useContext(GlobalContext)