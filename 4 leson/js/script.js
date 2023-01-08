// 1)Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa) які містять числові значення ( збереження юзера)
// Створити массив обєктів bank в якому є обєкети з ключами buy, sell  з числовими значеннями ( продаж і покупка валюти) а також ключ name в який передаємо назву валюти (usa, euro, ua)
// Створити функцію яка отримує данні з обєкту юзер опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки.
// Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження

let userWallet = {
    amountUsa: 100,
    amountEuro: 100,
    amountUa: 1000, 
}
let bank = [
    {
        name: 'usd',
        buy: 10,
        sell: 20.
    },
    {
        name: 'Euro',
        buy: 20,
        sell: 25,
    }
]

function buyCurency(){
    if (userWallet.amountUa == 0){
        alert('Недостатньо коштів');
    }
    else if (userWallet.amountUa > 0){
        bank.forEach((value)=>{console.log(`Ви мoжете купити ${userWallet.amountUa/value.sell}`)})
    }
}
buyCurency()

function sellCurency(){
    if (userWallet.amountEuro, userWallet.amountUsa == 0){
        alert("У вас немає валюти для продажу");
    }
    else if (userWallet.amountEuro, userWallet.amountUsa > 0){
        
    }
}