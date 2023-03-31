export const API_KEY = "415576f5242370097561981e7809ba0c";
export const API_BASE = "https://api.themoviedb.org/3";

export const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};
