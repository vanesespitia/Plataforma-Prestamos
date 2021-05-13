"use strict";

/*console.log("Un mensaje a la consola");
var mensaje = "Es mensaje";
var esDivertodo = true;
console.log(mensaje);
console.log(esDivertodo); 
let x = Math.PI;
console.log(x);*/
/*var main = function(){
    "use strict";

    var mensaje = "Hola mundo!", count = 1,
    pi = Math.PI;

    console.log(mensaje);
}

main();

console.log(123);
console.log("123");
console.table([1,2,3,4]);
console.warn("ten cuidado");
console.error("Existe error en el programa");
console.time("Proceso1");
    let numbers = [6,7,5,3,4,2,1,6,78,1];
    let result = 0;
    numbers.forEach(function(num){
        result += num;
    });
    console.log(result);
console.timeEnd("Proceso1");*/
/*
var unaVariable;
let nombre;

console.log(nombre);
nombre = "Bernardo";
console.log(nombre);

var nombreVar = "Bernardo";
var nombreVar = 123;

console.log(nombreVar);

nombre = "Michelle";
console.log(nombre);

const PI = Math.PI;
console.log(PI);

const menuElemento = document.getElementById("Titulo");
console.log(menuElemento);
console.log(menuElemento.innerHTML);*/

/* Manejo de cadenas */
/*let nombre;

nombre = "Antonio";

let esBueno = "Me Encanta ";
let lenguaje = "JavaScript ";

console.log(esBueno + nombre);

let grupo = "Daft Punk ";
let cancion = "RAM ";

console.log(grupo.length);
//grupo = grupo.concat("tiene un album llamado: ", cancion);
grupo =grupo.toUpperCase();
console.log(grupo);

let separar = grupo.split(" ");
console.log(separar);
console.table(separar);*/

/* Investigar */
/*
// replace();
let saludo = "Hola Bernardo";
let cambio = saludo.replace("Bernardo", "Toño");
console.log(cambio);

//include()
let nums = "1 2 3 4 5";
let numsInc = nums.includes("2");
let numsIncE = nums.includes("6");
console.log(numsInc, numsIncE);

//repeat()
let ja = "ja";
let rep = ja.repeat(5);
console.log(rep);

//Number()
let n = "25";
let f = "25px";
let numss = Number(n);
let floats = Number(f);
console.log(numss, floats);

//parseInt()
let num = "10px";
let char = "10.2";
console.log(parseInt(num), parseInt(char));

//parseFloat()
let float = "10";
let ch = "10.2";
console.log(parseFloat(float), parseFloat(ch));
*/

/** Otros métodos
 * 
 * toFixed()
 * string()
 * date()

*/

/*let lenguajes = ["HTML5", "35", "PHP"];
console.log(typeof(lenguajes));

let numero = 1234;
console.log(typeof(numero));

let persona = {
    nombre: "Antonio", 
    aPaterno: "Cardeña"
}

console.log(typeof(persona));

let fecha = new Date();
console.log(fecha);
console.log(typeof(fecha));*/

/** Arreglos en JavaScript */
/*const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo");
console.log(meses);

console.log(meses[1]);
console.log(meses.length);
console.log(Array.isArray(persona));*/

/** Funciones con arreglos
 * 
 * push()
 * unshift()
 * pop()
 * shift()
 * splice()
 * reverse()
 * sort()
 * 
 */
