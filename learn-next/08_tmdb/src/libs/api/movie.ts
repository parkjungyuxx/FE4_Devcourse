const url = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDMxNTE3MzRjYTI5ZjM1YTY0YTkyMDAyZTA4NTZlNiIsIm5iZiI6MTczNjU2NzgwNy4yODMsInN1YiI6IjY3ODFlYmZmMmIyOWE5MThkMDRlOWM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pUvxAkzmQwfgJiJ51zrdKQ6lmEh6sTAE_nLJEu8YY5Q",
  },
};

const revalidateOption = {
  next: {
    revalidate: 60 * 60 * 24,
  },
};

export const getMovieData = async (path: string, genres = "") => {
  if (path === "discover/movie") {
    return await (
      await fetch(`${url}/${path}?with_genres=${genres}`, {
        ...options,
        ...revalidateOption,
      })
    ).json();
  }
  return await (
    await fetch(`${url}/movie/${path}`, {
      ...options,
      ...revalidateOption,
    })
  ).json();
};

export const getMovieVideoData = async (id: string) => {
  return await (
    await fetch(`${url}/movie/${id}/videos`, {
      ...options,
      ...revalidateOption,
    })
  ).json();
};

export const getMovieDetailData = async (id: string) => {
  return await (
    await fetch(`${url}/movie/${id}`, {
      ...options,
      ...revalidateOption,
    })
  ).json();
};

export const getMovieCreditData = async (id: string) => {
  return await (
    await fetch(`${url}/movie/${id}/credits`, {
      ...options,
      ...revalidateOption,
    })
  ).json();
};

export const getMovieMoreData = async (
  page = 1,
  type = "now_playing",
  keyword = ""
) => {
  if (keyword) {
    return await (
      await fetch(
        `${url}/search/movie?query=${encodeURIComponent(keyword)}&page=${page}`,
        options
      )
    ).json();
  } else {
    return await (
      await fetch(`${url}/movie/${type}?page=${page}`, {
        ...options,
        ...revalidateOption,
      })
    ).json();
  }
};
