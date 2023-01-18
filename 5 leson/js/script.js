// 1) Створити функцію конструктор яка створює обєкт юзер (з даними імя, прізвище, вік, також в юзера повинен бути унікальний іd номер від 1 до 10) в функції конструкторі повиний бути метод виводу інформації про юзера. 
// Метод повинен бути винесений в прототип.

function UserData (name, secname, age, id){
    this.name = name;
    this.secname = secname;
    this.age = age;
    this.id = Math.round(Math.random()*10);
}

UserData.prototype.info = function(){
    console.log(`Користувач ${this.name} ${this.secname}. Вік ${this.age}. Його ID ${this.id}`);
}

const den = new UserData('Den', 'Cooper', 33);
const ken = new UserData('Ken', 'Block', 44);
console.log(den.info());
console.log(ken.info());

// 2)Створити методи на прототайп для оновлення ключів обєкту юзер наприклад змінити імя , вік користувача.ІD не міняється

UserData.prototype.change = function(name, secname, age){
    this.name = name;
    this.secname = secname;
    this.age = age;
}

den.change('Michael', 'Shumaher', 50);
ken.change('Tomy', 'Iommi', 74);

console.log(den);
console.log(ken);

// 3) Створити функцію конструктор створення (прямокутника, квадрата ) в прототип винести методи обчислення Площі, переметра, та визначення діагоналі

function ConstructFigur (a, b){
    this.a = a;
    this.b = b;
}
ConstructFigur.prototype.perimetr = function (){
    return `${2 * (this.a + this.b)}`;
}
ConstructFigur.prototype.plosha = function(){
    return `${this.a * this.b}`;
}
ConstructFigur.prototype.diagonal = function(){
    let dia = Math.pow(this.a, 2) + Math.pow(this.b, 2);
    return `${Math.sqrt(dia)}`;
}

const figurs = new ConstructFigur(4,5);
console.log(figurs.diagonal());

// 4) Отримати від користувача значення name  вивести в консоль, першу і останню літеру з name в ерхньому регістрі.

let userName = prompt('Enter your name')

function toUp(name){
    let firstName = name.slice(0,1);
    let lastName = name.slice(-1);
    let toogether = (firstName + lastName).toUpperCase();
    console.log(toogether);
}
toUp(userName);

// 5) Створити функцію яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, якщо стрінг маж довжину більше 10 то відрізає все після 10 і додає 3 крапки

function rezka(argum){
    let argumRez = argum.trim();
    if (argum.length > 10){
        let obrez = argum.slice(0, 10);
        argumRez = obrez + '...'
    }
    return console.log(argumRez)
}
rezka('    Hello     ')