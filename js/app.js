/*

**** DATOS PRIMITIVOS
var cadena ="Ada Lovelace";
var pi = 3.14;
var bool=true/false;
var nodefinida=undefined;
var nula=null;


**** objetos nativos:
** No dependen del navegador.
** No es recomendable usar los obj. nativos( String,Number,Boolean)
para definir datos, es mejor usar los datos primitivos.
- String
- Number
- Boolean
- Data
- Math
- RegExp (Expresiones regulares)
- Array
- Function
- Object

**** Objetos de ALTO Nivel: Dependen del navegador.
- Window > Corresponde al modelo de objetos de "Navegador"
- Screen > Corresponde al modelo de objetos de "Navegador"
- Navigator > Corresponde al modelo de objetos de "Navegador"
- Location  > Corresponde al modelo de objetos de "Navegador"
- History  > Corresponde al modelo de objetos de "Navegador"
- Document > Corresponde al modelo de objetos de "documento" > Para
documentos html dentro del documento.

**** Definicion de OBJETO:
> var programadora = {nombre:"Ada", apellido:"Lovelace",ano:1815};
> ¿Que contiene un Objeto?
** PROPIEDADES: Se definen en modo nombre: Valor. (nombre, apellido, ano)
** METODOS: Acciones que se pueden ejecutar sobre un objeto.
** Las variables contienen valores, pero unicos por cada variable.
** los OBJETOS pueden contener uno o mas valores, se escriben en
modo/clave valor y ser primitivos-objetos-funciones.

*** CONSTRUCTORES > 1-2-3 > No es conveniente usar, es mejor usar NATIVOS.

1-STRING > Permite almacenar cadenas.
    var x1 = new String(); > no es conveniente utilizar.
    var y1 = 3.14 > Si datos primitivos.

2-NUMBER > Permite almacenar ---.
    var x1 = new Number(); > no es conveniente utilizar.
    var y1 = "Ada" > Si datos primitivos.

3-Boolean > Permite almacenar valores de tipo true/false.
    var x1 = new Boolean(); > no es conveniente utilizar.
    var y1 = true > Si datos primitivos.

4- Array:
    var x4 = new Array(); > No es conveniente utilizar
    var y4 = [] > ESTO si

5- RegExp:
    var x5 = new RegExp();> No es conveniente utilizar
    var y5 = /()/; > Si datos primitivos.

6- Function:
    var x6 = new Function(); > No es conveniente utilizar
    var y6 = function(); > Si datos primitivos.

7- Date
    var x7 = new Date();

8- Math:
No se puede declarar con "new" por que es un objeto.
Se encuentra incluido como objeto global en JS.

9- Object
    var x8 = {};

*/
