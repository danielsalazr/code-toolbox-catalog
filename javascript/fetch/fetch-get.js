//Con promesas 

------


// con asincronismo

async function loadFavoritesMichis() {
  const res = await fetch(API_URL_FAVORITES + API_KEY);
  const data = await res.json();

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error" + res.status + data.message;
  } else {
    console.log(data);
    data.forEach( michi => {
        const section = document.getElementById('favoriteMichis');
        const article = document.createElement('article');
        const img = document.createElement('img');
        const btn= document.createElement('button');
        const btnText  = document.createTextNode('Sacar al michi de favoritos')

        btn.appendChild(btnText);
        img.src = michi.image.url;
        img.width = 150

        article.appendChild(img);
        article.appendChild(btn);
        section.appendChild(article);

    })
  }

}
