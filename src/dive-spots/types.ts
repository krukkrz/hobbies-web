import {Coolness} from "../common/types";

export type DiveSpot = {
    id: string
    name: string
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