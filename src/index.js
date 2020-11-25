// import cipher from './cipher.js';

// console.log(cipher);

//Boton para ir a la página de cifrado
document.getElementById("goToEncode").addEventListener("click", encodeDisplay);

function encodeDisplay() {
  document.getElementById("startDisplay").style.display = "none";
  document.getElementById("encodeDisplay").style.display = "block";
}

//Botón para volver desde el cifrado a la página de inicio
document.getElementById("returnEncode").addEventListener("click", returnDisplayEnco);

function returnDisplayEnco() {
  document.getElementById("encodeDisplay").style.display = "none";
  document.getElementById("startDisplay").style.display = "block";
}


function cipher() {
  //Declaro la variable del mensaje ingresado, llamo al valor y lo paso a mayúsculas
  let messageIn = document.getElementById("containerOne").value.toUpperCase();
  //Convierto el desplazamiento a numero entero
  let offset = parseInt(document.getElementById("offset").value);
  //Declaro mi variable para el mensaje final
  let message = ""
  //Inicio el bucle, declaro e inicializo la variable i, que será menor al largo del mensaje, incrementado a un valor
  for (let i = 0; i < messageIn.length; i++) {
    //Pasamos el mensaje a código ASCII
    let messageAscii = messageIn.charCodeAt(i);
    // console.log(messageAscii)
    //Aplicamos la formula para obtener la nueva posicion de la letra
    let letterNewPosition = (messageAscii - 65 + offset) % 26 + 65;
    // console.log(2, letterNewPosition)
    //Si el valor es estrictamente igual a 32 (espacio en ASCII) le digo a la variable que mantenga el mismo valor
    if (messageAscii === 32) { letterNewPosition = 32; }
    //Convierto el ASCII a la nueva posición
    let sinceAscii = String.fromCharCode(letterNewPosition);
    // console.log(3, sinceAscii)
    //concateno las variables
    message += sinceAscii;
    // console.log(message)
  }
  //Imprimo el mensaje en el contenedor 2
  document.getElementById("containerTwo").innerHTML = message;

  return message;

}

function decode() {
  let messageOf = document.getElementById("containerTwo").value.toUpperCase();
  let offset = parseInt(document.getElementById("offset").value);
  let messageOut = ""
  for (let i = 0; i < messageOf.length; i++) {
    let messageAsciiOf = messageOf.charCodeAt(i);
    let letterNewPositionOf = (messageAsciiOf + 65 - offset) % 26 + 65;
    if (messageAsciiOf === 32) { letterNewPositionOf = 32; }
    let sinceAsciiOf = String.fromCharCode(letterNewPositionOf);
    messageOut += sinceAsciiOf;
    console.log(messageOut)
  }
  //
  document.getElementById("containerTwo").innerHTML = messageOut;

  return messageOut;

}


