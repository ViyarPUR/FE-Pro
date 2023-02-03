window.onload = () =>{
    // Task 2
    class imageColection{
        constructor(imgPath, alt, href){
            this.imgPath = imgPath;
            this.alt = alt;
            this.href = href;
        }
    }

    const colectionImg = [];

    colectionImg.push(
        new imageColection('8 leson/2 and 3 task/img/zebra.jpg', 'zebra', 'https://pixabay.com/ru/photos/%d0%b7%d0%b5%d0%b1%d1%80%d0%b0-%d0%b0%d1%84%d1%80%d0%b8%d0%ba%d0%b5-%d0%b4%d1%80%d1%83%d0%b6%d0%b1%d0%b0-%d0%b4%d1%80%d1%83%d0%b7%d1%8c%d1%8f-7746719/' ),

        new imageColection('8 leson/2 and 3 task/img/tulen.jpg', 'tulen', 'https://pixabay.com/ru/photos/%d0%bf%d0%bb%d1%8f%d0%b6-%d1%82%d1%8e%d0%bb%d0%b5%d0%bd%d1%8c-%d0%bc%d0%be%d1%80%d1%81%d0%ba%d0%be%d0%b9-%d0%b4%d0%b8%d0%ba%d0%b0%d1%8f-%d0%bf%d1%80%d0%b8%d1%80%d0%be%d0%b4%d0%b0-7730209/'),

        new imageColection('8 leson/2 and 3 task/img/drums.jpg', 'drums', 'https://pixabay.com/ru/photos/%d1%83%d0%b4%d0%b0%d1%80%d0%bd%d1%8b%d0%b5-%d0%bc%d1%83%d0%b7%d1%8b%d0%ba%d0%b0-%d0%b7%d0%b0%d1%85%d0%be%d0%b4-%d1%81%d0%be%d0%bb%d0%bd%d1%86%d0%b0-%d0%bf%d0%b5%d0%b9%d0%b7%d0%b0%d0%b6-7751985/'),

        new imageColection('8 leson/2 and 3 task/img/house.jpg', 'house', 'https://pixabay.com/ru/photos/%d1%85%d0%b8%d0%b6%d0%b8%d0%bd%d0%b0-%d0%bc%d0%be%d1%80%d0%b5-%d0%bf%d0%bb%d1%8f%d0%b6-%d0%bf%d1%80%d0%b8%d1%80%d0%be%d0%b4%d0%b0-%d0%b2%d0%be%d0%b4%d0%b0-7739262/'),
    )
    for(let i=0; i<colectionImg.length; i++){
        let body = document.querySelector('body');
        let a = document.createElement('a');
        let img = document.createElement('img');
        body.appendChild(a);
        a.appendChild(img);
        let aStyle = document.querySelector('a');
        a.setAttribute('style', 'color:black; margin: 50px')
        img.src = colectionImg[i].imgPath;
        img.alt = colectionImg[i].alt;
        a.href = colectionImg[i].href;
    } 
    
    //Task 3

    let userArr = [
        {
            title: 'Name',
            city: 'Kyiv',
            course: '1',
            name: 'Alex',
        },
        {
            title: 'City',
            city: 'Lviv',
            course: '2',
            name: 'Vika',
        },
        {
            title: 'Course',
            city: 'Dnipro',
            course: '1',
            name: 'Alina',
        },
    ]

    let body = document.querySelector('body');
    let table = document.createElement('table');
    let tableHead = document.createElement('thead');
    let headTh = document.createElement('th');
    headTh.setAttribute('style', 'display: flex;')

    table.setAttribute('style', 'display: flex;flex-direction: column;max-width: 50%;margin: 100px auto;border: 1px solid #000;padding:50px border: 1px solid #000;');
    body.appendChild(table);
    table.appendChild(tableHead);
    tableHead.appendChild(headTh);

    userArr.forEach((item) => {
        let td = document.createElement('td');
        td.setAttribute('style', 'border: 1px solid #000; font-size: 20px; padding: 5px;  width: 100%;')
        td.innerText = item.title;
        headTh.appendChild(td);
    })



    userArr.forEach((item) => {
        let headTr = document.createElement('tr');
        headTr.setAttribute('style', 'display: flex;')
        table.appendChild(headTr);
        headTr.appendChild(document.createElement('td')).append(item.name);
        headTr.appendChild(document.createElement('td')).append(item.city);
        headTr.appendChild(document.createElement('td')).append(item.course);
    });

        let e = document.querySelectorAll('td');
        console.log(e);
        e.forEach((item) => {
            item.setAttribute('style', 'border: 1px solid #000; font - size: 20px; padding: 5px; width: 100%; text-align: center;')
    });
}
