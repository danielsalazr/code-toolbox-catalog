//  Abstraccion

//  Es armar las clases a partir del comportamiento real de las cosas para su uso en programacion
    function videoPlay(id) {
        const urlSecreta = "https:Platziurl.com/video/"+ id;
        console.log("Se esta reproduciendo la url" + urlSecreta);
    }
    
    function videoStop (id){
      const urlSecreta = "https:Platziurl.com/video/"+ id;
      console.log("Pausamos la url" + urlSecreta);
    }

export class PlatziClass {
  constructor( {
    name,
    videoID,
  }) {
    this.name =name;
    this.videoID = videoID;
  }

  reproducir(){
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}


class Classes{
    constructor({
        name,
        id,
        teacher,
        videoLink,
        comments = [],
        contribution = [],
        questions = [],
        resources= [],
        
    }) {
        this.name = name;
        this.id = id;
        this.teacher = teacher;
        this.videoLink = videoLink;
        this.comments = comments;
        this.contribution = contribution;
        this.questions = questions;
        this.resources = resources;
    }
}

const abstraccionEnJavascript = new Classes({
    name:"Abstraccion en Javascript",
    teacher:"Juan David Castro",
    id:"few646w26g4wr6fwwfer",
    comments:["Ya nadie usa Facebook",],
    videoLink:"https://platzi.com/videos/chuchuwa_chuchuwa",

})
class Course {
    constructor({
        name,
        classes = [],
        comments = []
    }) {
        this._name = name;    //_ Convencion para decir que una variable e privada
        this.clases = classes;
        comments = comments
    }

    // utilizamos los getters y setters  para poder cumplir con la tarea del ecapsulamiento de proteger las cosas en las maneras que necesitemos

    get name () { //getter
        return this._name;
    }
    
    set name (nuevoNombre){ // Setter
        if (nuevoNombre === "Curso malo de programacion basica") {
          console.error("Web... no")
        } else {
          this._name = nuevoNombre;
        }
        
    }
}

/*  Encapsulamiento  utilizando la notacion de prototipos anterior de ecmascript
"use strict";

function Student(name, age, nationality) {
  this._name = name;
  this._age = age;
  this.nationality = nationality;
}

Student.prototype = {
  get name() {
    return this._name;
  },
  set name(newName) {
    this._name = newName;
  },

  get age() {
    return this._age;
  },

  set age(newAge) {
    this._age = newAge;
  },
};

let edgar = new Student("Edgar", 25, "Mexico");
edgar.name = "Juan";
edgar.age = 30
console.log(edgar);

*/

const cursoProgBasica = new Course({
    name:"Curso Gratis de programacion Basica",
})
const cursoDefinitivoHTML = new Course({
    name:"Curso definitivo de HTML",
})
const cursoPracticoHTML = new Course({
    name:"Curso practico de HTML",
})
const cursoPooJavascript = new Course({
    name:"Curso de programacion oientado a objetos con javascript",
    classes: ["Que es abstraccion", abstraccionEnJavascript],
})

class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaJavascript = new LearningPath({
    name:"Escuela de Javascript",
    courses:[
        "Javascript Basico",
        cursoPooJavascript,
    ]
})

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});



const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness",
    "Curso Dataviz",
  ],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal",
  ],
})

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
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
    escuelaJavascript,
  ],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});

//console.log(juan2);
//console.log(juan2.learningPaths[2].courses[1]);    //Llamada a los cursos de la primera carrera de juan2
