interface Roster {
    [grade: number]: string[]
  }
  export class GradeSchool {
    private _roster: Roster = {}
    roster() {
      return JSON.parse(JSON.stringify(this._roster))
    }
    add(name: string, grade: number) {
      // Remove student from roster if present
      for (const key in this._roster) {
        this._roster[key] = this._roster[key].filter(student => student !== name)
      }
      this._roster[grade] = this._roster[grade]
        ? [...this._roster[grade], name]
        : [name]
      this._roster[grade].sort()
    }
    grade(grade: number) {
      return this._roster[grade] ? [...this._roster[grade]] : [];
    }
  }