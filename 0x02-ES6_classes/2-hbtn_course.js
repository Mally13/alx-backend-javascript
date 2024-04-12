export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateName(name);
    this._length = this.validateLength(length);
    this._students = this.validateStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.validateName(value);
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this.validateLength(value);
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this.validateStudents(value);
  }

  // eslint-disable-next-line class-methods-use-this
  validateName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  validateLength(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  validateStudents(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }
}
