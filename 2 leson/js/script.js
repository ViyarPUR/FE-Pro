// Калькулятор

let firstNumber = parseFloat(prompt("Enter first number"));
let secondNumber = parseFloat(prompt("Enter second number"));
let operation = prompt("Operation");
let result = 0;

if(operation == '+'){
    result = firstNumber + secondNumber;
    console.log('Результат', result);
}
else if(operation == '-'){
    result = firstNumber - secondNumber;
    console.log('Результат', result);
}
else if(operation == '*'){
    result = firstNumber * secondNumber;
    console.log('Результат', result);
}
else if(operation == '/'){
    if(firstNumber != 0 && secondNumber != 0){
       result = firstNumber / secondNumber;
       console.log('Результат', result);
    }
    else{
        alert('Не можна ділити на 0');
    }

}
else{
    console.log('Немає такої операції');
}

// за допомогою циклу вивести в консоль всі парні значення числа 20

