import { ServiceConfig } from './serviceConfig'
import axios from 'axios'

const endpointPath = `${ServiceConfig.baseUrl}`

export default class SalesOrderService {

  constructor(userId, authToken) {
    this.userId = userId
    this.authToken = authToken
  }

  getAllUserOrderedProducts() {
    return axios.get(`${endpointPath}/salesorder/${this.userId}`, {
      headers: { 'Authorization': this.authToken }
    })
  }

  orderProduct(productId, quantity) {
    const body = [{ product_id: productId, quantity }]
    return axios.post(`${endpointPath}/salesorder/${this.userId}`, body, {
      headers: { 'Authorization': this.authToken, 'Content-Type': 'application/json' }
    })
  }

  orderProducts(productsId, quantities) {

  }

  orderCombo(comboId, quantity, comboBody) {
    const body = [{ combo_id: comboId, quantity, data: comboBody }]
    return axios.post(`${endpointPath}/combos/${this.userId}`, body, {
      headers: { 'Authorization': this.authToken, 'Content-Type': 'application/json' }
    })
  }

}
