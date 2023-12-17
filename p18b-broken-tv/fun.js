// ALGORITMO:Hacer que cuando el boton1 sea pulsadp cambia la foto
const images = [
    
    "img/breaking.webp",
    "img/homer.jpg",
    "img/salvame.webp",
    "img/futurama.jpeg",
    "img/bear grylls.jpg",
    "img/vikingos.webp",
    "img/granhermano.webp",
    "img/cadena3.jpg",
]

// 1.Capturar todos los elementos que van a participar en mi programa
// capturo boton1
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');

const btnOnOff = document.querySelector('#btnOnOff')


console.log(btn1);
// capturo foto
const tvImg = document.querySelector('#tvImg');
console.log(tvImg);


// 2.Aplicar el evento al elemento que yo quiera (o que me diga la tarea)
btn1.addEventListener('click', cambiarCanal)
btn2.addEventListener('click', cambiarCanal)
btn3.addEventListener('click', cambiarCanal)
btn4.addEventListener('click', cambiarCanal)
btn5.addEventListener('click', cambiarCanal)
btn6.addEventListener('click', cambiarCanal)
btn7.addEventListener('click', cambiarCanal)
btn8.addEventListener('click', cambiarCanal)



// 3.Definir la funcion que va ejecutar el evento
function cambiarCanal () {
    tvImg.src = images [this.dataset.number]
}

function apagarTele(){
    tvImg.style.opacity = "0";
}


// 4.Dentro de la función programar que va hacer la funcion sobre los elementos que yo le diga