/* 
  ? TIPOS BÁSICOS DE VARIABLES
*/
// ! Boolean 
let muted: boolean = true;
muted = false;

// ! Números
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// ! String
let nombre: string = 'Sebastián';
let saludo: string = `Me llamo ${nombre}`;

// ! Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
people.push("Sebastián");

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9);

// ! Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
  Amarillo = "Amarillo",
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// ! Any
let comodin: any = "Joker";
comodin = { type: "Wildcard" }

// ! Object
let someObject: object = { type: "Wildcard" };

/*
  ? FUNCIONES
*/
function add (a: number, b: number): number {
  return a + b;
}

const sum = add(1, 2);
// ? Cómo definir una función como valor de retorno de una función
function createAdder (a: number): (number: number) => number {
  return function (b: number) {
    return b + a;
  }
}

const addFour = createAdder(4);

const fourPlusSix = addFour(6);

console.log(fourPlusSix);

// ? Argumentos opcionales
function optionalLastName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

const sebastian = optionalLastName('Sebastián', 'García');
const daniela = optionalLastName('Daniela');

console.log(sebastian);
console.log(daniela);

// ? Argumentos predefinidos en caso de que falten
function defaultLastName(firstName: string, lastName: string = 'Smith'): string {
  return `${firstName} ${lastName}`;
}

const isabella = defaultLastName('Isabella');
const adriana = defaultLastName('Adriana', 'Paz');

console.log(isabella);
console.log(adriana);

/* 
  ? INTERFACES = La forma que tiene un objeto
*/
interface Rectangulo {
  ancho: number
  alto: number
  color?: Color // ! Parametro opcional
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.Rojo,
}

function area(r: Rectangulo) {
  return r.alto * r.ancho;
}
const areaRect = area(rect);
console.log(areaRect);  

console.log(rect.toString());

rect.toString = function () { 
  return this.color ? `Un rectangulo ${this.color}` : 'Un rectangulo'
}

console.log(rect.toString());
