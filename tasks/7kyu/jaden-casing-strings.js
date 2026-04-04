// Jaden Casing Strings (7 kyu)
// https://www.codewars.com/kata/5390bac347d09b7da40006f6

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  {
    value: function toJadenCase() {
      return this.split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(" ");
    }
  }
);