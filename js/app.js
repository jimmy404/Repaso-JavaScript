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

****Object Destructuring > Como extraer los valores de un objeto

ANTES>
const aprendiendoJS = {
    version:{
        nueva: 'ES6+',
        anterior: 'ES5'
},    frameworks: ['React', 'VueJS', 'AngularJS']
}
console.log(aprendiendoJS);

AHORA>
let {version, frameworks}=aprendiendoJS;
console.log(version);
console.log(frameworks);


****Object literal enchancement > Coloca valores juntos

const band = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

ANTES> 
const metallica = {
    banda : banda,
    genero : genero,
    canciones: canciones
}

AHORA>
const metallica = { banda, genero, canciones};


****Funciones en un objeto

const persona = {
    nombre : 'Jimmy',
    trabajo : 'Dev app',
    edad: 30
    musicRock: true,
    mostrarInformacion: function(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    }
}
persona.mostrarInformacion();

****Arreglos, Map y Object.keys
Arreglos> almacenan informacion


const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
console.log(carrito);

const appContenedor = document.querySelector('#app');

let html= '';
carrito.forEach(producto =>{
    html += `<li>${producto}</li>`;
})

appContenedor.innerHTML=html;

**MAP> Conserva el arreglo original y devuelve uno nuevo

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
console.log(carrito);

carrito.map(producto =>{
    return 'El producto es ' + producto;
});

**Object.keys

const persona = {
    nombre : 'Jimmy',
    trabajo : 'Dev app',
    edad: 30
}

console.log(Object.keys(persona));


****SPREAD> Permite combinar 2 arreglos diferentes / crear un nuevo arreglo

let lenguajes = ['Js','PHP','Python'];
let frameworks = ['React', 'Laravel', 'Django'];

let combinacion = [...lenguajes,...frameworks];
console.log(combinacion);

**** .Filter . find .reduce

const personas = [
    {nombre: 'Jimmy', edad:30, aprendiendo:'Js'},
    {nombre: 'Jim', edad:24, aprendiendo:'PHP'},
    {nombre: 'James', edad:26, aprendiendo:'React js'},
]

const mayores = personas.filter(persona => {
    return persona.edad > 20;
});


const Jim = personas.find(persona => {
    return persona.nombre === 'Jim';
})
console.log(Jim);

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
},0);




****PROMISES
> Manejar que el codigo funcione o falle con el "llamado"


const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = false;

        if (descuento) {
            resolve('Descuento aplicado');
        } else {
            reject('No se pudo aplicar el descuento')
        }
    }, 3000);
});

aplicarDescuento.then(resultado => {
            console.log(resultado);
        });

****PROMISES con ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {


    const api = `http://randomuser.me/api/?results=${cantidad}&nat=us`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', api, true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }
    xhr.onerror = (error) => reject(error);
    xhr.send()
});

descargarUsuarios(30)
    .then(
        miembros => console.log(miembros),
        error => console.error(
            new Error('Hubo un error' + error)
        )
    )

****CLASES> Programacion orientada a objetos
**Clases> son comom un plano, permite crear multiples clases

class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad=prioridad
    }
    mostrar (){
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

let tarea1 = new Tarea('Aprender JS', 'Alta');
let tarea2 = new Tarea('Aprender React', 'Alta');
let tarea3 = new Tarea('Aprender Angular', 'Baja');
let tarea4 = new Tarea('Aprender Vue', 'Media');


console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());

****Heredando una clase
**Ventaja: Crear una clase padre y heredar a una clase distinta y realizar pequeños ajustes.
**super hace referencia al "padre", el resto es nuestra modificacion.


class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad=prioridad
    }
    mostrar (){
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}


class ComprasPendientes extends Tarea{
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad= cantidad;
    }
    mostrar(){
        super.mostrar();
        console.log (`y la cantidad de ${this.cantidad}`);
    }
    hola(){
        return 'hola';
    }
}


let tarea1 = new Tarea('Aprender JS', 'Alta');
let tarea2 = new Tarea('Aprender React', 'Alta');
let tarea3 = new Tarea('Aprender Angular', 'Baja');
let tarea4 = new Tarea('Aprender Vue', 'Media');


//console.log(tarea1.mostrar());
//console.log(tarea2.mostrar());
//console.log(tarea3.mostrar());
//console.log(t//area4.mostrar());

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
compra1.mostrar();
console.log(compra1.hola());


import { nombreTarea, crearTarea, tareaCompletada} from './tarea.js';
console.log(nombreTarea);

const tarea1 = crearTarea('Pasear perro','Media');

console.log(tarea1);
tareaCompletada();

****Exportando Clases que heredan otras

import Tarea from './tarea.js';
import ComprasPendientes from './compras.js';



const tarea1 = new Tarea('Aprender JS', 'Urgente');
console.log(tarea1);

tarea1.mostrar();

const cmpra1 = new ComprasPendientes('Pizza', 'Urgente', 2);
console.log(compra1);

compra1.mostrar();
compra1.hola();*/