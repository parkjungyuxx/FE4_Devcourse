import axios from "axios";

const primaryKey = process.env.NEXT_PUBLIC_PRIMARY_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${primaryKey}`,
  },
});

export default axiosInstance;
