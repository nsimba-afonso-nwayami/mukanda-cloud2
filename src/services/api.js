import axios from "axios";

const API_URL = "https://azulenovo.hossidev.com/api/";
//const API_URL = "/api/";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
