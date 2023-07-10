//const input = document.querySelectorAll('input');
const input = document.querySelectorAll('#campBarcode, #campBarcodeFinish');
const sendButton = document.querySelector('#sendButton');
const table = document.querySelector("tbody");

const formInventoryInfo = document.querySelector('#sendInventoryInfo');

const bodegas = document.querySelector('#bodegas');


const fijarBodegaYEstante = document.querySelector('#fijarBodegaYEstante');
const librerarBodegaYEstante = document.querySelector('#librerarBodegaYEstante');

const deleteInventory = document.querySelector('#deleteInventory');

const credenciaIsActive = document.querySelector('#credentials').value;

console.log(credenciaIsActive);


const lenInput = input.length;
const objeto = {
    a: "v1",
    b: "v2",
    c: "v3",
    d: "v4",
}


window.addEventListener('load', function() {
    
    input[0].focus();
    //page = window.location.href
    //requestInfo(20);    
});



fijarBodegaYEstante.addEventListener('click', async (e) => {
    e.preventDefault();
    // input[1].focus();

    let doc = document.activeElement.name 

    if(doc !== 'estanteria'){
        return
    }

        console.log("Fijar Bodega")

        input[0].disabled = true;
        bodega.disabled = true;


        const bodegaSelector = document.querySelector('#bodega').value;
        console.log(bodegaSelector);
        //esperar hasta que se cumpla la consulta para posterior a ello enfocar el siguiente input
        await requestInfoWarehouse(20, bodegaSelector);
    
        //Este es el que funciono
        input[1].focus();
    
})



librerarBodegaYEstante.addEventListener('click', function(e) {
    e.preventDefault();
    input[0].disabled = false;
    bodega.disabled = false;
    input[0].value = "";
    input[0].focus();
    console.log("Liberar Bodega")
})


function getDate(){
    var today = new Date();
    console.log(today);
    //document.getElementById("date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

}

async function requestInfo(limit){
    //const res = await fetch('inventory/inventoryaction/?limit=20');
    const res = await fetch('getinventory/50');
    const data = await res.json();

    if (res.status !== 200) {
        //spanError.innerHTML = "Hubo un error" + res.status + data.message;
        console.log("Error");
        return console.error(Error);
    } else {    
            console.log(data);
            let renderer = ''
            data.forEach((item)  => {
                //console.log(item);
                //<tr><td>${item.id}</td>
                renderer += `<tr><td hidden>${item.id}</td><td>${item.estanteria}</td><td>${item.referencia}</td><td>${item.barcode}</td><td>${item.nombre}</td><td>${item.cantidad}</td><td><button onclick="deleteInfo(this)"><i class="bx  bxs-trash" aria-hidden="true"></i></button></td></tr>`;
            })
            
            //console.log(renderer)
            table.innerHTML = renderer;
    }
}

async function requestInfoWarehouse(limit, warehouse){
    //const res = await fetch('inventory/inventoryaction/?limit=20');
    console.log('Enviar info de warehouse')
    const res = await fetch(`getinventory/50?bodega=${warehouse}`);
    const data = await res.json();

    if (res.status !== 200) {
        //spanError.innerHTML = "Hubo un error" + res.status + data.message;
        console.log("Error");
        return console.error(Error);
    } else {    
            console.log(data);
            let renderer = ''
            data.forEach((item)  => {
                //console.log(item);
                //<tr><td>${item.id}</td>
                renderer += `<tr><td hidden>${item.id}</td><td>${item.estanteria}</td><td>${item.referencia}</td><td>${item.barcode}</td><td>${item.nombre}</td><td>${item.cantidad}</td><td><button onclick="deleteInfo(this)"><i class="bx  bxs-trash" aria-hidden="true"></i></button></td></tr>`;
            })
            
            //console.log(renderer)
            table.innerHTML = renderer;
    }
}


