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
});