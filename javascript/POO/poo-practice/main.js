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

const juanita = new Student("Juanita Alejandra", 22, ["Curso de Introduccion a Javascript", "Curso de python basico"]);

//natalia.cursosAprobados.push("Curso de responsive Design");
juanita.aprobarCurso("Curso de Unreal Engine");

console.log(juanita)
console.log(juanita.cursosAprobados)
console.log(natalia.cursosAprobados)