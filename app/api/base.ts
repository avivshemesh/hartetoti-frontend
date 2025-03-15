import axios from "axios";

const request = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/api/",
});

export const get = (endPoint: string, params?: any) => {
  return request.get(endPoint, { params });
};
export const post = (endPoint: string, body?: any, config?: any) => {
  return request.post(endPoint, body, config);
};
