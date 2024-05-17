let suma = document.getElementById('btn-sumar');
let resta = document.getElementById('btn-restar');
let num1 = document.getElementById('valor1');
let num2 = document.getElementById('valor2');
const resultado = document.querySelector('.resultado');

suma.addEventListener('click', function () {
  let result = parseInt(num1.value) + parseInt(num2.value);
  resultado.innerHTML = result;
});

resta.addEventListener('click', function () {
  let result = parseInt(num1.value) - parseInt(num2.value);
  if (result < 0) {
    result = 0;
  }
  resultado.innerHTML = result;
});