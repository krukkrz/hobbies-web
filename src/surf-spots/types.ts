import {Coolness} from "../common/types";

export type SurfSpot = {
    id: string
    name: string
    link?: string
    country?: string
    startDate?: string
    endDate?: string
    surfingType?: SurfingType
    coolness?: Coolness
    photo?: string
}

export const surfingTypes = ['Kite surfing', 'Surfing', 'Wind surfing'] as const
export type SurfingType = typeof surfingTypes[number]
export const surfingOptions = surfingTypes.map(type => ({label: type, value: type}))
