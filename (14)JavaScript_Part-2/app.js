// template literals
let a = 4;
let b = 5;
console.log("Your total bill is : " + (a + b));
console.log(`Your total bill is ${a + b}`);

//---------String methods-------

//trim()
let password = '    pass    ';
console.log(password.trim());

//toUpperCase()
let name1 = 'happy';
console.log(name1.toUpperCase());

//toLowerCase()
console.log(name1.toLowerCase());


//indexOf()
let str = "HelloWold";
console.log(str.indexOf('Wo'));
console.log(str.indexOf('h'));

//method chaining
let msg = '   Yes!   ';
msg = msg.trim().toUpperCase();
console.log(msg);

//slice
let str1 = 'ILoveCoding';
console.log(str1.slice(5));
console.log(str1.slice(1, 4));
console.log(str1.slice(-2));

//slice
console.log(str1.replace("Love", "Do"));
console.log(str1.replace("o", "x"));