/*
// push()
 let paises = ["México", "Canada", "Estados Unidos"];
 paises.push("España", "Argentina");

 console.log("Push:\t" + paises);

 // unshift()
 let paises2 = ["México", "Canada", "Estados Unidos"];
 paises2.unshift("España", "Argentina");

 console.log("Unshift:\t" + paises2);

 // pop()
 console.log("No Pop:\t" + paises);
 paises.pop();
 console.log("Pop:\t" + paises);


 // shift()
 console.log("No Shift:\t" + paises2);
 paises2.shift();
 console.log("Shift:\t" + paises2);

 //splice()
 console.log("No Splice:\t" +  paises2);
 paises2.splice(2, 0, "Japón");
 console.log("Splice:\t" +  paises2);

 // reverse()
 console.log("No Reverse:\t" +  paises);
 paises.reverse();
 console.log("Reverse:\t" + paises);

 // sort()
 console.log("No Sort:\t" +  paises);
 console.log("Sort:\t"+ paises.sort());

 console.clear();*/

 /** Objectos literales  */
 /*const persona = {
     nombre: "Antonio",
     aPaterno: "Cardeña",
     edad: 42,
     libros: ["Batallas en el desierto", "Azteca"],
     domicilio: {
         calle: "Calle",
         numeroExterior: 50,
         numeroInterior: "205 B",
         municipio: "Atizapán de Zaragoza"
     }
 }

 console.log(persona);
 console.log(persona.libros[1]);

 console.log(persona["domicilio"]["calle"]);*/

 //console.clear();

 /** Template strings */

 /*const nombre = "Bernardo", 
        trabajo = "Estudiante";

console.log("Nombre: " + nombre + ", Trabajo: "+ trabajo);

console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

const contenedorTexto = document.querySelector("#secMensaje");*/

/*let lista = `<ul>` + `<li>Nombre: ` + nombre + `</li>` + 
`<li>Trabajo: `+ trabajo + `</li>` + `</ul>`;*/

//contenedorTexto.innerHTML=lista;

/*let lista = `<ul>
            <li> Nombre: ${nombre}</li>
            <li> Trabajo: ${trabajo}</li>
        </ul>`;

contenedorTexto.innerHTML=lista;

console.clear();*/


/* Function declaration */
/*function saludar(nombre, trabajo = "No sabemos!"){
    console.log(`Hola ${nombre} y trabajo ${trabajo}`);
}
saludar("Benardo García");
saludar("Bernardo García", "Estudiante de la IBERO."); */

/** Function expression */
/*const hola = function(){
    alert("Hola a todos");
}
hola();*/

const suma = function(a=0, b=0){
    console.log(a+b);
};

/*suma();
suma(20, 10);
suma(100, 150);*/

/** IFE Funciones que se invocan
 *  automátcamente */

(function(Lenguaje){
    console.log(`Me invoco automátiamente y trabajo con ${Lenguaje}.`);
})("JavaScript");

/** Métodos de propiedad
 * (Función adentro de un objeto)
 */

/*
const musica = {
    reproducir: function(cancion){
        console.log(`Reproduciendo la canción: ${cancion}.`);
    },
    pausar: function(){
        console.log("Pausa...");
    }
};

musica.reproducir("Just Feel Better");
musica.reproducir("Despacito");
musica.reproducir("Pachuco");
musica.pausar();*/

/** Declarar método fuera de objeto */

/*musica.borrar=function(id){
    console.log(`Borrar canción con id: ${id}.`);
}

musica.borrar(2);*/

/** Funciones que regresan valor */
const resta = function(a=0, b=0){
    return a-b;
};

let resultado = resta(30, 20);
console.log(resultado);

/** Arrow function */
const restaAF = (a=0, b=0) => a-b;

resultado=restaAF(40, 20);

console.log(resultado);

/** Si e sun solo parámetro, se quita 
 * el paréntesis */

const multiplicarPorDiez = numero => numero*10;

let total = multiplicarPorDiez(5);

console.log(total);

// Ejercicio
var viajando = function(destino){
    return "Viajando a la ciudad de: " + destino;
}

var viaje = viajando("Londres");
console.log(viaje);
viaje = viajando("Paris");
console.log(viaje);

// CON ARROW FUNCTION

const viajandoAF = destino => `Viajando a la ciudad de: ${destino}`;
let viajeAF = viajandoAF("Londres");
console.log(viajeAF);
viajeAF = viajandoAF("Paris");
console.log(viajeAF);

/** Object literal */

const persona = {
    nombre: "Bernardo",
    edad: 21,
    anioNacimiento: function(){
        return new Date().getFullYear()-this.edad;
    }
};

console.log(persona);
console.log(persona.anioNacimiento());

/** Object constructor */

