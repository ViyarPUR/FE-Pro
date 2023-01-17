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


