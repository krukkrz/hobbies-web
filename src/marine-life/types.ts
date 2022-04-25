import {BaseHobbyType, Coolness} from "../common/types";

export type Species = BaseHobbyType & {
    where?: string
    when?: string
    howCool?: Coolness
    photo?: string
    link?: string
}