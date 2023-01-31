
    function submitSpisok (){
        let list = document.getElementById('listMy');
        let userData = document.getElementById('exampleInputEmail1');
        let timeData = new Date().toLocaleString();
        let userAnswer = userData.value;
        let allData = document.createElement('div');
        allData.className = "all shadow rounded-4 p-3 m-2"
        allData.innerText = `User ${userAnswer} . Time create ${timeData}`;
        list.appendChild(allData);
        let allInfo = document.getElementsByClassName('all');

        if(allInfo.length > 5){
            list.removeChild(list.firstElementChild)
        }
    }

    
    
    // function submitSpisok (){
    //     let list = document.querySelector('.listMy');
    //     let userData = document.getElementById('exampleInputEmail1');
    //     let timeData = document.createElement('div');
    //     let textData = document.createElement('div');
    //     textData.className = "texting";
    //     textData.innerHTML = userData.value;
    //     timeData.innerHTML = new Date().toLocaleString();
    //     let allData = document.createElement('div');
    //     allData.className = 'all';
    //     allData.appendChild(textData);
    //     allData.appendChild(timeData);
    //     let elementsData = document.getElementsByClassName('all');

    //     if (elementsData.length <= 4){
    //         list.appendChild(allData);
    //     }
    //     else{
    //         list.firstChild.remove();
    //         list.appendChild(allData);
    //     }

    // }

    