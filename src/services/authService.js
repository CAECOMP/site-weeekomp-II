import { ServiceConfig } from './serviceConfig'
import axios from 'axios'

const endpointPath = `${ServiceConfig.baseUrl}/auth`

export default class AuthService {

  registerUser(name, email, password) {
    return axios.post(`${endpointPath}/signup`, { name, email, password }, {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  login(email, password) {
    return axios.post(`${endpointPath}/signin`, { email, password }, {
      headers: { 'Content-Type': 'application/json' }
    })
  }

}