/*function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
};

const tarea1 = new Tarea("Aprender Ionic", "Urgente");
const tarea2 = new Tarea("Aprender Go", "Muy baja");

console.log(tarea1);
console.log(tarea2);*/

/** Clase nuevas en JavaScript */

class Tarea{
    constructor(nombre, urgencia){
        this.nombre=nombre;
        this.ugencia = urgencia;
    }
};

const tarea1 = new Tarea("Aprender Ionic", "Urgente");
const tarea2 = new Tarea("Aprender Go", "Muy baja");

console.log(tarea1);
console.log(tarea2);

/** forEach y map */

/** Scope - Alcance */
// Con var se sigue usando la misma variable. Alcance no delimitado
// Con let el alcance se limita y podemos usar 2 variables distintas con el mismo nombre

let musica = "Pop";

if(musica){
    let musica = "Rap";
    console.log(`Dentro del if ${musica}`);
}

console.log(`El valor de la variable música fuera del if ${musica}.`);

/** Object desctructuring 
 *  La forma en cómo se extraen valores de un objeto */
const cliente = {
    nombre: "Mariana",
    tipo: "Premium",
    datos:{
        ubicacion:{
            ciudad: "México",
            pais: "México"
        },
        cuenta:{
            desde: "11-04-2020",
            saldo: 5000
        }
    },
    gusto:{
        deportes: ["Bicicleta", "Gym", "Baile"]
    }
};

console.log(cliente);

// Forma en la que se hacía anteriormente
const nombreCliente = cliente.nombre, tipoCliente = cliente.tipo;
console.log(nombreCliente);
console.log(tipoCliente);

// Forma como se hace con Object Destructuring

let {nombre, tipo} = cliente;

console.log(nombre);
console.log(tipo);

let {datos:{ubicacion:{pais}}} = cliente;

console.log(pais);

/** Obetner valoe de saldo y arreglo de gustos */

/** OBject literal engancement: Se usa para unir un objeto */

//console.clear();
const banda = "Dua Lipa", genero = "Pop", canciones = ["One Day", "Levitating"];

/** Forma anterior */

/*const DuaLipa = {
    banda: banda,
    genero: genero,
    canciones: canciones
};*/


/** Nueva forma */

const DuaLipa = {banda, genero, canciones};
console.log(DuaLipa);

/** Realizar ejemplos sobre
 * 
 * filter
 * find
 * reduce
 */

/**
 * Ejemplos de profe
 */


const personas = [
    {nombre: "Bernardo", edad: 42},
    {nombre: "Mariana", edad: 43},
    {nombre: "Lau", edad: 44},
    {nombre: "Cris", edad: 62},
    {nombre: "Wow", edad: 41}
];

console.log(personas);

/** Obtener personas mayores a 42 años */
const mayores = personas.filter(persona => persona.edad >42);
console.log(mayores);


/** Extraer informacion de Mariana */

const mariana = personas.find(persona => persona.nombre === "Mariana");
console.log(mariana);

/* Reduce: Obtiene un acumulado de los registros*/

let totalR = personas.reduce((edadTotal, persona)=> {
    return edadTotal + persona.edad;
}, 0); // 0 es a partir de qué número voy a iniciar

console.log(totalR);

/** Promedio de edad */

console.log(totalR/personas.length);


/*
// filter

var ages = [32, 33, 16, 40];
let result  = ages.filter(age => age>32);
console.log(result);

// find
result  = ages.find(age => age==12);
console.log(result);

// reduce

*/

/* Fetch API*/

function descargarUsuarios(cantidad){
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;  

    /** Llamada por fetch */
    fetch(api)
          .then(respuesta => respuesta.json())
          .then(datos => imprimirHTML(datos.results));
};

descargarUsuarios(10);

function imprimirHTML(datos){
    datos.forEach(usuario =>{
        const li = document.createElement("li");
        const {name:{first, last}, picture: {medium}, nat} = usuario;

    li.innerHTML = `
        Nombre: ${first} ${last}<br>
        Pais: ${nat}<br>
        Imagen: <img src="${medium}">
    `;
    document.querySelector("#app").appendChild(li);
    })
};