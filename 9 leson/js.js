window.onload = ()=>{
    // Carucel and control buttons
    let imgArr = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg'];
    let counter = 0;
    let imageCar = document.querySelector('.carucel');

    function changeImg() {
        imageCar.src = imgArr[counter];
            counter ++;
        if (counter == imgArr.length) {
            counter = 0;
        }
    }  

    let inteval = setInterval(changeImg, 3000);

    let prevTab = document.querySelector('.carousel-control-prev');
    let nextTab = document.querySelector('.carousel-control-next');

    function prevImg(){
        imageCar.src = imgArr[counter];
        if (counter === 0){
            counter = 4;
        }
        counter --;
    }
    prevTab.addEventListener('click', prevImg);

    function nextImg(){
        imageCar.src = imgArr[counter];
        if (counter === 4){
            counter = -1;
        }
        counter ++;
    }

    nextTab.addEventListener('click', nextImg);


    //Timer

    let timer = document.querySelector('.time');
    let time = 60;

    function salesTime(){
        time --;
        timer.innerText = time;
        if (time == 0){
            alert('Ви дочекались знижок');
            clearInterval(backInterval);
        }
    }

    let backInterval = setInterval(salesTime, 1000);

    // Modal

    let startButton = document.querySelector('.btn-primary');
    let modalWindow = document.querySelector('.modale');
    let closeButton = document.querySelector('.btn-secondary');
    let modalDialog = document.querySelector('.modal-content');

    function openModal() {
        modalWindow.className += " modale--active";

        let modalWidth = modalDialog.clientWidth;
        let modalHeight = modalDialog.clientHeight;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        modalDialog.setAttribute('style', `top:${windowHeight / 2 - modalHeight / 2}px; left:${windowWidth / 2 - modalWidth / 2}px;`);

    }

    function closeModal(event) {
        if ((event.target == modalWindow) || (event.target == closeButton)) {
            modalWindow.classList.remove('modale--active');
            modalDialog.setAttribute('aria-hidden', 'true');
        } else {
            event.stopPropagation();
        }

    }

    startButton.addEventListener('click', openModal);
    modalWindow.addEventListener('click', closeModal);
}

