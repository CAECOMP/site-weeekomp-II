import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import M from 'materialize-css';
import info from '../../staticInfo/store'
import { Combo } from '../../staticInfo/combo'
import api from '../../services/api'

export default class Modal extends Component {

  CamisaID = { PP: 1, P: 2, M: 3, G: 4, GG: 5 }

  constructor(props) {
    super(props);
    this.buyButtonDidPressed = this.buyButtonDidPressed.bind(this);
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

    M.AutoInit();
  }

  getRequestRequirements() {
    const userID = localStorage.getItem('userID');
    const authToken = localStorage.getItem('userToken');
    const requestOptions = { headers: { Authorization: `Bearer ${authToken}` } };
    return { userID, requestOptions };
  }

  async buyProduct(productName) {
    const { userID, requestOptions } = this.getRequestRequirements();
    const { quantity } = this.state;
    const product = productName.includes('Camiseta')
      ? { id: 'aki jaz o id baseado no checkbox selecionado no modal' }
      : info.products.filter(p => p.name === productName)[0];
    const body = [{ product_id: product.id, quantity }];
    try {
      await api.post(`/salesorder/${userID}`, body, requestOptions);
      this.setState({ purchaseMade: true });
    } catch (error) {
      this.setState({ purchaseMade: false });
    }
  }

  getComboInfo(comboName) {
    let comboID, comboData
    if (comboName.includes('2 Camisetas')) {
      comboData = Combo.duasCamisas.mountBodyData({ id: 'id based radio' }, { id: 'id based radio' })
      comboID = Combo.duasCamisas.id
    } else if (comboName.includes('2 Cadernos')) {
      comboData = Combo.doisCadernos.mountBodyData({ id: 'id based radio' }, { id: 'id based radio' })
      comboID = Combo.doisCadernos.id
    } else if (comboName.includes('2 Bottons')) {
      comboData = Combo.doisBottons.mountBodyData({ id: 'id based radio' }, { id: 'id based radio' })
      comboID = Combo.doisBottons.id
    } else if (comboName.includes('3 Bottons')) {
      comboData = Combo.tresBottons.mountBodyData({ id: 'id based radio' }, { id: 'id based radio' }, { id: 'id based radio' })
      comboID = Combo.tresBottons.id
    }
    return { comboID, comboData }
  }

  async buyCombo(comboName) {
    const { comboID, comboData } = this.getComboInfo(comboName)
    const { userID, requestOptions } = this.getRequestRequirements()
    const { quantity } = this.state
    const body = [{ combo_id: comboID, data: comboData, quantity }]
    try {
      await api.post(`/combos/${userID}`, body, requestOptions)
      this.setState({ purchaseMade: true })
    } catch (error) {
      this.setState({ purchaseMade: false })
    }
  }

  buyButtonDidPressed(e) {
    e.target.disabled = true;
    const { modalId } = this.props;
    modalId.includes('COMBO') ? this.buyCombo(modalId) : this.buyProduct(modalId);
  }

  render() {
    const { modalId, title, price, hasSize } = this.props;
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
          {hasSize ? (
            <div class="row">
              <div class="input-field col s12 white-text">
                <select>
                  <option class="white-text" value="1">
                    PP
                  </option>
                  <option class="white-text" value="2">
                    P
                  </option>
                  <option class="white-text" value="3">
                    M
                  </option>
                  <option class="white-text" value="4">
                    G
                  </option>
                  <option class="white-text" value="5">
                    GG
                  </option>
                </select>
                <label class="white-text">Tamanho:</label>
              </div>
            </div>
          ) : null}
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
          {this.state.purchaseMade == null ? (
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
          ) : (
            <p
              class="center-align"
              style={this.state.purchaseMade ? { color: 'green' } : { color: 'red' }}
            >
              {this.state.purchaseMade
                ? 'Reserva efetuada com sucesso, faça o pagamento junto ao CAECOMP'
                : 'Erro ao realizar a compra, tente novamente mais tarde'}
            </p>
          )}
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
