var wl = window.location.href
wl = wl.split("/");
const Url = wl[0]+"//"+wl[2]+"/"+wl[3]+"/";
console.log(Url);
const table = document.querySelector("tbody");


window.addEventListener('load', function() {
    requestInfoTable(0);
});

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

async function requestInfoTable(limit){
    //const res = await fetch('inventory/inventoryaction/?limit=20');
    const res = await fetch(Url+'getinventory/'+String(limit));
    const data = await res.json();

    if (res.status !== 200) {
        //spanError.innerHTML = "Hubo un error" + res.status + data.message;
        console.log("Error");
        return
    }
    if (data.length === 0){
        console.log("No se obtuvieron Datos");
        await swalInfo('Sin Informacion','No se encontraron registros en el inventario por parte del usuario.');
        return
    }
    
    console.log(data);
    let renderer = ''
    data.forEach((item)  => {
        console.log(item);
        // renderer += `<tr><td>${item.id}</td><td>${item.estanteria}</td><td>${item.seccion}</td><td>${item.producto}</td><td><button onclick="deleteInfo(this)"><i class="bx  bxs-trash" aria-hidden="true"></i></button></td></tr>`;
        renderer += `<tr><td hidden>${item.id}</td><td>${item.estanteria}</td><td>${item.referencia}</td><td>${item.barcode}</td><td>${item.nombre}</td><td>${item.cantidad}</td><td><button onclick="deleteInfo(this)"><i class="bx  bxs-trash" aria-hidden="true"></i></button></td></tr>`;
    })
    
    //console.log(renderer)
    table.innerHTML = renderer;
    }



async function deleteInfo(element) {

    const csrftoken = getCookie('csrftoken');
    const row = element.parentNode.parentNode;
    id = row.cells[0].innerText;

    //const res = await fetch(`inventory/deleteitem/${String(id)}`, {
    const res = await fetch(`${Url}deleteitem/${String(id)}`, {
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

function removeRow(rowIndx){
    const tbl = rowIndx.parentNode.parentNode.parentNode;
    const row = rowIndx.parentNode.parentNode.rowIndex;
    console.log(tbl)
    console.log(row)
    tbl.deleteRow(row-1);
}