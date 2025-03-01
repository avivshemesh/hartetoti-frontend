import axios from 'axios'

const request = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5001/',
  // headers: {
  //   Authorization: process.env.publicKey
  // }
})

export const get = (endPoint: string, params: any) => request.get(endPoint, { params })
export const post = (endPoint: string, body: any, config?: any) => request.post(endPoint, body, config)