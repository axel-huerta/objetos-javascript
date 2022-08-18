console.log("Hello I am object")

class Miclass{
    constructor(name, lastName, genero){
        this.name = name;
        this.lastName = lastName;
        this.genero = genero;
    }
    mOs(){
        let confrimacion = equipo.genero;
        if (confrimacion == true){
            return "masculino"
        }else{
            return "femenina"
        }
    }
}
function recolectarData(){
    let a = prompt("name: ")
    let b = prompt("LasName: ")
    let c = prompt("m o f: ")
    return a, b, c;
}

function ll(a, b , c){
    const equipo = new Miclass(a, b, c);
    return equipo
}
// add elements
//equipo["dia"]="martes"
// delete element
//delete equipo.dia;
//....
//let lastName = prompt("ingrese dia: ");
//let ege = prompt("ingrese dia: ");
//let entradas = prompt("ingrese dia: ");
//let dia = prompt("ingrese dia: ");
// recorrer--
//mostrar por consola

console.log(ll(recolectarData()))



//axeample
let usert = {
    nombre: "axel",
    materia: "fundamentos",
    carrera: "informatica",    //propiedades : valores <--
    educacion: "it",
    correlativas: false,
    "año inicio": 2020,
    añoFinal: 2025
};
//console.log(usert)