import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_API_URL

const apiService = axios.create({
    baseURL: BASE_URL,
    headers: {
        "x-api-key": API_KEY,
    },
})

export default apiService