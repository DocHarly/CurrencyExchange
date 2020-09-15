document.addEventListener("DOMContentLoaded", function() {

    let currencyBtn = document.getElementById('currency-btn');
    
    console.log(currencyBtn);

    currencyBtn.addEventListener('click', () => {
        let request = new XMLHttpRequest();

        //request.open('GET', 'js/daily_json.js');
        request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);
                console.log(data.Valute);
                for (let key in data.Valute) {
                    let parentDiv = document.querySelector('#parent-div'),
                        div = document.createElement('div'),
                        cardHeader = document.createElement('div'),
                        cardBody = document.createElement('div'),
                        currencyName = document.createElement('h5');
                        currencyRub = document.createElement('h6');
                    div.className = 'card col box-shadow';
                    cardHeader.className = 'card-header';
                    cardBody.className = 'card-body';

                    currencyName.innerHTML = data.Valute[key].Nominal + ' ' + data.Valute[key].Name;
                    currencyRub.innerHTML = data.Valute[key].Value + ' руб.';

                    parentDiv.appendChild(div);
                    div.appendChild(cardHeader);
                    cardHeader.appendChild(currencyName);
                    div.appendChild(cardBody);
                    cardBody.appendChild(currencyRub);

                    console.log(div);
                    console.log(data.Valute[key].Name);
                }
            }
        });
    });

});
