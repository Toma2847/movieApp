import {getTrendingMovies, getTrending, getTrendingActor} from "./api/trendingGetters.js";



/**da aggiungere:
 * id
 * poster_path
 * title
 * vote_average
 * media_type
 * release_date
 */

const trending = getTrending().then((data) => {
    const trending = data.results
    trending.forEach((element) => {
        console.log('title' , element.title);
        console.log('poster', element.poster_path);
        console.log('id', element.id);
        console.log('release date', element.release_date);
        console.log('media type', element.media_type);
        console.log('vote ', element.vote_average);
        })
});

getTrendingMovies();
getTrendingActor();