import {Coolness} from "../common/types";

export type Species = {
    id: string
    name: string
    where?: string
    when?: string
    howCool?: Coolness
    photo?: string
    link?: string
}