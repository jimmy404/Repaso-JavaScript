export const nombreTarea = 'Pasear al perro';

//Exportar funcion

export const crearTarea = (tarea, urgencia) => {
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
}

export const tareaCompletada = () => {
    console.log('La tarea se completo');
}
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


//l//et tarea1 = new Tarea('Aprender JS', 'Alta');
//let tarea2 = new Tarea('Aprender React', 'Alta');
//let tarea3 = new Tarea('Aprender Angular', 'Baja');
//let tarea4 = new Tarea('Aprender Vue', 'Media');


//console.log(tarea1.mostrar());
//console.log(tarea2.mostrar());
//console.log(tarea3.mostrar());
//console.log(t//area4.mostrar());

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
//compra1.mostrar();
//console.log(compra1.hola());