//ipmport del package che mi rende disponibili le variabili d'ambiente
//import dotenv from 'dotenv';

//carica le variabili d'ambiente del file .env
//dotenv.config();

//import {API_KEY} from "./constants.js"; 

export const baseUrl = "https://api.themoviedb.org/3/";

const API_KEY="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTg2OTExMjc0MWIxODc4ZGM0ODJlNTg0YjY5Y2JjMyIsInN1YiI6IjY1ZTg2YjAxYTFhOWJhMDE0OGJkZTBkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.97P7I4KG6HXcC6IVuTApkKIzhef33WT0kjVH8GENgOM";

export const OPTIONS = {
    headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${API_KEY}`
    },
};



/*
"https://api.themoviedb.org/3/search/person?query=clooney"

"https://api.themoviedb.org/3/search/person" + "?query"
*/
