import {fetchAllMarineLife, fetchMarineLife} from "./marineLifeService";
import {marineLifeData, marineLifeDataResponse} from "../../mock/marineLife";

test('fetchMarineLife returns list of species', () => {
    const actual = fetchMarineLife()
    expect(actual).toBe(marineLifeData)
})

test('fetchAllMarineLife returns list of species', () => {
    const actual = fetchAllMarineLife()
    expect(actual).toBe(marineLifeDataResponse)
})