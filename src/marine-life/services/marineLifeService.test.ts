import {fetchMarineLife} from "./marineLifeService";
import {marineLifeData} from "../../mock/marineLife";

test('fetchMarineLife returns list of species', () => {
    const actual = fetchMarineLife()
    expect(actual).toBe(marineLifeData)
})