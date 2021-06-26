import axios from 'axios'

export const baseURL = 'https://url-da-api'

const api = axios.create({ baseURL })

export default api 
