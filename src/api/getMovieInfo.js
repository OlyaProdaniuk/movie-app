import { basicFetch, API_KEY } from ".";

const getMovieInfo = async (movieId, type) => {
  let info = null;
  if (movieId) {
    switch (type) {
      case "movie":
        info = await basicFetch(
          `/movie/${movieId}?language=en&api_key=${API_KEY}&append_to_response=videos`
        );
        break;
      case "tv":
        info = await basicFetch(
          `/tv/${movieId}?language=en&api_key=${API_KEY}&append_to_response=videos`
        );
        break;
      default:
        info = null;
        break;
    }
  }
  return info;
};

export default getMovieInfo;
