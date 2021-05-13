/*let Usuario = function(nombre) {
    this.nombre = nombre;
    this.decir = function() {
        log.agregar("Usuario: " + this.nombre);
    };
}

let UsuarioDecorado = function(usuario, nacimiento) {
    this.usuario = usuario;
    this.nombre = usuario.nombre;
    this.nacimiento = nacimiento;
    let fecha = new Date();
    let edad = (fecha.getFullYear()-nacimiento);
    this.decir = function() {
        log.agregar(`Usuario: ${this.nombre}, Nacimiento: ${this.nacimiento}, Edad: ${edad} años`);
    };
}
// logging helper

let log = (function() {
    let log = "";

    return {
        agregar: function(msg) { log += msg + "\n"; },
        mostrar: function() { console.log(log); log = ""; }
    }
})();

function run() {

    let usuario = new Usuario("Kelly");
    usuario.decir();

    let decorado = new UsuarioDecorado(usuario, 1985);
    decorado.decir();
    log.mostrar();
}

run();*/

/*
class Pruebas {  
    constructor(){
        this.rand=Math.random()%10;
        if(typeof Pruebas.instance === "object"){
            return Pruebas.instance;
        }
        Pruebas.instance = this;
        return this;
    }
}

const a = new Pruebas();
const b = new Pruebas();

console.log(a.rand,b.rand)*/

/*
function Rectangulo(alto, ancho){
    return Object.freeze ({
        calcArea,
    });
    function calcArea(){
        return alto*ancho;
    }
}

Rectangulo.prototype.calcArea =() =>
    console.log("hola");


const cuadrado = Rectangulo(10, 10);

console.log(cuadrado.calcArea());
*/
/*
const getCharacters = async({name, status = "alive"}) => {
    const API = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`;
    const data = await fetch(API);
    const characters = await data.json();

    return characters.results;
}

const characters = getCharacters({
    name: "rick",
});

console.log(characters.results);*/

/*

let id=1;
function crearAlumno(nombreAlumno, semestreAlumno)
{
  let idAlumno=id;
  id+=1;
  const encript=function()
  {
    //funcion que encripta el nombre
    let h = 0, l = nombreAlumno.length, i = 0;
    if ( l > 0 )
      while (i < l)
        h = (h << 5) - h + nombreAlumno.charCodeAt(i++) | 0;
    return h;
  }; 
  const getId=function()
  {
    return idAlumno;
  };
  const getEncryptedValue=function()
  {
    return encript();
  };
  return{
    nombre: nombreAlumno,
    semestre: semestreAlumno,
    getId: getId,
    codigo: getEncryptedValue
  };
}
const Bernardo=crearAlumno("Bernardo", 6);
console.log(`${Bernardo.nombre} cursa el semestre #${Bernardo.semestre}, su id es ${Bernardo.getId()} y su código privado es ${Bernardo.codigo()}`);
const Mauricio=crearAlumno("Mauricio", 6);
console.log(`${Mauricio.nombre} cursa el semestre #${Mauricio.semestre}, su id es ${Mauricio.getId()} y su código privado es ${Mauricio.codigo()}`);*/

function empleado(nombre, edad)
{
  let totalComisiones=0;
  let sueldo=100;
  const aumentarComision=function()
  {
    this.totalComisiones=this.totalComisiones+1;
  }
  const pagoTotal=function()
  {
    let i=0;
    let total=sueldo;
    while(i<totalComisiones)
    {
      total=sueldo*1.1;
      i++;
    }
    return total;
  };
  return{
    nombre:nombre,
    edad:edad,
    sueldo:sueldo,
    totalComisiones: totalComisiones,
    pagoTotal:pagoTotal,
    darComision:aumentarComision,
  }
}
let Bernardo=empleado("Bernardo", 23);
Bernardo.darComision();
Bernardo.darComision();
Bernardo.darComision();
console.log(Bernardo.nombre+" tiene "+Bernardo.edad+" anios, su sueldo es "+Bernardo.sueldo+" tiene "+Bernardo.totalComisiones+" comisiones y su pago total es: "+Bernardo.pagoTotal());