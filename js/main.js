let getMonth = document.getElementById('getMonth');
let getDate = document.getElementById('getDate');
let fact = document.getElementById('fact');
let getDateFact = document.getElementById('getDateFact');

getDateFact.addEventListener('submit', getDateFacts);

function getDateFacts(e) {
    e.preventDefault();
    let month = getMonth.value;
    let date = getDate.value;

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://numbersapi.com/' + month + '/' + date + '/date', true);

    xhr.onload = function () {
        if (this.status == 200 && month != '' && date != '') {
            // console.log(this.responseText);
            fact.style.display = 'block';
            document.getElementById('getFactText').innerText = this.responseText;
        }
    }

    xhr.send();
}