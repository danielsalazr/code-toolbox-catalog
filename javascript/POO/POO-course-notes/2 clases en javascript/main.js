//Todos loa objetos iterabkes heredan el prototipo object
//Objeto iterable
const natalia = {
    //Atributos
    name: "Natalia",
    age: 20,
    cursosAprobados:[
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS"
    ],

    //Creamos un metodo
    aprobarCurso: function(nuevoCurso) {  // Funcion anonima
        this.cursosAprobados.push(nuevoCurso);       //Refrenciamos al mismo objeto con this que en este caso seria natalia
    },

};  // hereda el protoripo object

// Prototipos en javascript - Objetos en lo cotidiano
function Student( name, age, cursosAprobados) {
    //Atributos
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;


    // Creamos el metodo
    // this.aprobarCurso = function(nuevoCurso) {
    //     this.cursosAprobados.push(nuevoCurso); 
    // }

};

//Creamos ub metodo  en la clase o prototipo por fuera de; scope o del prototipo
Student.prototype.aprobarCurso = function(nuevoCurso) {
         this.cursosAprobados.push(nuevoCurso);
     };      //Se anade el metodo en la intancia  de prototipe


//  Protoripos con la sintaxis de clases
class Student2{
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;

    // Creamos el metodo
    // this.aprobarCurso = function(nuevoCurso) {
    //     this.cursosAprobados.push(nuevoCurso); 
    // }
    }
    

    aprobarCurso(nuevocurso) {
        this.cursosAprobados.push(nuevocurso);
    }
}
//ROR   Recibe un objeto retorna  esta opcion es de las mejores para generar clases con paso a entradas incolpletas
//      Donde entra la posibilidad de que el objeto pueda o no tener el atributo
class Student3{
    constructor({
        name,
        age,
        twitter,
        instagram,
        facebook,
        cursosAprobados = [], // valores predeterminados
        email,
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.twitter =  twitter;
        this.instagram = instagram;
        this.facebook = facebook;
        this.email = email;

    // Creamos el metodo
    // this.aprobarCurso = function(nuevoCurso) {
    //     this.cursosAprobados.push(nuevoCurso); 
    // }
    }
    

    aprobarCurso(nuevocurso) {
        this.cursosAprobados.push(nuevocurso);
    }
}

const andreita = new Student3( { name: "Andrea", age: 25, cursosAprobados: ["Python POO", "Python intermedio"]})
const miguelito = new Student2("Miguelito", 8, ["Programacion Orientada a Objetos"])
const juanita = new Student("Juanita Alejandra", 22, ["Curso de Introduccion a Javascript", "Curso de python basico"]);
const samario = new Student3({
    email:"Samario@platzi.com",
    name:"Samario",
    age:35,
    facebook:"Samario57"
})
//natalia.cursosAprobados.push("Curso de responsive Design");
miguelito.aprobarCurso("Introduccion a C++")
juanita.aprobarCurso("Curso de Unreal Engine");

console.log(miguelito)
console.log(juanita)
console.log(juanita.cursosAprobados)
console.log(natalia.cursosAprobados)
console.log(samario)