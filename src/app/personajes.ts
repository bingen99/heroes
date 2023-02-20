import { Thumbnail } from "./thumbnail";

export interface Personaje {
    id: number
    name: string
    description: string
    modified: string
    resourceURI: string
    thumbnail: Thumbnail
}
