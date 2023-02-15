import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://api.zonda.exchange/rest/trading/",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
