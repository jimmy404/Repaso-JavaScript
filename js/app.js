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

    *** OBJETOS NATIVOS: STRING

**** INSTANCIACION de una cadena/string:

var daw = "Desarrollo de app web";
var dam = 'Desarrollo de app multiples';
var asir = "Administracion de 'Sistemas informaticos en red'";
var smr = "Sistemas \"Multiples\" y plenos";
var ciclos = new String("");

**** Concatenar cadenas (cadenas moduladas);

ciclos += "Hay 3 ciclos de Grado Superior: \n";
ciclos += daw + ", " + dam + " y " + asir + "\n";
ciclos += " y 1 ciclo de Grado Medio: \n";
ciclos += smr;

    alert (ciclos);

** length > Sirve para ver la cantidad de caracteres.
    alert("La longitud de la cadena ciclos es: "+ciclos.length);

**** Metodos de busqueda

** charAt(<num>) > Devuelve el caracter de una posicion.
    alert("El caracter 16 de la cadena de ciclos es : "+ciclos.charAt(16));
** indexOf(<caracter>)> Devuelve la primera posicion de un caracter en la cadena.
    alert("La primera aparicion de la letra a en ciclos es: "+ciclos.indexOf("a"));
** lastIndexOf(<caracter>)> Devuelve la ultima posicion de un caracter en la cadena.
    alert("La primera aparicion de la letra a en ciclos es: "+ciclos.lastIndexOf("a"));
** search(<cadena|expresion>): buscar una cadena o expresion regular en otra cadena.
    alert("Busca la cadena 'web' en la variable daw"+daw.search("web"));
** match(<expreision regular>): Busca una expresion regular en otra cadena.

**** COMPARACION:
** compare(<cadena>): Devuelve -1(antes), 0(igual), 1(despues);
    alert("Es daw menor que dam" +daw.localeCompare(dam));

**** INCLUYE, EMPIEZA O TERMINA
** include(<cadena>): Devuelve true si la cadena incluye el parametro.
    alert("incluye 'app' daw "+daw.includes("app"));
** starsWith(<cadena>): Devuelve true si la cadena empieza con el parametro
    alert("incluye 'app' daw "+daw.includes("app"));
****CONCATENACION Y REPETICION
** concat(<cadena>):concatena a la cadena el parametro;
    alert("Concatena daw con dam\n"+daw.concat(dam));
** repeat(<numero>): repetir la cadena el numero de veces que aparece
como parametro.
    alert("Repetir daw\n "+daw.repeat(3));

**** EXTRACCCION
** slice(<posicion inicial>,<posicion final>): devuelve la cadena comprendida
entre ambas posiciones.
    alert("La cadena que hay entre el 0 y el 1 en daw es: "+daw.slice(0,1));
** substring(<posicion inicial>,<posicion final>): devuelve la cadena comprendida
entre ambas posiciones.
Si pongo al reves, lo reordena(ej, 6-4 toma 4-6)
    alert("La cadena que hay entre el 0 y el 1 en daw es: "+daw.substring(0,1));
** substr(<posicion inicial>,<posicion final>): devuelve la cadena comprendida
entre ambas posiciones.
Si pongo al reves, lo reordena(ej, 6-4 toma 4-6)
    alert("La cadena que hay entre el 5 y el 7 en daw es: "+daw.substr(5,7)); 
** split(<caracter>,[opcional<numero de vceces>]) divide la cadena en un array
de subcadenas separadas por el caracter del primer parametro
    alert("La cadena daw separada por espacios es "+daw.split(" "));
** trim(<cadena>): Extrae los caracteres de la cadena eliminando los espacios
del principio y del final.
    alert("La cadena sin espacios quedaria: \n"+"                  Hola, caracola             ".trim());

    **** MAYUSCULAS Y MINUSCULAS
** toLowerCase(): Devuelve la cadena en minusculas.
    alert(daw.toLowerCase());
** toUpperCase(): Devuelve la cadena en mayusculas.
    alert(daw.toUpperCase());

**** Metodos especiales
** toString: devuelve el valor del objeto String
** valorOf: devuelve el valor primitivo del objeto.


//**** OBJETOS NATIVOS > NUMBER
//Solo hay un tipo de dato numerico.
// Cambio de base entre numeros (pasar numeros de una base a otra)

