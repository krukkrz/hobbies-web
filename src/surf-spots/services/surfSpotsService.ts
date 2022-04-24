import {mockFetchSurfSpots} from "../../mock/surfSpots";
import {SurfSpot} from "../types";

export const fetchSurfSpots = (): SurfSpot[] => {
    return mockFetchSurfSpots
}