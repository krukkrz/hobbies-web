export type Species = {
    id: string
    name: string
    where?: string
    when?: string
    howCool?: Coolness
    photo?: string
}

export type Coolness = 'just OK.' | 'super cool!'