**** ININITO Y -INFINITO
***Infinito: N° mas grande que puede almacenarse en una variable.
*** ¿Como lo sabemos, como se llega?
** ej.
var inf = 2;
    while(inf!=Infinity){
    alert(inf);
    inf=inf*inf;
}
** ej.
var div1=2, div2=0;
    alert("Division 2/0="+2/0);
    alert("Division -2=0"+-2/0);
** ej.
var div1=2, div2=0;
    lert("Division 2/0="+2/0);
    alert("Division -2=0"+-2/0);
    alert("Typeof: "+(div1/div2));


**** NaN
var atipico=100/"casa";
    alert("100/'casa'="+atipico);

** ¿como se si es NaN o no?

var atipico=100/"casa";
    alert("100/'casa'="+atipico);
    alert("100/'10'="+atipico);
    alert("¿Es un NaN atipico? "+isNaN(atipico));

** ¿De que tipo es NaN?
var atipico=100/"casa";
    alert("100/'casa'="+atipico);
    alert("100/'10'="+atipico);
    alert("¿Es un NaN atipico? "+isNaN(atipico));
    alert("¿De que tipo es NaN? "+typeof(atipico));


**** NUMEROS COMO OBJETOS
** Es recomendable no usar Number (es lento en la ejecucion/puede dar errores),
es conveniente usar los datos PRIMITIVOS.


var num =123;
       var num2 = new Number(123);
       alert("num "+typeof(num));
       alert("num2 "+typeof(num2));

       alert("num===num2"+(num===num2)); > Mismo valor/diferente tipo
       

**** PROPIEDADES
var maximo = Number.MAX_VALUE; alert("Maximo="+maximo);
var minimo = Number.MIN_VALUE; alert("Minimo="+minimo);
var neginf = Number.NEGATIVE_INFINITY; alert("-Inf="+neginf);
var posinf = Number.POSITIVE_INFINITY; alert("+Inf="+posinf);
var numnan = Number.NaN; alert("NaN="+numnan);


**** METODOS
*** Se escriben en minuscula despues del nombre de la variable.
** toFixed(<num decimales>): Cadena con el numero especifico de decimales indicado.
var x = 9.8765;
alert(x.toFixed(0));
alert(x.toFixed(2));
alert(x.toFixed(6));

** toPrecision(<num cifras>) Cadena con el numero especifico de cifras indicado.
var y = 9.8765;
alert(y.toFixed()); > Sin el cero, muestra el numero.
alert(y.toFixed(2));
alert(y.toFixed(6));

** toExponential: Cadena con el numero redondeado a notacion cientifica.

var y = 9.8765;
alert(y.toPrecision());
alert(y.toPrecision(2));
alert(y.toPrecision(6));
alert(y.toExponential(6));

** valueOf: Devuelve el valor primitivo de un objeto.

** toString: Devuelve la cadena de un numero.

var j = 123;
    alert(j.toString());
    alert((123).toString());
    alert((123+7).toString());

**** METODOS GLOBALES PARA CONVERTIR VARIABLES EN NUMEROS

    alert (Number(true)); Devuelve 1
    alert (Number(false)); Devuelve 0
    alert (Number(new Date())); Devuelve el numero de milisegundos desde el dia 01/01/1970
    alert (Number("10")); Devuelve el numero de la cadena.
    alert (Number("casa")); Devuelve NaN

** parseInt()> Muestra enteros / parseFloat()> Muestra tmb decimales
    alert(parseInt("10.6")) > 10
    alert(parseFloat("10.6")) > 10.6
    alert(parseFloat("10 6")) > 10 (Lee hasta el espacio, no toma lo demas)
    alert(parseInt("10 6")) > 10 (Lee hasta el espacio, no toma lo demas)

    
**** OBJETO Math 
*** Permite realizar operaciones matematicas.
*** NO ES UN CONSTRUCTOR.
*** Escribimos el objeto seguido de . y la propiedad del metodo que utilizemos.
    ej. var x = new Math(); NO

    PROPIEDADES
    E, 
    LN2 (Logaritmo neperiano de 2)
    LN10 (Logaritmo neperiano de 10)
    LOG2E (logaritmo de 2 E)
    LOG10E (logaritmo de 10 E)
    PI,
    SQRT1_2 (Raiz cuadrada de un medio)
    SQRT2 (Raiz cuadrada de dos)

    ej.
var pi = Math.PI;
    alert("El numero PI vale: "+pi);
*/
