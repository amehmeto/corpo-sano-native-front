import { solution } from './roman-numerals-docoder'

describe('Roman Numerals Decoder', () => {
  it.each([
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [10, 'X'],
    [11, 'XI'],
    [2008, 'XXVIII'],
  ])(
    'should return %s when given %s',
    (expectedNumber: number, romanNumeral: string) => {
      // arrange
      // act
      const decodedRomanNumeral = solution(romanNumeral)
      // assert
      expect(decodedRomanNumeral).toBe(expectedNumber)
    },
  )
})
