export default function RomanNumeral(number){
  this.number = number;
  return this.number;
}

/*RomanNumeral.prototype.convertNumber = function () {
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
  } else if(this.number === 1000){
    return "M";
  } else {
    return "not I";
  }
};*/

RomanNumeral.prototype.convertNumber = function (){
  let userNumber = this.number;
  const userArray = [];
  for(let i = 0 ; i < userNumber; i ++){
    userArray.push("I");
  }
  let numberArray = userArray.join("");
  return numberArray;
};

let romanNumeral = new RomanNumeral(2);
romanNumeral.convertNumber();
