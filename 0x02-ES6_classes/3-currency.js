
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /*
      getter for code
    */
  get code() {
    return this._code;
  }

  /* setter for code */
  set code(value) {
    this._code = value;
  }

  /*
      getter for name
    */
  get name() {
    return this._name;
  }

  /* setter for code */
  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
