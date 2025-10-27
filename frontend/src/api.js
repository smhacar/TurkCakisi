// src/api.js
import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8000/api/',
})

export const uploadVideo = (formData) => API.post('videos/', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
})

export const fetchVideo = (id) => API.get(`videos/${id}/`)
