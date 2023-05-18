// Show 1 to 10000
//-for
for (let i = 1; i <= 10000; i++) {
    console.log(i)
}

//-while
let i = 1
while (i <= 10000) {
    console.log(i)
    i++
}

// Show 1 to 100 even numbers
//-for
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//-while
let j = 1
while (j <= 100) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++
}

// Show 1 to 100 odd numbers
// -for
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//-while
let k = 1
while (k <= 100) {
    if (k % 2 !== 0) {
        console.log(k);
    }
    k++
}

// Show 1 to 100 prime numbers
//-for
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

//-while
let l = 2;
while (l <= 100) {
    let isPrime = true;
    let j = 2;
    while (j < i) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
        j++;
    }
    if (isPrime) {
        console.log(i);
    }
    l++;
}

// Declare a variable called size and show the height of size triangle
//-for
let size = 10
for (let i = 0; i < size; i++) {
    let star = '*'
    for (let x = 0; x < i; x++) {
        star = `${star}*`
    }
    console.log(star);
}

//-while
size = 11
let index = 0
while (index < size) {
    let star = '*'
    let starNum = index
    while (starNum > 0) {
        star = `${star}*`
        starNum--
    }
    console.log(star);
    index++
}


// Show Multiplication Table (from 1*1 to 9*9)
//-for
for (let i = 1; i <= 9; i++) {
    for (let x = 1; x <= 9; x++) {
        console.log(`${i}*${x}=${i * x}`);
    }
}

//-while
let start = 1
while (start <= 9) {
    let num = 1
    while (num <= 9) {
        console.log(`${start}*${num}=${start * num}`);
        num++
    }
    start++
}