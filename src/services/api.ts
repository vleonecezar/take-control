import axios from "axios";

export const api = axios.create({
  /* this url is from github-page, change it if you want it working on you localhost */
  baseURL: "https://vleonecezar.github.io/take-control/",
});
