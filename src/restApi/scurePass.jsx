import axios from "axios";

export const api = axios.create({
  // eslint-disable-next-line no-undef
  // baseURL: process.env.SECUREPASS_URL,
  baseURL: "http://localhost:5000",
});
