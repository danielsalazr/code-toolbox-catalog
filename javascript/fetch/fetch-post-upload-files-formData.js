//with promises 




//with async

const API_URL_UPLOAD_IMAGE = "https://api.thecatapi.com/v1/images/upload";

async function uploadMichiPhoto() {
    const form = document.querySelector('#uploadingForm');

    //Agregar valores por defecto de nuestro form
    const formData = new FormData(form);

    // Asi visaulizamos la informacion del archivo seleccionado
    console.log(formData.get('file'));

    const res = await fetch(API_URL_UPLOAD_IMAGE, {
        method: 'POST',
        headers: {
            //'Content-Type': 'multipart/formData',
            'x-api-key': API_KEY,
        },
        body: formData,
      });
      const data = await res.json();

      if (res.status !== 201) {
        spanError.innerHTML = "Error has ocurred" + res.status + data.message;
      } else {
        console.log(`michis photo uploaded`);
        console.log(data);
        console.log(data.url);
        saveFavouriteMichis(data.id);
      }
}


