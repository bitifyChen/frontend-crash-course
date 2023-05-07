// Declare a variable called age and show ‘can vote’ if age >= 18, show ‘can’t vote’ if age < 18
const age = 17
console.log(age >= 18 ? 'can vote' : 'can’t vote')

// Check if a number is odd or even.
const num = 17
console.log(num % 2 === 0 ? 'even' : 'odd')

// Declare two variables and check which one is big or they’re equaled.
const a = 20
const b = 20
console.log(a > b ? 'a' : a === b ? 'equaled' : 'b')

// Declare three variables and check which one is big or they’re equaled.
const x = 9999
const y = 1
const z = 9999
const bigNum = Math.max(x, y, z)
const checkBig = (x, y, z) => {
  let res = 'err'
  if (x === y && y === z) {
    res = 'They’re equaled'
  } else {
    if (x === y && x === bigNum) {
      res = 'X and Y are big and equaled'
    } else if (x === z && x === bigNum) {
      res = 'X and Z are big and equaled'
    } else if (y === z && y === bigNum) {
      res = 'Y and Z are big and equaled'
    } else {
      if (x === bigNum) {
        res = 'X is big'
      } else if (y === bigNum) {
        res = 'Y is big'
      } else if (z === bigNum) {
        res = 'Z is big'
      }
    }
  }
  return res
}
console.log(checkBig(x, y, z));

// Declare two variables for range (ex. 10, 100), declare another number variable and check a number is present in given range
const min = 10
const max = 100
const number = 88
const checkRange = (e) => ((e - min) * (e - max) < 0)
console.log(checkRange(number))

// Declare a variable called year and check the year is leap year or not.
// 如果年份被 4 整除，則移至步驟 2。 否則，請跳至步驟 5。
// 如果年份被 100 整除，則移至步驟 3。 否則，請跳至步驟 4。
// 如果年份被 400 整除，則移至步驟 4。 否則，請跳至步驟 5。
// 該年份為閏年 (有 366 天)。
// 該年分不是閏年 (有 365 天)。
const year = 1904
const checkYear = (e) => {
  if (e % 4 === 0) {
    if (e % 100 === 0) {
      if (e % 400 === 0) {
        return true
      }
      return false
    }
    return true
  }
  return false
}
console.log(`${year} ${checkYear(year) ? 'is' : 'is not'} leap year`)
