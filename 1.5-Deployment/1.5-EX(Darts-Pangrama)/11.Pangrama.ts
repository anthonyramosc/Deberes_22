export function isPangram(prayer: string): boolean {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const lower = prayer.toLowerCase()
    return alphabet.split('').every(letter => lower.includes(letter))

}