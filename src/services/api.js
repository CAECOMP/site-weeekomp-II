import axios from 'axios'

const api = axios.create({
    baseURL: process.env.BACK_URL || 'https://weekomp-homolog.herokuapp.com/v1'
})

export default api;