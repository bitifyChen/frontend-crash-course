//Declare a array called fruits with some fruits in default.
const fruits = ["apple", "banana", "orange"];

//Print every element in the fruits array declared above.
fruits.forEach((e) => console.log(e));

//Modify the third fruit to Durian and print the fruits array.
fruits[2] = "Durian";
console.log(fruits);

//Using push method to add two fruits into array.
fruits.push("lemon", "mango");
console.log(fruits);

//Remove the first fruit from the array.
fruits.shift();
console.log(fruits);

//Using for, while loop to print the element in the fruits array.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

//Declare a array called numbers and set each element to its squared using map.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.map((e) => e * e));

//Declare a array called numbers and filter the prime number using filter.
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
};
numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let newNumbers = numbers.filter((e) => isPrime(e));
console.log(newNumbers);

//Declare a array called numbers and computed the sum of the elements.
let sum = 0;
sum = numbers.reduce((sum, num) => sum + num);
console.log(sum);
