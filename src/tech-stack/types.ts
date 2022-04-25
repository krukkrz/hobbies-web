import {BaseHobbyType} from "../common/types";

export type Tech = BaseHobbyType & {
    docs?: string
    type?: TechType
    learning?: string
    privateProject?: string
    isCommercial?: boolean
    application?: string
}

export const techTypes = ['Programming language', 'Framework', 'Database', 'Queue'] as const
export type TechType = typeof techTypes[number]
export const techTypeOptions = techTypes.map(type => ({label: type, value: type}))