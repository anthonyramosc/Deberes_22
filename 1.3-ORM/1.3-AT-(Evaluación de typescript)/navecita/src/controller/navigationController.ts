import { Direction } from '../model/resources';
import { Ship } from './../model/spaceShip';
import { ConsoleView } from '../view/consoleView';


export class NavigationController {
    constructor(private ship: Ship, private view: ConsoleView) { }

    explorar(direction: Direction): void {

        this.view.showMessage(`Nave se mueve hacia ${direction}`);
    }
}