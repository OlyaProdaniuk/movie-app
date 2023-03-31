import { basicFetch, API_KEY } from ".";

const GENRE_LIST = [
  {
    slug: "sci-fi",
    title: "Science-Fiction",
    code: 878,
  },
  {
    slug: "fantasy",
    title: "Fantasy",
    code: 14,
  },
  {
    slug: "action",
    title: "Action",
    code: 28,
  },
  {
    slug: "comedy",
    title: "Comedy",
    code: 35,
  },
  {
    slug: "horror",
    title: "Horror",
    code: 27,
  },
  {
    slug: "romance",
    title: "Romance",
    code: 10749,
  },
  {
    slug: "documentary",
    title: "Documentary",
    code: 99,
  },
];

const getHomeList = async () => {
  const results = [];
  await Promise.all(
    GENRE_LIST.map(async ({ slug, title, code }) =>
      basicFetch(
        `/discover/movie?with_genres=${code}&language=pt-BR&api_key=${API_KEY}&append_to_response=videos`
      )
        .then((items) => results.push({ slug, title, items }))

        .catch(() => {})
    )
  );
  return results;
};

export default getHomeList;
