// var variableVacia,level0=document.querySelector("#level0"),level1=document.querySelector("#level1"),poster=document.querySelector(".wally__poster"),wally=document.querySelector(".wally"),mensaje=" La posici\xf2n de wally es:",isProfessionalMode=!0;function posicionWally(){console.log("Ah\xed no est\xe1 wally!")}level0.addEventListener("click",function(){level0.classList.add("active"),level1.classList.remove("active"),poster.style.filter="saturate(120%)",isProfessionalMode=!1}),level1.addEventListener("click",function(){level1.classList.add("active"),level0.classList.remove("active"),poster.style.filter="saturate(0%)",isProfessionalMode=!0}),poster.addEventListener("click",posicionWally),wally.addEventListener("click",function(e){var l=[e.clientX,e.clientY],o="Enhorabuena, has encontrado a Wally!!, tus coordenadas son: "+l[0]+", "+l[1],s=isProfessionalMode?233:144,a={coordenadas:l,codigo_respuesta:s,modo_pro:isProfessionalMode};console.log(o),console.log("tu c\xf3digo de respuesta es: "+s),console.log(a),e.stopPropagation()});

//1. capturar lo necesario para la interacción
const poster = document.querySelector ('.wally__poster');
const wally = document.querySelector ('.wally')

//2.crear función que va actuar cuando haga click
function mensajeError() {
    console.log ("Ahi no está Wally")

}

// 3.Crear evento 
poster.addEventListener('click',mensajeError);

// 2.Crear función que va a actuar cuando haga click
function mensajeAcierto(e) {
    e.stopPropagation();
    console.log("¡¡Ahi esta Wally!!")

    console
}