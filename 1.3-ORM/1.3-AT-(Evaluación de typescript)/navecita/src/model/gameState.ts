import { Ship } from './spaceShip';
import { Planet } from './planet';
import { Resource } from './resources';


export interface GameState {
    ship: Ship;
    planet: Planet;
    resource: Resource[];
}