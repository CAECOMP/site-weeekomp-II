import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'https://weekomp-homolog.herokuapp.com/v1'
})

export default api;
