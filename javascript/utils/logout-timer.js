
var temporizador = 600000;

const timeValue = setInterval(function(){
  
    if(temporizador>0){
        temporizador -= 1000;
        //document.getElementById("time_id").value = temporizador;
        //console.log(temporizador)
    }
    if(temporizador == 0){
        clearInterval(timeValue);
        Swal.fire({
            title: 'Sesion Cerrada',
            text: "Tu Sesion ha Caducado por Inactividad",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/logout/";
            }
          })
        
    }
},1000);

function reinicio(time){
    temporizador = time;
}
window.addEventListener( 'unload', logoutSesion, false );

function logoutSesion() {

  window.location.href = "/logout/";
}


const url = "http://localhost:8000/logout/";