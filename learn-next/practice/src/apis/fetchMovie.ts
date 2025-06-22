import axiosInstance from "./axiosInstance";

export const fetchNowPlayingMovie = async () => {
  const { data: nowPlaying } = await axiosInstance.get(
    "/movie/now_playing?language=en-US&page=1"
  );

  return nowPlaying;
};

export const fetchPopularMovie = async () => {
  const { data: popular } = await axiosInstance.get(
    "/movie/popular?language=en-US&page=1"
  );

  return popular;
};

export const fetchUpcomingMovie = async () => {
  const { data: upcoming } = await axiosInstance.get(
    "/movie/upcoming?language=en-US&page=1"
  );

  return upcoming;
};

export const fetchTopRatedMovie = async () => {
  const { data: topRated } = await axiosInstance.get(
    "/movie/top_rated?language=en-US&page=1"
  );

  return topRated;
};
