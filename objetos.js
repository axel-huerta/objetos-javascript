/*
//constructor de objetos
let user = new Object();

//::::::::::::::::::sintaxis de objeto::::::::::::::::::::::://clave : valor
let usert = {
    nombre: "axel",
    materia: "fundamentos",
    carrera: "informatica",    //propiedades : valores <--
    educacion: "it",
    correlativas: false,
    "año inicio": 2020,
    añoFinal: 2025
};


//alert(usert.carrera);
//alert(usert.nombre);
//alert(usert.año);
//alert(usert.añoFinal);
//alert("booleans: " + usert.correlativas)

//eliminar una propiedad: delete


delete usert.materia;

console.log(usert)


//-------------tarea------------


let usertt = {};

usertt.name = "John";
usertt.surname = "Smith";   //insertar propiedades y valores al objeto
usertt.name = "Peter";
delete usertt.name;
//-------------tare dos---------------

const comidas={
    id: 1,
    nombre: "manzana",
    color: "rojo"
}
//:::::::::::::::::::CLASES::::::::::::::::

class Comida {
    constructor(id, nombre, color){
        this.id = id;
        this.name = nombre;
        this.color = color;
    }
}

const manzana = new Comida(1, "manzana", "rojo");
const durazno = new Comida(2, "durazno", "amarillo");
const mandarina = new Comida(3, "mandarina", "naranja");
const pera = new Comida(4, "pera", "amarillo");
const vanana = new Comida(5, "vanana", "amarillo");

console.log(mandarina)
console.log(vanana)

//:::::::::::::::::::: METODOS :::::::::::::::::::::::::::


class consultora {
    //constructor
    constructor(id, nombre, apellido, dirreccion){
        this.id;
        this.nombre;
        this.apellido;
        this.dirreccion;
    }
    nombress(){ //metodo
        return `${this.nombre} de color ${this.color}`; 
    }
}

class restaurante extends consultora {
    constructor(localidad, moso, tipo, horarios){
        super(id, nombre, apellido, dirreccion)
        this.localidad = localidad;
        this.moso = moso;
        this.tipo = tipo;
        this.horarios = horarios;
    }

    nombrarRest(){
        return `restaurante ${this.nombre}`;
    }
}


const oreo = new restaurante("jkhhfd", "uhfuf", true, "djhdjh")

console.log(oreo.nombrarRest())





//---practica---
let a = new String("hello");

const o = {};

const c = {
    nombre: "juan",
    apellido: "sanchez",
    edad: 30,
    pasatiempos: ["correr", "saltar", "ejercicio", "dar clases"],
    soltero: false,
    contactos:{
        telefono:7387387,
        mail:"jhdjd2"
    },
    saludar: function(){
        console.log("holaaa:)")
    },
    decirMiNombre: function(){
        console.log(`hello, I am is ${this.nombre} ${this.
        apellido} and tengo ${this.edad} años`)
    }
};
console.log(c.contactos)

//calses


c.saludar();
c.decirMiNombre();
//listar las llaves y valores
console.log(Object.keys(c))
console.log(Object.values(c))
console.log(c.hasOwnProperty("nombre"))
*/
function persona (nombre, edad){
    constructor
    this.edad = edad;
    this.nombre = nombre;
};

persona.prototype.saludo = function(){
    console.log("helloo");
};

class Persona {
    constructor(nombre,edad){
        this.edad = edad;
        this.nombre = nombre;
    };
    saludo(){
        console.log("hellos work")
    };
};

