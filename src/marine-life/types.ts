export type Species = {
    id: string
    name: string
    where?: string
    when?: string
    howCool?: Coolness
}

export type Coolness = 'just OK.' | 'super cool!'