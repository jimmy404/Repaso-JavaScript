/* **** Creando variables

**** variables con var

var aprendiendo = 'JavaScript';


**** Variables con const

const aprendiendo = 'JavaScript';
aprendiendo = true;

(deben tener valor de inicio> sino error)
valor constante> nunca cambia.

**** Let

let aprendiendo = 'JavaScript';
aprendiendo = true;
console.log (aprendiendo);

**** Scope de una variable o de su valor (Alcance de los valores> Var= se mezclan // Let-Cons dentro de llaves NO)
En que parte del programa la variable esta disponible o no.

JavaScript tiene un alcance de función: cada función crea un nuevo alcance. El alcance determina la accesibilidad (visibilidad) de estas variables.
Las variables definidas dentro de una función no son accesibles (visibles) desde fuera de la función.


var musica = 'Rock';

if (musica){
    var musica = 'Grunge';
    console.log('Dentro del if :', musica);
}
console.log('Fuera del if :', musica);

let musica = 'Rock';

if(musica){
    let musica = 'Grunge';
    console.log('Dentro del if :', musica);
}
console.log('Fuera del if :', musica);

**** TEMPLATE STRINGS

const nombre = 'Jimmy';
const trabajo = ' Dev web';

**Concatenar JS
console.log('Nombre: '+nombre+',Trabajo: ' +trabajo); (Antes se concatenaba asi)
AHORA> console.log(`Nombre: ${nombre},Trabajo: ${trabajo}`);

**Concatenar con multiples lineas
const contenedorApp = document.querySelector('#app');
ANTES> let html = '<ul>'+
            '<li> Nombre: ' + nombre + '</li>'+
            '<li> Trabajo: ' + trabajo + '</li>'+
            '</ul>'

            (Problema, si falta ej. una comilla tira un error dificil de encontrar)

AHORA> let html = `
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Tranajo: ${trabajo}</li>
        </ul>
        `;


****FUNCIONES

**Function Declaration

function saludar () {
    console.log('Bienvenido ' + nombre);
}
saludar ('Jimmy'); > asi se la llama. // saludar ()> Funcion anonima.
saludar ('James');
saludar ('Jim');

**Function expresion
const cliente = function(nombreCliente){
    console.log('Mostrando datos del cliente: ) + nombre cliente;
}
client('Jimmy');


client('Jimmy');> Si va antes tira error por no estar declarada.
const cliente = function(nombreCliente){
    console.log('Mostrando datos del cliente: ) + nombre cliente;
}

****Parametros por default en las funciones

function actividad(nombre,actividad){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`)
}
actividad('Jimmy', 'Aprender Js');
actividad('Jim', 'Dev app');
actividad('James'); > Sin segundo parametro, el primero se REESCRIBE pero el segundo NO.


const actividad = fuinction (nombre = 'Jimmy', actividad 'Dev app'){
        console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`)

}

**** ARROW Functions

let viajando = function (destino){
    return `Viajando a la ciudad de: ${destino}`;
}
let viaje;
viaje = viajando ('Paris');
viaje = viajando ('Londres');
viaje = viajando ('Barcelona');

console.log(viaje);

// Se reemplaza  "function" por la flecha. (pasaria a la derecha la "funcion")
let viajando = (destino) => { // si es uno solo, sin parentesis, con 2 o mas arg. van los parentesis
    return `Viajando a la ciudad de: ${destino}`;
}



**** Objetos


**Object literal

let persona = 'Jimmy';
let profesion = 'Dev app';

console.log(persona);
console.log(profesion);

// Para no tener 2 variables se usan los objetos:

const persona = {
    nombre: 'Jimmy',
    profesion: 'Dev app'
}
 let nombrePersona = 'Jimmy'

// Para acceder a datos de los objetos de forma individual:

console.log (persona.nombre) /Ó/ console.log (persona['nombre']);

**Object constructor

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

**** Prototype

Tarea.prototype.mostrarInformacionTarea = function(){
    return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
}



const tarea1 = new Tarea('Aprender Js y React', 'Urgente');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea);
*/