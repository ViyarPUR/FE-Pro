// 1)Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li , отримати доступ до ціх елементів і змінити там текст за допомогою innerHtml

window.onload = ()=>{
    let head = document.querySelector('p');
    head.innerHTML = "HI";

    let nav = document.querySelector('nav');
    nav.innerHTML = "Hello"

    let liList = document.querySelectorAll('.list');
    liList.forEach(item => {item.innerHTML = "I change text"})

    let foo = document.querySelector('footer');
    foo.innerHTML = "This is footer"

// 2) Знайти батьківський елемент li елемента через методи пошуку батьківського елементу вивести в консоль отримане значення

    let liElement = document.querySelector("li");
    console.log(liElement.parentNode);

    // 3) Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)
    // 4) В классі створити метод який визначає рейтинг в залежності від року випуску і кількості переглядів  ( кількість переглядів поділена на різницю між сьогоднішнім роком і роком випуску ) 
    // 5) Створіть массив і розмістіть в ньому створені обєкти фільмів, далі за допомогою синтаксису деструктирізації  переберіть масив  і виведіть значення по року випуску.

    class Movie{
        constructor (year, genre, name, vievs){
            this.year = year;
            this.genre = genre;
            this.name = name;
            this.vievs = vievs;
        }
        rate(){
            let yearRate = new Date();
            console.log(`Rate this movie ${this.vievs/(yearRate.getFullYear() - this.year)}`)
        }
    }
    const deep = new Movie(2016, 'Drame', 'Deepwater Horizon', 1000000);
    const green = new Movie(1999, 'Drame', 'Green mile', 2500000);
    const lord = new Movie(2001, 'Action', 'Lord of the ring', 4000000);
    console.log(deep)
    deep.rate()

    let films = [deep, green, lord];
    // console.log(films)

    let [DeepwaterHorizon, GreenMile, Lordofthering] = films;
    films.sort(function (a, b) {
        return a.year - b.year;
      });
      console.log(films);
}

