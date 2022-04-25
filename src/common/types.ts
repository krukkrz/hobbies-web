export type DashboardResponse = {
    username?: string;
    marineLife?: SimpleResult
    diveSpots?: DiveSpotsResult
    surfSpots?: SimpleResult
    techStack?: SimpleResult
}

export type BaseHobbyType = {
    id: string
    name: string
}

export type DiveSpotsResult = {
    totalDives: number
    totalSpots: number
    maxDepth: number
}

export type SimpleResult = {
    total: number
}

export type Coolness = 'just OK.' | 'super cool!'
export const coolnessOptions: {label: string, value: Coolness}[] = [
    {label: "Just OK", value: "just OK."},
    {label: "Super cool", value: "super cool!"},
]