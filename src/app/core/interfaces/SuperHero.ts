import { Appearance } from "./Appearance";
import { Biography } from "./Biography";
import { Connections } from "./Connections";
import { Imagen } from "./Image";
import { Powerstats } from "./Powerstats";
import { Work } from "./Work";

export interface SuperHero {
    response?: string;
    id: string;
    name: string;
    powerstats: Powerstats;
    biography: Biography;
    appearance: Appearance;
    work: Work;
    connections: Connections;
    image: Imagen;   
}
