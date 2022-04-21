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

export type SimpleResult = {
    total: number
}