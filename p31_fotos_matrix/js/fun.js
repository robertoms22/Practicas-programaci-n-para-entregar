//1. capturo el selector y foto
//2. defino array
//3. event listener -> click
    //extraigo value o id de cada etiqueta option
    //cambio url de la foto en base al array cuya posicion 

    const photosUrls = ["morpheo.webp", "neo.jpg", "trinity.jpeg"];
    const selectorPhotos = document.querySelector('.matrix');
    const fotoSlot = document.querySelector('.fotoSlot');

    selectorPhotos.addEventListener('input', function() {
        const route = selectorPhotos.options[this.selectedIndex].dataset.url;
        console.log(route);
        fotoSlot.style.backgroundImage = `url("img/${route}")`
    });
    