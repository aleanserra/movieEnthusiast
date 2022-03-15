import axios from "axios";

export const api = axios.create({
  baseURL: "http://movie-challenge-api-xpand.azurewebsites.net/api",
});
