function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

const csrftoken = getCookie('csrftoken');

let form = document.getElementById("loginForm");

form.addEventListener("submit",async (e) => {
  e.preventDefault();
  let numeroActivo = document.getElementById("numeroActivo");
  let usuarioAsignado = document.getElementById("usuarioAsignado");

  if (numeroActivo.value == "" && usuarioAsignado.value == "") {
    // throw error
    alert("Ensure you input a value in both fields!");
  } else {
    // Obtiene los datos del formulario
    const formData = new FormData(form);

    console.log(formData);
    // console.log(data.get('numeroActivo'));
    // data.forEach((value, key) => {
    //   console.log(key + ": " + value);
    // });
    console.log("Submit realizado con exito")

    const URL_ACTIVOS = `/traslados/asignacion/?activo=${formData.get('numeroActivo')}`;
    // const URL_ACTIVOS = `/traslados/asignacion/${formData.get('numeroActivo')}`;

  
            const res = await fetch(URL_ACTIVOS,
                {
                method: 'GET',
                headers: {
                  'X-CSRFToken': csrftoken,
                  //'Content-Type': 'application/json',
                },
                //body: formData,
                mode: 'same-origin', // Do not send CSRF token to another domain.
                
                }
            );
            const dataResponse = await res.json();

            if (res.status !== 200) {
                //spanError.innerHTML = "Hubo un error" + res.status + data.message;
                Swal.fire({
                  type: 'error',
                  title: 'Error',
                  text: 'No fue posible asignar Activo, verifique si ya esta asignado.',
                  // title: 'Good job',
                  // html: '<i>You clicked the button!</i>',
                  // type: 'error'
                  // footer: '<a href="">Why do I have this issue?</a>'
                })
              } else {
                console.log(dataResponse)
                usuarioAsignado.value = dataResponse.usuario
              }

    //activofijo/<codigoactivofijo>
  }
  // handle submit
});




/* logica para dibujar la firma  con mouse*/
var canvas = document.getElementById("signature-pad");
var ctx = canvas.getContext("2d");

var boton = document.querySelector('#button')
var button_clear = document.querySelector('#button_clear');


ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.lineWidth = 2;
ctx.strokeStyle = "black";

canvas.addEventListener("mousedown", function (e) {
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  canvas.addEventListener("mousemove", draw);
});

canvas.addEventListener("mouseup", function () {
  canvas.removeEventListener("mousemove", draw);
});


/* Logica para dibujar la firma en dispositivos touch */

canvas.addEventListener("touchstart", function(e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener("touchend", function(e) {
    var mouseEvent = new MouseEvent("mouseup", {});
    canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}, false);

function draw(e) {
  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
}


/* logica para exportar la firma */

boton.onclick = () => {
  console.log("impreso")

  //Convertir la firma a imagen y colocarla en el dom
  /*
  var image = canvas.toDataURL();
  document.getElementById("signature-image").src = image;
  */

  //Convertir firma a imagen y descargar la imagen
  // var img = canvas.toDataURL("image/png");

  //   var link = document.createElement("a");
//   link.download = "miFirma.png";
//   link.href = img;
//   link.click();

    // console.log(img)

    canvas.toBlob(function(blob) {
      //enviar la frima por fetch
      var formData = new FormData();
      formData.append("signature", blob, "mi_firma.png");
      //formData.append("signature", img);

      
      fetch("/traslados/signreceipt/", {
        method: "POST",
        body: formData,
        headers: {
          'X-CSRFToken': csrftoken,
        },
      })
      .then(response => response.text())
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
      

    }, 'image/png');

  

};

button_clear.onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

