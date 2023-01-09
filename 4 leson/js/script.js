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

function buyCurency(arr){
    if (userWallet.amountUa == 0){
        alert('Недостатньо коштів');
        return;
    }
    let exchangeInfo = []
        arr.forEach((value)=>{exchangeInfo.push(`Ви можете купити ${userWallet.amountUa/value.sell}`)});
        console.log(exchangeInfo);
        return exchangeInfo;
}
buyCurency(bank)

function exchangeAll(arr) {
    let isRichUser = 0;
    let userWalletAmount = [];
    for (let value in userWallet) {
      userWalletAmount.push(userWallet[value]);
      if (userWallet[value] == 0) {
        isRichUser += 1;
      }
    }
    if (arr.length == isRichUser) {
      alert("Try next time");
      return;
    }
    let totalAmount = 0;
    const sellAmount = [];
    for (let value of arr) {
      sellAmount.push(value.buy);
    }
    sellAmount.forEach((sellValue, index) => {
      let allCost = userWalletAmount[index];
      totalAmount += sellValue * allCost;
    });
    console.log(totalAmount);
  }
  exchangeAll(bank);

//   2)Створити функцію move яка повертає текст  на скільки кроків і куди (отримане значення) змістився користувач . Створити функцію moveUser яка отримує напрямок переміщення, кількість кроків і функцію move як колбек. 
// moveUser ('north', move, 10) повина повернути ( Юзер перемістився на північ на 10 кроків)

