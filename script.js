console.log("Hola mundo");

const nombre = "Emmanuel";
let apellido = "Vazquez";

console.log(nombre);
console.log(apellido);

//nombre = "Alberto"
//apellido = "Jose"

//console.log(apellido);

//Objetos de javascript

const persona = {
    nombre : "Emma",
    apellidos : "Nombre", edad : "21", apodos : 
    [
        "pepe", "chepito", "morris"
    ]
};
persona.apellidos = "Vazquez "
console.log(persona.apellidos);
console.log("====================FIN DE OBJETOS====================");

//function saludar(nombre) {
    //return "Hola" + nombre;
//}

    //const saludo = (nombre) =>{
        //return "Hola" + nombre;
    //}

      
    const saludar = nombre =>
         "Hola " + nombre;
    
    const saludo = saludar(persona.apellidos); //Hola jose
    console.log(saludo);
    console.log("===================FIN FUNCIONES=================");
    console.log("===================LISTAS=================");

    const listaNumeros = [
        5,10,3,8,9
    ];

    console.log(listaNumeros);
    listaNumeros[3] = 7;
    console.log(listaNumeros);

    const numerosMultiplicados = listaNumeros.map(
    (numeroEnElQueVoy) => {
        return numeroEnElQueVoy * 3;
    }
);

console.log(numerosMultiplicados);

const numerosEnObjetos = listaNumeros.map (
    (numeroEnElQueVoy) => {
        return {
            valor: numeroEnElQueVoy
        }
    }
);
console.log(numerosEnObjetos);

// funcion filter

const numerosX = [90, 70, 30, 10, 50];
const numerosFiltrados = numerosX.filter(
    numX =>  numX > 50
    
);
console.log(numerosFiltrados);

// ---- AQUÍ ESTÁ LA CORRECCIÓN ----
const personas = [
    { nombres: "Emmmma", edad: 20 },
    { nombres: "Jose", edad: 10 },
    { nombres: "Fer", edad: 25 }
];
// ---------------------------------

const personasMayores = personas.filter (
    (personaX) => {
        return personaX.edad > 17;
}
);
console.log(personasMayores);

const numerosY = [3,6,9,12,16];

const sumaNumero = numerosY.reduce(
    (variablePersistente, elemento) => {
        return variablePersistente + elemento;
    }, 0
)
console.log(sumaNumero);