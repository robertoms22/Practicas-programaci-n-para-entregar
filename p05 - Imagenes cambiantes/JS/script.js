const imagenes = [
    "../img/varitas_voldemort.webp",
    "../img/voldemort_de_merluza.webp",
    "../img/voldemort-triste.webp"
   
];

let imagenActual = 0;

const boton = document.getElementById("botonCambiar");
const imagen = document.getElementById("imagenMostrada");

boton.addEventListener("click", () => {
    imagenActual = (imagenActual + 1) % imagenes.length;
    imagen.src = imagenes[imagenActual];
});
