import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import M from 'materialize-css';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
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
        className="modal grey darken-4"
        style={{ zIndex: '1003' }}
      >
        <div className="modal-content container">
          <div className="row">
            <h4 class="center-align">{title}</h4>
          </div>
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
          <div className="container center-align row">
            <button
              class="btn waves-effect white red darken-4 waves-light"
              type="submit"
              name="action"
            >
              Comprar
              <i class="material-icons right red darken-4">send</i>
            </button>
          </div>
          <div className="container center-align">
            <a href="#!" className="modal-close waves-effect white-text waves-green btn-flat">
              Cancelar
            </a>
          </div>
        </div>
      </div>
    );
  }
}
