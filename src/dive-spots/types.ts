import {BaseHobbyType, Coolness} from "../common/types";

export type DiveSpot = BaseHobbyType & {
    link?: string
    country? :string
    when?: string
    divesNumber?: number
    deep?: number
    weigh?: number
    coolness?: Coolness
    photo?: string
    longitude?: string
    lattitude?: string
}