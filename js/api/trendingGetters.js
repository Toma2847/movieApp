//const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTg2OTExMjc0MWIxODc4ZGM0ODJlNTg0YjY5Y2JjMyIsInN1YiI6IjY1ZTg2YjAxYTFhOWJhMDE0OGJkZTBkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.97P7I4KG6HXcC6IVuTApkKIzhef33WT0kjVH8GENgOM"

    },
};

export const getTrending = async (baseUrl) => {


    const response = await fetch(baseUrl + "trending/all/day?language=en-US", options);
    const data = await response.json();

    return data;
};

export const getTrendingMovies = async (baseUrl) => {


    const response = await fetch(baseUrl + "trending/movie/day?language=en-US", options);

    const movie = await response.json();

    return movie;
};

export const getTrendingActor = async (baseUrl) => {


    const response = await fetch(baseUrl + "search/person" + "?query=clooney ", options);

    const movie = await response.json();

    return movie;
};




/** getTrendingMovies
 * 
 * @param baseUrl
 * 
 * @returns trending movies (film di tendenza)
 */