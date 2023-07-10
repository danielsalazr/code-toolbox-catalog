// con promesas 


//con asincronismo 
async function saveFavouriteMichis(id) {

  const res = await fetch(API_URL_SAVE_FAVORITES, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        image_id: id,
    }),
  });
  const data = await res.json();

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error" + res.status ;
    console.log("Error")
  } else {
    console.log(data);
  }

}