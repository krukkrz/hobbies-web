import {DiveSpot} from "../types";
import {mockFetchDiveSpots} from "../../mock/diveSpots";

export const fetchDiveSpots = (): DiveSpot[] => {
    return mockFetchDiveSpots
}