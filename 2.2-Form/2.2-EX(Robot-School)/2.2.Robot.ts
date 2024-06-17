export class Robot {
    private static usedNames: { [key:string]: boolean } = {}
    
    public _name: string;
    
    constructor() {
      this._name = Robot.generateUniqueName()
    }
    public get name(): string {
      return this._name
    }
    public resetName(): void {
      this._name = Robot.generateUniqueName()
    }
    private static generateUniqueName(): string {
      let newName = Robot.generateRandomName()
      while(Robot.usedNames[newName]) {
        newName = Robot.generateRandomName()
      }
      Robot.usedNames[newName] = true
      return newName
    }
    private static generateRandomName(): string {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const digits = '0123456789'
      const randomLetters = Robot.getRandomElement(letters) + Robot.getRandomElement(letters)
      const randomDigits = Robot.getRandomElement(digits) + Robot.getRandomElement(digits) + Robot.getRandomElement(digits)
      return randomLetters + randomDigits
    }
    private static getRandomElement(source: string): string {
      return source[Math.floor(Math.random() * source.length)]
    }
    public static releaseNames(): void {
      Robot.usedNames = {}
    }
  }