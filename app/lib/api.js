const BASE_URL = "https://jsonfakery.com/movies";

async function fetchApi(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    next: {
      revalidate: 60,
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API Error ${res.status}`);
  }

  return res.json();
}

export const getMovies = (page = 1) => fetchApi(`/paginated?page=${page}`);

export const getRandomMovie = () => fetchApi("/random");

export const getRandomMovies = (count = 5) => fetchApi(`/random/${count}`);
