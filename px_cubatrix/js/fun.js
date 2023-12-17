// OPERADORES

// Aritméticos
// +
// -
// *
// /
// %
// **
// ++
// --

//Asignación
// =
// +=
// -=
// *=
// /=
// %=
// **=
// ??=

// Operadores logicos
 // >
 // <
 // >=
 // <=
 // !     inversion de booleano / negación
 // !!    convierte en booleano 
 // &&    and
 // ||    or
 // ==    igual a
 // !=    no igual a
 // ===   igual tipo y dato
 // !==   distinto tipo o dato  




//capturar elementos del dom
const numberOfCubatas = document.querySelector('input'); 
const btnCalcular = document.querySelector('button');
const resultSlot = document.querySelector('.resultado');

btnCalcular.addEventListener('click', function(){
    switch (numberOfCubatas.value) {
        case "0":
            resultSlot.innerHTML = "Estas hecho un pincel";
            break;
        
        case "1":
            resultSlot.innerHTML = "Alpargata's mouth";
            break;
            
        default:
            resultSlot.innerHTML = "Deja de castigarte amigui";       
    }
   

})

// if(numberOfCubatas.value == 0) {
    //     resultSlot.innerHTML = "Legas hecho un pincel, amigo";
    // }

    // else if (numberOfCubatas.value > 0 && numberOfCubatas.value < 4) {
    //     resultSlot.innerHTML = "Boca de alpargata";
    // }

    // else if (numberOfCubatas.value >= 4 && numberOfCubatas.value < 10 ) {
    //     resultSlot.innerHTML = "Mutas a albondiga (masa de carne)";
    // }

    // else  {
    //     resultSlot.innerHTML = "016";
    // }






    // numberOfCubatas.value == 0 ? resultSlot.innerHTML ="persona sana"; 
    // // : resultSlot.innerHTML ="depúrate!";
 



// OPERADORES

// Aritméticos
// +
// -
// *
// /
// %
// **
// ++
// --

//Asignación
// =
// +=
// -=
// *=
// /=
// %=
// **=
// ??=

// Operadores logicos






   
  