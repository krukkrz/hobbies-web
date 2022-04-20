export type DashboardResponse = {
    username?: string;
    marineLife?: SimpleResult
    diveSpots?: DiveSpotsResult
    surfSpots?: SimpleResult
    techStack?: SimpleResult
}

export type DiveSpotsResult = {
    totalDives: number
    totalSpots: number
    maxDepth: number
}

export type SurfSpotsResult = {
    totalNumberSpots: number
}

export type TechStackResult = {
    totalNumberTech: number
}

export type SimpleResult = {
    total: number
}