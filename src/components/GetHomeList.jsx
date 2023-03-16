import basicFetch from "../Tmbd";
import API_KEY from "../Tmbd";

const GetHomeList = async () => {
  return [
    {
      slug: "sci-fi",
      title: "Science-Fiction",
      items: await basicFetch(
        `/discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "fantasy",
      title: "Fantasy",
      items: await basicFetch(
        `/discover/movie?with_genres=14&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "action",
      title: "Action",
      items: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "comedy",
      title: "Comedy",
      items: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "horror",
      title: "Horror",
      items: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "documentary",
      title: "Documentary",
      items: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
      ),
    },
  ];
};

export default GetHomeList;
