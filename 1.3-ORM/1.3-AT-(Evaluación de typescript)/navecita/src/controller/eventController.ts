import { Ship } from './../model/spaceShip';
import { Event } from '../model/event';
import { ConsoleView } from '../view/consoleView';

export class EventController {
    constructor(private ship: Ship, private view: ConsoleView) { }

    handleEvent(event: Event): void {
        event.effect(this.ship);
        this.view.showMessage(`has been reproduced a event : ${event.description}`);
    }
}