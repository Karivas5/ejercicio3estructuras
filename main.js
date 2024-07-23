console.log("Ejercicio 3  estructuras de control: While");
//1. Crea un programa que pregunte al usuario un número. 
//Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
let numero = parseInt(prompt("Por favor, introduce un número:"));
let i = 1;
// Usar un bucle while para encontrar y mostrar los múltiplos de 5.
while (i <= numero) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}


//2. Crea un programa que solicite al usuario 2 números entre 1 y 50.
//Posteriormente mostrar en consola los números del 1 hasta el 50, 
//pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
let num1 = parseInt(prompt("Por favor, introduce un número entre 1 y 50:"));
let num2 = parseInt(prompt("Introduce un segundo número entre 1 y 50:"));
let number = 1;
while (number <= 50) {
    if (number === num1 || number === num2) {
        console.log(number + " ¡Lotería!");
    } else {
        console.log(number);
    }
    number++;
}


//3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. 
//Para terminar de capturar el usuario debe ingresar el número 0. 
//Finalmente mostrar la lista de números capturados en pantalla o en la consola.
let numeros = [];
let numeroGuardado;
while (true) {
  numeroGuardado = parseInt(prompt("Introduce un número y despúes 0 para terminar:   "), 10);
  if (numeroGuardado === 0) {
    break;
  }
  if (!isNaN(numeroGuardado)) {
    numeros.push(numeroGuardado);
  }
}
console.log("Números capturados:", numeros);


//4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. 
//Para terminar de capturar el usuario no debe escribir valor alguno. 
//Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
let palabrasCapturadas = [];
function capturarEntrada() {
  let entrada = prompt("Ingresa una letra o palabra:");
  while (entrada !== "") {
    palabrasCapturadas.push(entrada);
    entrada = prompt(" Deja en blanco para terminar.");
  }
  mostrarPalabras();
}
function mostrarPalabras() {
  let concatenacion = palabrasCapturadas.join(" ");
  alert("Palabras capturadas: " + concatenacion);
}
capturarEntrada();


//5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). 
//El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. 
//Y seguirá pidiendo al usuario introducir otro día. 
//En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” 
//y terminar la captura de información.
alert("Este programa te dará un mensaje personalizado para cada día de la semana.");
function obtenerMensaje(dia) {
  const mensajes = {
    lunes: "¡Feliz inicio de semana!",
    martes: "¡Lindo Martes!",
    miercoles: "¡Miercoles mitad de semana!",
    jueves: "¡Ten un lindo Jueves!.",
    viernes: "¡Viernes de amigos!",
    sabado: "¡Feliz Sábado!",
    domingo: "Ve a descansar"
  };
  return mensajes[dia.toLowerCase()] || "Por favor, introduce un día válido.";
}
while (true) {
  let diaUsuario = prompt("Introduce un día de la semana:");
  if (diaUsuario.toLowerCase() === "domingo") {
    alert(obtenerMensaje(diaUsuario));
    break; 
  } else {
    alert(obtenerMensaje(diaUsuario));
  }
}
