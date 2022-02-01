import RomanNumeral from './romanNumeral.js';

$("form#numberForm").submit(function(event){
  event.preventDefault();
  const numeral = $("#numberInput").val();
  let romanNumber = new RomanNumeral(numeral);
});