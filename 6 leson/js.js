// 1) Створити функцію яка отримує невизначену кількість аргументів, вираховує їх суму і повертає результат обчислень

function summa (...a){
    let total = 0;
    for (let i = 0; i<a.length; i++){
        total += a[i];
    }
    return console.log(total)
}

summa(2, 3, 5, 8)

// 2)Створити функцію яка отримує від користувача день народження,місяць, рік і повертає вік користувача і якщо сьогодні день народження користувача то вивести привітання.

let userday = parseInt(prompt('Вкажіть день свого народження'));
let userMonth = parseInt(prompt('Вкажіть місяць свого народження'));
let userYear = parseInt(prompt('Вкажіть рік свого народження'))

function selebrate(day, month, year){
    const nowDay = new Date();
    this.day = nowDay.getDate();
    this.month = nowDay.getMonth();
    this.year = nowDay.getFullYear();
    let yourAge = this.year - year;
    month  -= month
    if (day == this.day, month == this.month){
        alert('Вітаю Ви стали на рік ближче до смерті)))');
    }
    else {
        return console.log(`Ваш вік ${yourAge}`)
    }
}
selebrate(userday, userMonth, userYear)

// 3) Модифікуват завдання 2 добавивши в аргументи функцію вітання яка буде використанна як колбек, і в разі дня народження буде вітати користувача

let newDay = parseInt(prompt('Вкажіть день свого народження'));
let newMonth = parseInt(prompt('Вкажіть місяць свого народження'));
let newYear = parseInt(prompt('Вкажіть рік свого народження'));

function callBack(){
    alert('Вітаю Ви стали на рік ближче до смерті)))')
}

function selebrate(day, month, year, cbFunc){
    const nowDay = new Date();
    this.day = nowDay.getDate();
    this.month = nowDay.getMonth();
    this.year = nowDay.getFullYear();
    let yourAge = this.year - year;
    month  -= month
    if (day == this.day, month == this.month){
        return cbFunc();
    }
    else {
        return console.log(`Ваш вік ${yourAge}`)
    }
}
selebrate(newDay, newMonth, newYear, callBack)

// 4) Створити функцію яка повертає сторіччя, функція отримує рік а повертає номер сторіччя. Наприклад:
// 1810->19
// 1700 -> 17
// 1601 ->17 
// 2000 -> 20

let centuryUser = prompt('Введіть рік')


function centuryPerevirka (century){
    if (century.length == 2){
        return console.log('Ви вибрали 1-ше сторіччя')
    }
    else if (century.length == 3){
        let centuryMinus =parseInt(century.slice(0, 1));
        let centuryPlus =parseInt(century.slice(-2));
        if (01 < centuryPlus < 99){
            return console.log(`Ви обрали ${centuryMinus +1} сторіччя`);
        }
        else if (centuryPlus == 00){
            return console.log(`Ви обрали ${centuryMinus} сторіччя`);
        }
    }
    else if (century.length == 4){
        let centuryMinus =parseInt(century.slice(0, 2));
        let centuryPlus =parseInt(century.slice(-2));
        if (01 < centuryPlus < 99){
            return console.log(`Ви обрали ${centuryMinus +1} сторіччя`);
        }
        else if (centuryPlus == 00){
            return console.log(`Ви обрали ${centuryMinus} сторіччя`);
        }
    }
    else{
        alert('Такий рік ще не настав')
    }
}

centuryPerevirka(centuryUser)

// 5) Створити функцію яка повертає інформацію скільки днів в цьому місяці а також в наступному  ( В цьому місяці 30 днів в наступному 31 )

let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let monthChek = new Date();

function nextMonth (month){
    const nowMonth = monthChek.getMonth();
    const nowMontsDays = month[nowMonth];
    const nextMonthDays = month[nowMonth+1];
    return console.log(`В цьому місяці ${nowMontsDays} днів. У наступному ${nextMonthDays} днів`)
}
nextMonth(monthDay)