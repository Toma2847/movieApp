
/**
 * createTrendingMovies()
 * 
 * la funzione prenderà in ingresso un array di movies, per ogni movie aggiungere al dom un nuovo nodo, che sarà un tag <li> contentente il titolo del movie
 * 
 * @param array dei file
 * @returns
 */

export const createTrendingMoviesList = (movies) =>{
    //recupero il nodo ul con id "trending-movies-list"
    const list = document.getElementById("trending-movies-list");

    //ciclo su ogni elemetno dell'array che viene preso in ingresso come parametro
    movies.results.forEach((element) => {
        //creiamo un nuovo nodo che corrisponde a un tag <li>
        const listItem = document.createElement("li");

        //impostiamo il contenuto del tag li appena creato, assegnando  il valore del title dell'elemento coerente in questa iterazione dell'array
        listItem.innerHTML = element.title;

        //appendiamo alla pagina html il nuovo tag creato. dove? sul tag ul recuperato all'inizio mediante l'id
        list.appendChild(listItem);
    }
    
    )
}

