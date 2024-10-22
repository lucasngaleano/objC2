//lert ('Hola mundo desde JS');
/*
let nombre;

nombre = prompt('ingrese su nombre');

if(nombre == 'root') {
    alert('Bienvenido')
}else{
    alert('Usuario incorrecto')
}
*/
let nombre = prompt("Por favor, ingresa tu nombre:");

// Verificar si el usuario ingresó un nombre
if (nombre) {
    // Mostrar mensaje de bienvenida
    alert("¡Bienvenido, " + nombre + "!");
} else {
    // Si no se ingresa un nombre, mostrar un mensaje alternativo
    alert("No ingresaste un nombre, ¡bienvenido de todos modos!");
}