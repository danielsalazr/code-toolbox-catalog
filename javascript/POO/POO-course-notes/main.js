//  Abstraccion

//  Es armar las clases a partir del comportamiento real de las cosas para su uso en programacion
class Comment {
  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar (){
    console.log(this.studentName + " (" + this,this.studentRole+")");
    console.log(this.likes + " Likes");
    console.log(this.content);
  }
}

class PlatziClass {
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

function videoPlay(id) {
const urlSecreta = "https:Platziurl.com/video/"+ id;
console.log("Se esta reproduciendo la url" + urlSecreta);
}

function videoStop (id){
  const urlSecreta = "https:Platziurl.com/video/"+ id;
  console.log("Pausamos la url" + urlSecreta);
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
        comments = [],
        isFree = false,
        lang = "spanish",
    }) {
        this._name = name;    //_ Convencion para decir que una variable e privada
        this.clases = classes;
        this.comments = comments;
        this.isFree = isFree;
        this.lang = lang;
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

const cursoProgBasica = new Course({
    name:"Curso Gratis de programacion Basica",
    isFree: true,
})
const cursoDefinitivoHTML = new Course({
    name:"Curso definitivo de HTML",
})
const cursoPracticoHTML = new Course({
    name:"Curso practico de HTML",
    lang:"english"
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

// Para Herencia haremos Student nuestra superclase
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

  publicarComentario(commentContent){
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    })
    comment.publicar();
  }

}

//Aplicando herencia a nuevas clases que heredaran la clase Student
class FreeStudent extends Student{
    constructor(props){
        super(props) //Heredamos el constructor de la clase madre
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
          this.approvedCourses.push(newCourse);
        } else  {
          console.warn("Lo sentimos " + this.name + " Solo puedes tomar cursos abiertos")
        }
    }
}
class BasicStudent extends Student{
    constructor(props){
        super(props) //Heredamos el constructor de la clase madre
    }

    approveCourse(newCourse){
      if(newCourse.lang !== "english"){
        this.approvedCourses.push(newCourse);
      } else  {
        console.warn("Lo sentimos " + this.name + " No puedes tomar cursos en ingles")
      }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props) //Heredamos el constructor de la clase madre
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
  constructor(props){
      super(props) //Heredamos el constructor de la clase madre
  }

  approveCourse(newCourse){
      this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent){
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "Professor",
    })
    comment.publicar();
  }


}

// class 


const juan2 = new FreeStudent({
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

const miguelito2 = new BasicStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});

const freddy = new TeacherStudent({
  name: "Freddy Vega",
  username: "Freddier",
  email: "freddier@juanito.com",
  instagram: "freddiert",
  
})

//console.log(juan2);
//console.log(juan2.learningPaths[2].courses[1]);    //Llamada a los cursos de la primera carrera de juan2
