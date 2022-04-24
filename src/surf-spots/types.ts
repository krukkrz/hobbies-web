import {Coolness} from "../common/types";

export type SurfSpot = {
    id: string
    name: string
    link?: string
    country?: string
    when?: string
    surfingType?: SurfingType
    coolness?: Coolness
    photo?: string
}

export type SurfingType = 'Kite surfing' | 'Surfing' | 'Wind surfing'
