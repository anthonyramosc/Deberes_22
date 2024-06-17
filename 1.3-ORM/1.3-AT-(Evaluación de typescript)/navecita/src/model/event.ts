import { Ship } from './spaceShip';

export class Event {
    description: string;
    effect: (ship: Ship) => void;

    constructor(description: string, effect: (ship: Ship) => void) {
        this.description = description;
        this.effect = effect;
    }
}