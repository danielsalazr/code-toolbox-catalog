//  Trabajando con objetos literales vs clases 

const juan1 = {
    name: "JuanDc",
    uysername:"juandc",
    points:100,
    socialMedia:{
        twitter:"fjuandc",
        instagram:"fjuandc",
        facebook:""
    },
    approvedCourses: [
        "Curso definitivo de html y css",
        "Curso practico de Html y Css",
    ],
    learningPaths: [
        {
            name: "Escuela de desarrolo web",
            courses: [
                "Curso definitivo de html y css",
                "Curso practico de Html y Css",
                "Curso de responsive design",
            ],
        },
        {
            name:"Escuela de videojuegos",
            courses:[
                "curso de introduccion a la produccion de Vgz",
                "Curso de unreal engine",
                "Crso de unity 3D",
            ]
        }
    ],
};



const miguelito = {
    name: "miguelito",
    uysername:"miguelitofeliz",
    points:1000,
    socialMedia:{
        twitter:"miguelitofeliz",
        instagram:"miguelitofeliz",
        facebook:""
    },
    approvedCourses: [
        "Curso de DataBussiness",
        "Curso Dataviz",
    ],
    learningPaths: [
        {
            name: "Escuela de desarrolo web",
            courses: [
                "Curso definitivo de html y css",
                "Curso practico de Html y Css",
                "Curso de responsive design",
            ],
        },
        {
            name:"Escuela datascience",
            courses:[
                "Curso de DataBussiness",
                "Curso Dataviz",
                "Curso de tableu",
            ]
        }
    ],
};

// Programacion orientada a objetos


class LearningPaths {
    constructor({
        id,
        name,
        courses = [],
    }) {
        this.id = id;
        this.name = name;
        this.courses = courses;
    }

    addCourse (course){
        this.courses.push(course)
    }

    deleteCourse (oldCourse) {
        const courseIndex = this.courses.findIndex(
                course => course.id === oldCourse.id
            );

        this.courses.splice(courseIndex,1);
    }
}
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.email = email;
        this.name = name;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses =  approvedCourses;
        this.learningPaths =  learningPaths;
    }
}
// Creando clases de las rutas de aprendisaje
const desarrolloWeb = new LearningPaths({
    id:1,
    name:"Escuela de desarrollo Web",
    courses:[
        "Courso de Frontend Developer",
        "Curso definitivo de HTML y CSS",
    ]
})

const python = new LearningPaths( {
    id:2,
    name:"Escuela de python",
    courses:[
        "Curso de python basico",
        "Curso de python intermedio",
    ],
})


const juan2 = new Student({
    name:"JuanDc",
    username:"Juanitodc",
    email:"Juanel@platzi.com",
    instagram:"jaundc1",
    learningPaths: [
        desarrolloWeb,
        python,
    ],
});


const miguelito2 = new Student({
    name:"Miguelito",
    username:"MiguelitoFeliz",
    email:"MiguelitoFeliz@juanito.com",
    twitter:"MiguelitoDurito",
    learningPaths:[
        python,
    ],
})



desarrolloWeb.addCourse("Introduccion a React")
desarrolloWeb.deleteCourse(1);

console.log(juan2)
console.log(miguelito2);
//console.log(desarrolloWeb);

