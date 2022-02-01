export default function RomanNumeral(number){
  this.number = number;
  return this.number;
}

RomanNumeral.prototype.convertNumber = function () {
  if (this.number === 1) {
    return "I";
  } else {
    return "not I";
  }
};