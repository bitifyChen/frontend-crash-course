// Declare a arrow function called isEven, should pass a number variable and should return the result if is even return true
const isEven = (number) => number % 2 === 0
console.log(isEven(3))


// Declare a arrow function called isLeapYear, should pass a number variable and should return the result if is leap year return true
const isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
console.log(isLeapYear(2000));

// Declare a arrow function called isPrime, should pass a number variable and should return the result if is prime number return true

const isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(100));

// Declare a arrow function called findMax, should pass 3 number variables and should return the max number of them.
const findMax = (x, y, z) => Math.max(x, y, z)
console.log(findMax(1, 2, 3));
