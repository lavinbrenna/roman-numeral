export default function RomanNumeral(number){
  this.number = number;
  return this.number;
}

RomanNumeral.prototype.convertNumber = function () {
  if (this.number === 1) {
    return "I";
  } else if (this.number === 5) {
    return "V";
  } else if(this.number === 10) {
    return "X";
  } else if (this.number === 50) {
    return "L";
  } else if(this.number === 100){
    return "C";
  } else if (this.number === 500){
    return "D";
  } else {
    return "not I";
  }
};