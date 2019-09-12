import axios from 'axios'

const api = axios.create({
    baseURL: 'https://weekomp-homolog.herokuapp.com/v1'
})

export default api;