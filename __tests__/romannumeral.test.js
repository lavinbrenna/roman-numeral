/* eslint-disable no-undef */
import RomanNumeral from "../src/romanNumeral";

describe('RomanNumeral', () =>{

  test('should return a number', () => {
    const romanNumeral = new RomanNumeral(2);
    expect(romanNumeral.number).toEqual(2);
  });
});

describe('RomanNumeral.convertNumber', () =>{

  test('should convert 1 to I', () => {
    const romanNumeral = new RomanNumeral(1);
    expect(romanNumeral.convertNumber()).toEqual("I");
  });
  test('should return not I if number does not equal 1',()=>{
    const romanNumeral = new RomanNumeral(2);
    expect(romanNumeral.convertNumber()).toEqual("not I");
  });
  test('should return V if number entered is 5', () => {
    const romanNumeral = new RomanNumeral(5);
    expect(romanNumeral.convertNumber()).toEqual("V");
  });
  test('should return X if number entered is 10', () => {
    const romanNumeral = new RomanNumeral(10);
    expect(romanNumeral.convertNumber()).toEqual("X");
  });
  test ('it should return L if the number entered is 50', () => {
    const romanNumeral = new RomanNumeral(50);
    expect(romanNumeral.convertNumber()).toEqual("L");
  });
  test ('it should return C if the number entered is 100', ()=>{
    const romanNumeral = new RomanNumeral(100);
    expect(romanNumeral.convertNumber()).toEqual("C");
  });
  test ('it should return D if the number entered is 500', () => {
    const romanNumeral = new RomanNumeral(500);
    expect(romanNumeral.convertNumber()).toEqual("D");
  });
  test ('it should return M if the number entered is 1000', () => {
    const romanNumeral = new RomanNumeral(1000);
    expect(romanNumeral.convertNumber()).toEqual("M");
  });
});