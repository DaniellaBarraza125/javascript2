const booleano1 = true;
const booleano2 = false;

const booleanoAnd = booleano1 && booleano2;
const booleanoOr = booleano1|| booleano2;

const booleanoNot = !booleano1;

const booleanoMix0 = booleanoOr && booleano1||!booleanoAnd;

// OPERADORES

const valorDivision = 17/3;

console.log('valor division con dos decimales=', valorDivision.toFixed(2));
const valorResto = 17-7;

// // LOGICA DE PROGRAMACION

const A = 9;
const B ="9";

if (A == B) {
    console.log("son iguales");
} else {
    console.log("son diferentes");
};
// si tiene === pasa a ser diferente ya que no es el mismo tipo de dato

const mochila = [1,2,3,4,5,6,7,8,9,10]
console.log(mochila.length);
if (mochila.length >= 10) {
    console.log("No puedo cargar con tantas cosas");
}
 else if (mochila.length > 2 && mochila.length < 10) {
    console.log("que bien voy con mi mochila");
}
else {
    console.log("creo que no necesito una mochila");
    };

for (let contarHasta10 = 0; contarHasta10 <= 10;contarHasta10++) {
    console.log(contarHasta10);
}
 let diaFestivo = true;
 let Festivo = diaFestivo == false  ? "hoy trabajo":"hoy no trabajo";
 console.log(Festivo);

 let arrayBucle = [0];
 let inicio = 4;
 while (inicio <= 18){
    console.log("numeros del 4 al 8 con while", inicio);
    inicio++;
 }

 for (let index=4;index <=18;index++){
    console.log("del 4-18=", index);
    arrayBucle.push(index);
 }

console.log("agregando a array", arrayBucle);

let array = ['Con','Sofia','aprendiendo','bucles'];

for (let elemento of array) {
    console.log("mostrar con for of= ", elemento);
    
}
for (let dentro in array) {
    console.log("mostrar for in", dentro);
}

let dani = {
    altura: 170,
    apellido: "Barraza",
    favColor: "amarillo",
}

for (let cosasDani in dani){
    console.log("comprobado for in en objeto=", cosasDani);
}

let numero = 0;

while (numero <= 20){
    if (numero%3==0)
    {console.log("patata")}
    else {
    console.log(numero)};
    numero++;   
}

// EXTRAS

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
      },
      {
        nombre: "Laura",
        edad: 24,
      },
      {
        nombre: "Jenny",
        edad: 10,
      },
    ];

let personasNombre =[];

for (const cuatroLetras of gente) {
    if (cuatroLetras.nombre.length == 4) {
        personasNombre.push(cuatroLetras)
        
    }
}
console.log("nombres 4 letras", personasNombre);

let menoresCuarenta = [];

for (const menores of gente){
    if (menores.edad <= 40){
        menoresCuarenta.push(menores)
    }
    
}
console.log("lista menores 40=", menoresCuarenta);
// TEST 1
let ordenador = {
    marca:"La pava",
    año: 2020,
    tipo:"portátil",
    perifericos: ["","touchPad"],
    almacenamiento: {
        discos: ["SSD", "HDD", "SSD"],
        maestro: 0
    },
}
console.log(typeof ordenador.marca);

if (typeof ordenador === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
//   TEST 2


  if (ordenador.marca === "La pava") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
//   // TEST 3


  if (ordenador.tipo === "portátil") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4

  if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
//   // TEST 6
  if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
//   --------------------------------------------

let arri =[];

console.log("array es un objeto =", typeof arri);

let arr=[{name:"pepito", 
age:25,},{name:"pepito",age:35,},{name:"Juan",age:10,}];


  // TEST 1
      if (typeof arr === "object" && arr.length >= 0) {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }

      // TEST 2


      if (typeof arr[0] === "object") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
    //   // TEST 3
      if (typeof arr[1] === "object") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
      // TEST 4
      if (typeof arr[2] === "object") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
      // TEST 5
      if (arr.length === 3) {
        console.log("length array=","apruebas");
      } else {
        console.log("suspendes");
      }
    //   // TEST 6
      if (arr[0].name === arr[1].name) {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }

      // TEST 6
      if (arr[1].name === "pepito") {
        console.log("test 6=","apruebas");
      } else {
        console.log("suspendes");
      }


    //   // TEST 7
      if (arr[1].age > arr[2].age) {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
    //   // TEST 8
      if (arr[0].age === 25) {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
      // TEST 9
      if (typeof arr[2].name === "string") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }


    //   // TEST 10
      if (arr[2].name[0] === "J") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }

 