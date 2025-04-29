const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const bttSomar = document.getElementById("bttSomar");
const bttSubtrair = document.getElementById("bttSubtrair");
const bttMultiplicar = document.getElementById ("bttMultiplicar");
const bttDividir = document.getElementById ("bttDividir")
const bttLimpar = document.getElementById ("bttLimpar")
const resultado = document.getElementById("resultado");

bttSomar.addEventListener('click', () => {
    let a = parseFloat(numero1.value);
    let b = parseFloat(numero2.value);
    let soma = a + b;
    resultado.textContent = `${a} + ${b} = ${soma}`;
})
bttSubtrair.addEventListener('click', () => {
  let a = parseFloat(numero1.value);
  let b = parseFloat(numero2.value);
  let subtrair = a - b;
  resultado.textContent = `${a} - ${b} = ${subtrair}`;
})
bttMultiplicar.addEventListener('click', () => {
  let a = parseFloat(numero1.value);
  let b = parseFloat(numero2.value);
  let multiplicar = a * b;
  resultado.textContent = `${a} * ${b} = ${multiplicar}`;
})
bttDividir.addEventListener('click', () => {
  let a = parseFloat(numero1.value);
  let b = parseFloat(numero2.value);
  let dividir = a / b;
  resultado.textContent = `${a} / ${b} = ${dividir}`;
})
bttLimpar.addEventListener('click', () => {
  numero1.value = '';
  numero2.value = '';
  resultado.textContent = '';
})




// Verifica se o navegador suporta Service Workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js') // Caminho para o arquivo sw.js
        .then((registration) => {
          console.log('Service Worker registado com sucesso:', registration.scope);
        })
        .catch((error) => {
          console.log('Falha ao registar o Service Worker:', error);
        });
    });
  }