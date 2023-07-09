// using promises 



// using async
async function deleteFavouriteMichi(id) {
    const res = await fetch(API_URL_FAVORITES_DELETE(id), {
        method: 'DELETE',
      });
      const data = await res.json();

      if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error" + res.status + data.message;
      } else {
        console.log(`michi ${id} eliminado de favoritos`);
        //Asi recargamos los favoritos
        loadFavoritesMichis();
      }
}