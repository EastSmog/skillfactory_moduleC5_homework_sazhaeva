
const resultNode = document.querySelector('.result');
const btnNode = document.querySelector('.btn');
const value1 = document.querySelector('.inp1');
const value2 = document.querySelector('.inp2');

btnNode.addEventListener('click', () => {
  if(!Number(value1.value) || !Number(value2.value)) {
    resultNode.innerHTML = `Одно из введенных значений не является числом. Введите число`
  } else if(Number(value1.value)  > 300 || Number(value1.value) < 100
   || Number(value2.value)  > 300 || Number(value2.value) < 100) {
    resultNode.innerHTML = 'Одно из введенных чисел вне диапазона от 100 до 300';
  } else {
    const card = `
              <img src="" class="card-image"/>
          `;
    resultNode.innerHTML = card;
    fetch(`https://picsum.photos/${value1.value}/${value2.value}`)
      .then((response) => {
        document.querySelector('.card-image').src = response.url;
        });
    }
});
