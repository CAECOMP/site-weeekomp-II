import React, { Component } from 'react';
import M from 'materialize-css';
import info from '../../staticInfo/store'
import { Combo } from '../../staticInfo/combo'
import api from '../../services/api'

const CamisaID = { 'PP': 1, 'P': 2, 'M': 3, 'G': 4, 'GG': 5 }
const CadernoID = { 'VERMELHO': 9, 'ROXO': 10, 'AZUL': 11, 'VERDE': 12, 'PRETO': 13 }
const BottonID = { 'MODELO_1': 7, 'MODELO_2': 6, 'MODELO_3': 8 }

export default class Modal extends Component {

  constructor(props) {
    super(props);
    this.buyButtonDidPressed = this.buyButtonDidPressed.bind(this);
    this.state = {
      quantity: 1,
      sizeSelected: 'PP',
      purchaseMade: null,
      comboCamiseta1: 'PP',
      comboCamiseta2: 'PP',
      comboCaderno1: 'VERMELHO',
      comboCaderno2: 'VERMELHO',
      comboBotton1: 'MODELO_1',
      comboBotton2: 'MODELO_1',
      comboBotton3: 'MODELO_1',
    }
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

    this.select = M.AutoInit();
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
      ? { id: CamisaID[this.state.sizeSelected] }
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
      const { comboCamiseta1, comboCamiseta2 } = this.state
      comboData = Combo.duasCamisas.mountBodyData({ id: CamisaID[comboCamiseta1] }, { id: CamisaID[comboCamiseta2] })
      comboID = Combo.duasCamisas.id
    } else if (comboName.includes('2 Cadernos')) {
      const { comboCaderno1, comboCaderno2 } = this.state
      comboData = Combo.doisCadernos.mountBodyData({ id: CadernoID[comboCaderno1] }, { id: CadernoID[comboCaderno2] })
      comboID = Combo.doisCadernos.id
    } else if (comboName.includes('2 Bottons')) {
      const { comboBotton1, comboBotton2 } = this.state
      comboData = Combo.doisBottons.mountBodyData({ id: BottonID[comboBotton1] }, { id: BottonID[comboBotton2] })
      comboID = Combo.doisBottons.id
    } else if (comboName.includes('3 Bottons')) {
      const { comboBotton1, comboBotton2, comboBotton3 } = this.state
      comboData = Combo.tresBottons.mountBodyData({ id: BottonID[comboBotton1] }, { id: BottonID[comboBotton2] }, { id: BottonID[comboBotton3] })
      comboID = Combo.tresBottons.id
    }
    return { comboID, comboData }
  }

  async buyCombo(comboName) {
    const { comboID, comboData } = this.getComboInfo(comboName)
    const { userID, requestOptions } = this.getRequestRequirements()
    const { quantity } = this.state
    const body = { combo_id: comboID, data: comboData, quantity }
    try {
      await api.post(`/combos/${userID}`, body, requestOptions)
      this.setState({ purchaseMade: true })
    } catch (error) {
      this.setState({ purchaseMade: false })
    }
  }

  buyButtonDidPressed(e) {
    e.target.disabled = true
    const { modalId } = this.props
    console.log(modalId)
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

          {/* CAMISETA SIZE SELECTOR */}
          {hasSize && !modalId.includes('COMBO') ? (
            <div class="row">
              <label class="white-text">Tamanho:</label>
              <div class="input-field col s12">
                <select class="browser-default" onChange={e => this.setState({ sizeSelected: e.target.value })}>
                  <option class="" value="PP"> PP </option>
                  <option class="" value="P"> P </option>
                  <option class="" value="M"> M </option>
                  <option class="" value="G"> G </option>
                  <option class="" value="GG"> GG </option>
                </select>
              </div>
            </div>
          ) : null}

          {/* COMBO 2 CAMISETAS SIZE SELECTOR */}
          {modalId.includes('2 Camisetas') && (
            <div>
            <label class="white-text">Tamanhos</label>
              <div class="row">
                <div class="input-field col s6">
                  <select class="browser-default" onChange={e => this.setState({ comboCamiseta1: e.target.value })}>
                    <option class="" value="PP"> PP </option>
                    <option class="" value="P"> P </option>
                    <option class="" value="M"> M </option>
                    <option class="" value="G"> G </option>
                    <option class="" value="GG"> GG </option>
                  </select>
                </div>
                <div class="input-field col s6">
                  <select class="browser-default" onChange={e => this.setState({ comboCamiseta2: e.target.value })}>
                    <option class="" value="PP"> PP </option>
                    <option class="" value="P"> P </option>
                    <option class="" value="M"> M </option>
                    <option class="" value="G"> G </option>
                    <option class="" value="GG"> GG </option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* COMBO 2 CADERNOS SIZE SELECTOR */}
          {modalId.includes('2 Cadernos') && (
            <div>
              <label class="white-text">Cores</label>
                <div class="row">
                  <div class="input-field col s6">
                    <select class="browser-default" onChange={e => this.setState({ comboCaderno1: e.target.value })}>
                      <option class="" value="VERMELHO"> Vermelho </option>
                      <option class="" value="AZUL"> Azul </option>
                      <option class="" value="ROXO"> Roxo </option>
                      <option class="" value="VERDE"> Verde </option>
                      <option class="" value="PRETO"> Preto </option>
                    </select>
                  </div>
                  <div class="input-field col s6">
                    <select class="browser-default" onChange={e => this.setState({ comboCaderno2: e.target.value })}>
                      <option class="" value="VERMELHO"> Vermelho </option>
                      <option class="" value="AZUL"> Azul </option>
                      <option class="" value="ROXO"> Roxo </option>
                      <option class="" value="VERDE"> Verde </option>
                      <option class="" value="PRETO"> Preto </option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* COMBO 2 CADERNOS SIZE SELECTOR */}
          {modalId.includes('Bottons') && (
            <div>
              <label class="white-text">Modelos</label>
                <div class="row">
                  <div class={modalId.includes('3') ? 'input-field col s4' : 'input-field col s6' }>
                    <select class="browser-default" onChange={e => this.setState({ comboBotton1: e.target.value })}>
                      <option class="" value="MODELO_1"> Modelo 1 </option>
                      <option class="" value="MODELO_2"> Modelo 2 </option>
                      <option class="" value="MODELO_3"> Modelo 3 </option>
                    </select>
                  </div>
                  <div class={modalId.includes('3') ? 'input-field col s4' : 'input-field col s6' }>
                    <select class="browser-default" onChange={e => this.setState({ comboBotton2: e.target.value })}>
                      <option class="" value="MODELO_1"> Modelo 1 </option>
                      <option class="" value="MODELO_2"> Modelo 2 </option>
                      <option class="" value="MODELO_3"> Modelo 3 </option>
                    </select>
                  </div>
                  {modalId.includes('3') && (
                    <div class="input-field col s4">
                      <select class="browser-default" onChange={e => this.setState({ comboBotton3: e.target.value })}>
                        <option class="" value="MODELO_1"> Modelo 1 </option>
                        <option class="" value="MODELO_2"> Modelo 2 </option>
                        <option class="" value="MODELO_3"> Modelo 3 </option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
            )}

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
