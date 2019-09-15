import React, { Component } from 'react';
import M from 'materialize-css';
import info from '../../staticInfo/store'
import api from '../../services/api'

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.buyButtonDidPressed = this.buyButtonDidPressed.bind(this)
    this.state = {
      quantity: 1,
      purchaseMade: null,
    };
  }

  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.6,
      dismissible: true,
      startingTop: '4%',
      endingTop: '20%',
    };
    M.Modal.init(this.Modal, options);
  }

  getRequestRequirements() {
    const userID = localStorage.getItem('userID')
    const authToken = localStorage.getItem('userToken')
    const requestOptions = { headers: { 'Authorization': `Bearer ${authToken}` } }
    return { userID, requestOptions }
  }

  async buyProduct(productName) {
    const { userID, requestOptions } = this.getRequestRequirements()
    const { quantity } = this.state
    const product = productName.includes('Camiseta') ?
      { id: 'aki jaz o id baseado no checkbox selecionado no modal' } :
      info.products.filter(p => p.name === productName)[0]
    const body = [{ product_id: product.id, quantity }]
    try {
      await api.post(`/salesorder/${userID}`, body, requestOptions)
      this.setState({ purchaseMade: true })
    } catch (error) {
      this.setState({ purchaseMade: false })
    }
  }

  buyCombo(comboName) {
    console.log(comboName)
  }

  buyButtonDidPressed(e) {
    e.target.disabled = true
    const { modalId } = this.props
    modalId.includes('COMBO') ? this.buyCombo(modalId) : this.buyProduct(modalId)
  }

  render() {
    const { modalId, title, price } = this.props;
    const { quantity } = this.state;
    const totalPrice = quantity * price;
    return (
      <div
        ref={Modal => {
          this.Modal = Modal;
        }}
        id={modalId}
        className="modal grey darken-4 text-center"
        style={{ zIndex: '1003' }}
      >
        <div className="modal-content container">
          <div className="row">
            <h4 class="center-align">{title}</h4>
          </div>
          <div class="row">
            <div class="col s12">
              Quantidade:
              <div class="input-field inline">
                <input
                  className="white-text"
                  id="email_inline"
                  type="number"
                  value={quantity}
                  onChange={e =>
                    e.target.value > 0 ? this.setState({ quantity: e.target.value }) : null
                  }
                />
                <label for="email_inline">Quantidade</label>
              </div>
            </div>
          </div>
          <div className="row">
            <h5 class="right-align">{`Preço total: R$ ${totalPrice.toFixed(2)}`}</h5>
          </div>
          {this.state.purchaseMade == null ?
            (
              <div className="container center-align row">
                <button
                  class="btn waves-effect white red darken-4 waves-light"
                  type="submit"
                  name="action"
                  onClick={this.buyButtonDidPressed}
                >
                  Reservar
                  {/* <i class="material-icons right red darken-4">send</i> */}
                </button>
              </div>
            )
            :
            <p class="center-align" style={this.state.purchaseMade ? {color: 'green'} : {color: 'red'}}>
            {this.state.purchaseMade ? 
              'Reserva efetuada com sucesso, faça o pagamento junto ao CAECOMP' :
              'Erro ao realizar a compra, tente novamente mais tarde'
            }</p>
          }
          <div className="container center-align">
            <a href="#!" className="modal-close waves-effect white-text waves-green btn-flat">
              {!this.state.purchaseMade ? 'Cancelar' : 'Fechar'}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
