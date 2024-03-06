import {getTrendingMovies, getTrending, getTrendingActor} from "./api/trendingGetters.js";
import { baseUrl } from "./api/config.js";

getTrending(baseUrl);
getTrendingMovies(baseUrl);
getTrendingActor(baseUrl);