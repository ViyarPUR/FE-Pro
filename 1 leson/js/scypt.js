// отримати 2 цифрових значення і вивести результат математичнихх операцій в console

let firstNumb = prompt("enter firts number ");
let secondNumb = prompt("enter second number ");
console.log (Number(firstNumb) + Number(secondNumb));
console.log (Number(firstNumb) - Number(secondNumb));
console.log (Number(firstNumb) * Number(secondNumb));
console.log (Number(firstNumb) / Number(secondNumb));

// Отримати 2 текстових значення і вивсести за допомогою document .write  "User name: FirstVar  User last name SecondVar " ( firstVar, secondVar значення які отримали ) 

let firstVar = prompt("Enter your first name ");
let secondVar = prompt("Enter your second name");
document.write("User name: ", firstVar);
document.write("<br/>");
document.write("User last name: ", secondVar);

// Отримати текстове  значення і виконати перевіку: якщо  uk повернути true, якщо ru  повернути false

let uk = prompt("Оберіть мову uk або ru ");
console.log(uk == 'uk');

// отримати 2 числових значення якщо перше більше 20 а друге більше 30 то вивстести true, якщо одна з умов не відповідає вивсести false

let first = 25;
let second = 35;
console.log(first > 20 && second > 30);
console.log(first < 20 && second < 30);