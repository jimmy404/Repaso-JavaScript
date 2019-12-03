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

**** Scope (Alcance de los valores> Var= se mezclan // Let-Cons dentro de llaves NO)

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
console.log('Fuera del if :', musica);*/


