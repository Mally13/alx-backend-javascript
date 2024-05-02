import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') throw new Error();
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  get sqft() {
    return this._sqft;
  }

  set floors(value) {
    this._floors = value;
  }

  set sqft(value) {
    this._sqft = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
