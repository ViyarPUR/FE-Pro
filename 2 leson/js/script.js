// Калькулятор

// let firstNumber = parseFloat(prompt("Enter first number"));
// let secondNumber = parseFloat(prompt("Enter second number"));
// let operation = prompt("Operation");
// let result = 0;

// if(operation == '+'){
//     result = firstNumber + secondNumber;
//     console.log('Результат', result);
// }
// else if(operation == '-'){
//     result = firstNumber - secondNumber;
//     console.log('Результат', result);
// }
// else if(operation == '*'){
//     result = firstNumber * secondNumber;
//     console.log('Результат', result);
// }
// else if(operation == '/'){
//     if(firstNumber != 0 && secondNumber != 0){
//        result = firstNumber / secondNumber;
//        console.log('Результат', result);
//     }
//     else{
//         alert('Не можна ділити на 0');
//     }

// }
// else{
//     console.log('Немає такої операції');
// }

// за допомогою циклу вивести в консоль всі парні значення числа 20

// let i = 0;
// while(i<20){
//     i=i+2;
//     console.log(i);
// }

// використовуючи цикл виведіть суму чисел між  А і В з умовою що A<B

// let a = 1
// let b = 10
// let resultat = 0

// for(let i=a; i<b; i++) {
//     result = i + b;
//     console.log(result)
// }

// зробити цикл який виводить дані навпаки від більшого до меншог. Наприклад від 10 до 0 (10, 9, 8, 7, 6 ...)

// let i = 10;
// while(i>0){
//     i--
//     console.log(i)
// }

// отримайте 2 значення і виведіть за допомогою * в консоль фігуру в якій довжина і ширина це отримані значення. Наприкда а=2 і в=2 буде ось така фігура 

let a=parseInt(prompt('Enter first value')); // ширина
let b=parseInt(prompt('Enter second value'));  // висота
for(let i=0; i<a;i++){
 let star="";
 for(let j=0; j<b; j++){
    star+='*';
}
console.log(star);
console.log()
}

// напишіть змінні які питають логін та пароль з prompt  якщо логін admin і пароль 12345 вірні то виводити повідомлення "вітаємо в системі" якщо ні то виводити "Пароль логін не вірні"

// let login = prompt("Введіть ім'я користувача ");
// let passw = prompt("Введіть пароль");
// if (login == "admin" && passw == "12345"){
//     alert("Вітаємо у системі");
// }
// else {
//     alert("Не вірні логін або пароль");
// }

// отримати 3 значення від користувача і порахувати середнє значення цих значень

// let firsValue = parseFloat(prompt("Введіть перше число"));
// let secondValue = parseFloat(prompt("Введіть друге число"));
// let thirdValue = parseFloat(prompt("Введіть третє число"));
// let result = (firsValue + secondValue + thirdValue) / 3;

// console.log('Cередня сумма', result)

// Спитати в користувача вік, далі використовуючи тернарний оператор ( це скорочений запис іf ) створити змінну яка отримує true якщо вік більше 18  i false якщо менше

// let age = parseFloat(prompt("Вкажіть ваш вік"));
// let agePro = age > 18 ? true : false;
// console.log(agePro)

// створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі

// let planet = prompt('Вкажіть планету сонячної системи');
// switch(planet){
//     case'Меркурій':
//         alert('Така планет є у сонячній системі');
//         break;
//     case'Венера':
//         alert('Така планет є у сонячній системі');
//         break;
//     case'Земля':
//         alert('Така планет є у сонячній системі');
//         break;
//     case'Марс':
//         alert('Така планет є у сонячній системі');
//         break;
//     case'Юпітер':
//         alert('Така планет є у сонячній системі');
//         break;
//     case'Сатурн':
//         alert('Така планет є у сонячній системі');
//         break;
//     case'Уран':
//         alert('Така планет є у сонячній системі');
//         break;
//     case'Нептун':
//         alert('Така планет є у сонячній системі');
//         break;
//     default:
//         alert('Такої планети немає у сонячній системі');
// }

// Отримати від користувача число яке більше 0 і якщо воно більше 100 то порахувати знижку 3% і вивести значення якщо більше 3000 то порахувати знижку 5% і якщо більше 10000 то порахувати знижку 7% в усіх інших випадках вивести: "У вас нема знижки до сплати число яке було введене"

// let userValue = parseFloat(prompt('Введіть число'));
// if(userValue>100){
//     console.log(`Ваша знижка ${(userValue / 100) * 3}`);
// }
// else if(userValue > 3000){
//     console.log(`Ваша знижка ${(userValue / 100) * 5}`);
// }
// else if(userValue > 10000){
//     console.log(`Ваша знижка ${(userValue / 100) * 7}`);
// }
// else{
//     console.log("У вас немає знижки. До сплати ", userValue);
// }

// отримати від користувача назву трарини і за допогомою світч вивести звук який вона видає . Наприклад корова: му-му  і т.д

// let userPet = prompt('Оберіть тварину');
// switch(userPet){
//     case 'Корова':
//         alert('му-му');
//         break;
//     case 'Кіт':
//         alert('мую-мую'); 
//         break; 
//     case 'Собака':
//         alert('гав-гав');
//         break;
//     case 'Півень':
//         alert('ку-ку-рі-ку');
//         break;
//     case 'Ворона':
//         alert('кар-кар');
//         break;  
//     case 'Курка':
//         alert('кудах-кудах');
//         break;
//     default:
//         alert('У нас немає такої тварини')

// }