//Enviar info
sendButton.addEventListener( 'click', async function sendInfo(e){
    e.preventDefault();
    console.log('Enviar info');
    const uid = generateUniqueId();

    input[0].disabled = false;
    bodega.disabled = false;

    const formData = new FormData(formInventoryInfo);
    formData.append('id',uid);

    input[0].disabled = true;
    bodega.disabled = true;

    // Imprimir valores del formData
    // for (const [key, value] of formData.entries()) {
    //     // console.log("Voy a imprimirlo")
    //     console.log(key + ': ' + value);
    // }

    

    let referencia = formData.get('referencia');
    let cantidad = formData.get('cantidad');

    let numero = input[2].value;
    let numeroString = numero.toString().replace(',', '.');
    // referencia = referencia.toLowerCase();

    formData.set('cantidad', numeroString);
    formData.set('referencia', referencia.toString());

    cantidad = formData.get('cantidad');


    // Verificar que el valor de cantidad tenga unicamente numeros
    if (isNaN(cantidad)) {
        await swalErr("Valor invalido, ingrese un valor numerico en la cantidad");
        input[2].value = "";
        input[2].focus();
        return
    }

    // // Evaluar si la referencia es un valor alfanumerico de almenos 2 numeros y 2 letras
    // let letras = referencia.match(/[a-zA-Z]/g);
    // let numeros = referencia.match(/\d/g);
    // if (!(letras && numeros && letras.length >= 2 && numeros.length >= 2 )) {
    //     await swalErr("Valor invalido, ingrese un valor alfanumerico en la referencia");
    //     input[1].value = "";
    //     input[1].focus();
    //     return
    // } 


    const req = await callApi(`inventory/inventoryaction/`, {
        method: 'POST',
        body:JSON.stringify(Object.fromEntries(formData)),
    });

    console.log(req);

    console.log('status: ');
    console.log(req.res.status);
    // console.log(req.data);
    

    
    if (req.res.status !== 201) {
        // console.log("Error")
        await swalErr('Verifique la informacion, es posible que esta referencia no exista en la sociedad actual.');
        // return console.error(error)
        return
    } 
    
    // console.log(req.data.barcode);
    console.log(req.data);
    const row = table.insertRow(0);
    //<tr><td>${uid}</td>
    //<td>${item.barcode}</td>
    const template = `<td hidden>${uid}</td><td>${input[0].value}</td><td>${req.data.referencia}</td><td>${req.data.barcode}</td><td>${req.data.itemName}</td><td>${input[2].value}</td><td><button onclick="deleteInfo(this)"><i class="bx  bxs-trash" aria-hidden="true"></i></button></td></tr>`
    row.innerHTML += template;
    clearInputs()

    let totalRowCount = table.rows.length;
    if (totalRowCount > 50){
        table.deleteRow(50)
    }
    // console.log(totalRowCount)
    input[1].focus();
      
    
})

async function deleteInfo(element) {

    const csrftoken = getCookie('csrftoken');
    const row = element.parentNode.parentNode;
    id = row.cells[0].innerText;

    //const res = await fetch(`inventory/deleteitem/${String(id)}`, {
    const res = await fetch(`deleteitem/${String(id)}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        mode: 'same-origin',
      });
      //const data = await res.json();
      const data = await res;

      console.log(data);

      
      console.log(res.status);
      if (res.status !== 204) {
        // spanError.innerHTML = "Hubo un error" + res.status + data.message;
        console.log("Error")
      } else {
        console.log(`item eliminado`);
        removeRow(element) 
      }
}

if (credenciaIsActive !== ''){

    deleteInventory.addEventListener("click", async function (e){
        e.preventDefault();
        let contrasenia = await swalInput("Ingrese contraseña:");
    
        console.log(contrasenia);
    
        const req = await callApi(`inventory/deleteInventory/?clave=${contrasenia}`);
    
        console.log(req.data);
        
        if (req.res.status !== 200) {
        console.log("Error")
        return console.error(error)
        }
    
        if (req.data.accion == 'invalid'){
            swalErr("Contraseña Invalida!")
            return
        }
    
        swalconfirmationAndReload("Se eliminaron los registros, la pagina se recargara en breve.");
    
    })

} 



function generateUniqueId() {
    //return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
    return (Date.now().toString(36));//+Math.random().toString(36)).replace(/\./g,"");
};




function removeRow(rowIndx){
    const tbl = rowIndx.parentNode.parentNode.parentNode;
    const row = rowIndx.parentNode.parentNode.rowIndex;
    console.log(tbl)
    console.log(row)
    tbl.deleteRow(row-1);
}

function clearInputs(){
    // borrar los valores de los campos 1 en adelante, para el caso actual (Referencia y cantidad)
    for (let j=1; j < lenInput; j++) {
        input[j].value ="";
    }
    input[1].focus();
}



//console.log(input.length)
for (let i = 0; i < lenInput; i++) {
    if (input[i].id == 'campBarcode' || input[i].id =='campBarcodeFinish')
    
    input[i].addEventListener("keyup", async (event) => {
        event.preventDefault();
        // console.log(event.key)
        // console.log(lenInput)


        if (event.key === "Enter") {
            if (input[i].value == "1234567890"){
                clearInputs();
                return 0
            }
            // console.log('Enter key pressed')

    //         if (i == 0 ){
    //                 // e.preventDefault();
    //             // input[1].focus();

    //             console.log("Fijar Bodega")

    //             input[0].disabled = true;
    //             bodega.disabled = true;


    //             const bodegaSelector = document.querySelector('#bodega').value;
    //             console.log(bodegaSelector);
    //             //esperar hasta que se cumpla la consulta para posterior a ello enfocar el siguiente input
    //             // await requestInfoWarehouse(20, bodegaSelector);
    
    // //Este es el que funciono
    // // input[1].focus();
    //         }

            
            // if (i < lenInput-1){
            if (i < lenInput-1){
                input[i+1].focus();
                console.log('elemento actual: ' +i)
                return
            } else {
                console.log('Se presiono el boton enviar')
                sendButton.click()
            }

        }
    });
}


// document.addEventListener('focus', function(event) {
//     // Obtener el elemento actual de focus
//     const elementoActual = document.activeElement;
    
//     // Hacer algo con el elemento actual de focus
//     console.log('El elemento actual de focus es:', elementoActual);
//   }, true);