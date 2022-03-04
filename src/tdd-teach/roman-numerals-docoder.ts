// Erkam Implementation
function calculateRomanNumbers(romanCharacter: string, result: number) {
  if (romanCharacter === 'I') result = 1 + result
  else if (romanCharacter === 'V') result = 5 - result
  else if (romanCharacter === 'X') result = 10 - result
  else if (romanCharacter === 'L') result = 50 - result
  else if (romanCharacter === 'C') result = 100 - result
  else if (romanCharacter === 'D') result = 500 - result
  else if (romanCharacter === 'M') result = 1000 - result
  return result
}

export function solution(roman: string): number {
  let result = 0
  roman.split('').forEach((romanCharacter) => {
    result = calculateRomanNumbers(romanCharacter, result)
  })
  return result
}

// Arthur Implementation
/*function findFiveIndex(romanCharacters: string[]){
  return romanCharacters.findIndex(character => character === 'V')
}

function decodeAroundFive(romanCharacters: string[], foundFiveIndex: number){
  return romanCharacters[foundFiveIndex - 1] === 'I' ? 4 : 5
}

function hasFive(fiveIndex: number) {
  return fiveIndex != -1
}

export function solution(roman: string): number {
  const romanCharacters = roman.split('')
  const fiveIndex = findFiveIndex(romanCharacters)
  return hasFive(fiveIndex) ? decodeAroundFive(romanCharacters, fiveIndex) : roman.length
}*/
