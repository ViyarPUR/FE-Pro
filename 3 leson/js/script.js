// Створити функцію яка отримує массив і вибирає з нього всі парні числа і розміщує в новому масиві. Функція повина повертати массив з парними номерами.

// let arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10];
// let arrNewArr = [];

// function creArr (array){
//     for (i=0; i<arrRandomNumbers.length; i++){
//         array = arrRandomNumbers[i];
//         if(array%2 == 0){
//             arrNewArr.push(array);
//         }
//     }
//     console.log(arrNewArr);
// }
// creArr();


function creArr (array){
    let arrNewArr = [];
    for (i=0; i<array.length; i++){
    let value = array[i];
     if(value%2 == 0){
        arrNewArr.push(value);
    }
    }
    console.log(arrNewArr);
    return arrNewArr;
    }
creArr([1,3,5,4,6,9,8,20,31,33,10]);

// Створити цикл який 5 разів виводить prompt  запитує що купити і вводить це в массив.

// let buy = 5;
// let shop = [];
// for (i=0; i<buy; i++){
//     let food = prompt('що купити ?')
//     shop.push(food)
// }
// console.log(shop)

// Створити функцію яка отримує як аргумент массив і вираховує середнє значення всіх чисел. ( при розрахунках вважайте що массив може бути будьякої довжини переданий)

// function summa(arr){
//     let start = 0;
//     for (i=0; i<arrRandomNumbers.length; i++){
//         start += arr[i];
//     }
//     return(b = start / arr.length);
// }
// console.log(summa(arrRandomNumbers));

//  Створити функцію яка замінює в массиві =) на ;)

// let smile = [':)', '=)',':)', '=)',':)', '=)'];
// let newSmile = ';)';
// function smileZam(){
//     for(i=0; i<smile.length; i++){
//         if(smile[i] === '=)'){
//             smile[i] = newSmile;
//         }
//     }
//     console.log(smile)
// }
// smileZam()

// створити функцію яка отримує аргумент, якщо це 'last' то функція створює массив поміщає в нього останній елемент массиву  і видаляє останній елемент  массиву animals, якщо аргумент 'first' то також записує перший елемент массиву до нового массиву і видаляє перший елемент з animals

// let animals =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
// let qwest = prompt('Оберіть last or first')
// function ani(){
//     if(qwest === 'last'){
//         let lastElement = animals.slice(5);
//         animals.pop();
//         console.log(astElement);
//         console.log(animals);
//     }
//     else if (qwest === 'first'){
//         let firstElement = animals.slice(0, 1);
//         animals.shift();
//         console.log(firstElement);
//         console.log(animals)
//     }
// }
// ani()

// Напишіть функцію яка отримує массив і повертає сумму всіх значень массиву

function allSum(allArr){
    let a = 0;
    for (i=0; i<allArr.length; i++){
        let value = allArr[i];
        a+=value;
    }
    console.log(a);
    console.log(allArr.sort());
}
allSum([3, 10, 15, 25, 5, 11])

// Створити функцію яка отримує в аргумент старт значення і фініш значення ( старт менше фініша) також отрмує массив задовільної довжини. Функція повина повертати массив в якому вирізанні значення з старт індекса по фініш

// let start = parseInt(prompt('Enter start value from 0 to 20'));
// let finish = parseInt(prompt('Enter finish value from 0 to 20'));
// let allArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function sliceFunc(){
//     if(start < finish){
//         let newAllArray = allArray.slice(start, finish);
//         console.log(newAllArray);
//     }
//     else{
//         alert('the start value must be less than the finish value')
//     }
// }
// sliceFunc();