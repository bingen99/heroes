import { Personaje } from "./personajes"

export interface Data {
    data: {
        offset: number
        limit: number
        total: number
        count: number
        results: Personaje[]
    }
}