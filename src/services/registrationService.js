import { ServiceConfig } from './serviceConfig'
import axios from 'axios'

const endpointPath = `${ServiceConfig.baseUrl}/registrations`

export default class RegistrationService {

  constructor(userId, authToken) {
    this.userId = userId
    this.authToken = authToken
  }

  getAllUserEventRegistrations() {
    return axios.get(`${endpointPath}/${this.userId}`, {
      headers: { 'Authorization': this.authToken }
    })
  }

  subscribeUserAtEvent(eventId) {
    const body = [{ event_id: eventId }]
    return axios.post(`${endpointPath}/${this.userId}`, body, {
      headers: { 'Authorization': this.authToken, 'Content-Type': 'application/json' }
    })
  }

  unsubscribeUserAtEvent(eventId) {
    return axios.delete(`${endpointPath}/${this.userId}/${eventId}`, {
      headers: { 'Authorization': this.authToken }
    })
  }

}