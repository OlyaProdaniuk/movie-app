const API_KEY = "415576f5242370097561981e7809ba0c";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

const GetMovieInfo = async (movieId, type) => {
  const info = {};
  if (movieId) {
    switch (type) {
      case "movie":
        info = await basicFetch(
          `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
        );
        break;
      case "tv":
        info = await basicFetch(
          `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
        );
        break;
      default:
        info = null;
        break;
    }
  }
  return info;
};

export default GetMovieInfo;
