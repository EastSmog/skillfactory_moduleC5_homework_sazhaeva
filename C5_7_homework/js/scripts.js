let myKey = localStorage.getItem('imgKey');

function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};

const mainResultNode = document.querySelector('.main-result');
const btnNode = document.querySelector('.btn');
const value1 = document.querySelector('.inp1');
const value2 = document.querySelector('.inp2');

function displayResult(apiData) {
  let cards = '';
  
  if (((!Number(value1.value) || Number(value1.value)  > 10 || Number(value1.value) < 1)) && (!Number(value2.value) || Number(value2.value)  > 10 
    || Number(value2.value) < 1)) {
      mainResultNode.innerHTML = '<p class="error-text">Номер страницы и лимит вне диапазона от 1 до 10</p>'
  } else if (!Number(value1.value) || Number(value1.value)  > 10 || 
    Number(value1.value) < 1) {
    mainResultNode.innerHTML = '<p class="error-text">Номер страницы вне диапазона от 1 до 10</p>'
  } else if(!Number(value2.value) || Number(value2.value)  > 10 
    || Number(value2.value) < 1) {
    mainResultNode.innerHTML = '<p class="error-text">Лимит вне диапазона от 1 до 10</p>'
  } else {
        for (let item of apiData) {
          const cardBlock = `
            <div class="card">
              <img src="${item.download_url}" class="card-image"/>
              <p>${item.author}</p>
            </div>
          `;
          cards = cards + cardBlock;
        };
        localStorage.setItem('imgKey', JSON.stringify(cards));
    mainResultNode.innerHTML = cards;
  }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (myKey !== null) {
      mainResultNode.innerHTML = JSON.parse(myKey);
    }
  });
  
  btnNode.addEventListener('click', () => {
  useRequest(`https://picsum.photos/v2/list?page=${value1.value}&limit=${value2.value}`, displayResult);
  });
