//ipmport del package che mi rende disponibili le variabili d'ambiente
import dotenv from 'dotenv';

//carica le variabili d'ambiente del file .env
dotenv.config();

export const baseUrl = "https://api.themoviedb.org/3/";

export const OPTIONS = {
    headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`
    },
};



/*
"https://api.themoviedb.org/3/search/person?query=clooney"

"https://api.themoviedb.org/3/search/person" + "?query"
*/
