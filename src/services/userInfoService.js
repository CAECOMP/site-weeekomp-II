import { ServiceConfig } from './serviceConfig'
import axios from 'axios'

const endpointPath = `${ServiceConfig.baseUrl}/userinfo`

export default class UserInfoService {

  constructor(userId, authToken) {
    this.userId = userId
    this.authToken = authToken
  }

  getUserInfo() {
    return axios.get(`${endpointPath}/${this.userId}`, {
      headers: { 'Authorization': this.authToken }
    })
  }

  updateUserInfo(userInfo) {
    return axios.put(`${endpointPath}/${this.userId}`, userInfo, {
      headers: { 'Authorization': this.authToken, 'Content-Type': 'application/json' }
    })
  }

}