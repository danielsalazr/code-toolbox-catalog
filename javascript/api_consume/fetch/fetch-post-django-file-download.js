//Funcion para hacer post en Django

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


function postRequest(pathName, idElement, collectionValue){

    const wl = window.location.href.split("/")
    let Url = wl[0]+"//"+wl[2]+"/"+wl[3]+pathName
    const button = document.querySelector(idElement)
    const csrftoken = getCookie('csrftoken');

    button.disabled = true;
    collection = document.querySelector(collectionValue).value
    

    const _data = {
        'collection-StatusCustomer-name' : collection,
    }

    const request = new Request(
        Url,
        {
            method: 'POST',
            headers: {'X-CSRFToken': csrftoken},
            body: JSON.stringify(_data),
            mode: 'same-origin', // Do not send CSRF token to another domain.
            
        }
    );
    fetch(request).then((res) =>  {
        filename = res.headers.get("content-disposition");
        filename = filename.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1];
        /*filename = filename.split('%20').join(' '); */filename = filename.replace(/%20/g, " ");
        console.log(filename);
        return res.blob() })
    .then((data) => {
        var a = document.createElement("a")
        a.href = window.URL.createObjectURL(data)
        a.download = filename;
        a.click();
        button.disabled = false;
    })
    .catch((error) => {
        button.disabled = false;
        alert('an erro has ocurr, please, please check the connection');
    })
}

function downloadFile() {
    let id = '#buttonp' 
    let collection = '#collection'
    let requestPath = '/downloadFilelink'
    postRequest(requestPath, id, collection)
}


