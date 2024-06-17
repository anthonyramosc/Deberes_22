enum TypeResource {
    Steal = 'Steal',
    Energy = 'Energy',
    Water = 'Water'
}

enum Danger {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High'
}


export class Planet {
    typeresource: TypeResource;
    danger: Danger;

    constructor(typeResource: TypeResource, danger: Danger) {
        this.typeresource = typeResource;
        this.danger = danger;
    }
}