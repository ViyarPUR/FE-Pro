
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

    


    