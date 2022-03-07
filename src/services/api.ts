import axios from "axios";

export const api = axios.create({
  /* the namespace is "api", it was changed to "take-control" just because the gh-pages */
  baseURL: "http://localhost:3000/take-control",
});
