export function score(x: number, y: number): number {
    const distanceFromCentre = Math.sqrt(x ** 2 + y ** 2);
    if (distanceFromCentre <= 1) {
        return 10;
    }
    if (distanceFromCentre <= 5) {
        return 5;
    }
    if (distanceFromCentre <= 10) {
        return 1;
    }

    return 0;
}