/* eslint-disable no-undef */
import RomanNumeral from "../src/romanNumeral";

describe('RomanNumeral', () =>{

  test('should return a number', () => {
    const romanNumeral = new RomanNumeral(2);
    expect(romanNumeral.number).toEqual(2);
  });
});