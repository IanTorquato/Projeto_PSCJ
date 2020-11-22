import axios from 'axios'

export const baseURL = 'https://url-do-banco'

const api = axios.create({ baseURL })

export default api 