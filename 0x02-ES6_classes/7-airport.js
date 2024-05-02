export default class Airport {
  constructor(name, code) {
    if (typeof (name) === 'string' && typeof (code) === 'string') {
      this._name = name;
      this._code = code;
    }
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
