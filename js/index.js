import {getTrendingMovies, getTrending} from "./api/trendingGetters.js";
import { baseUrl } from "./api/config.js";

getTrending(baseUrl);
getTrendingMovies(baseUrl);