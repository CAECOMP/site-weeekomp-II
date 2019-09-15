import React, { Component } from 'react';
import M from 'materialize-css';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: '4%',
      endingTop: '10%',
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    const { modalId, title, price } = this.props;
    return (
      <div
        ref={Modal => {
          this.Modal = Modal;
        }}
        id={modalId}
        className="modal grey darken-4"
        style={{ zIndex: '1003' }}
      >
        <div className="modal-content">
          <h4>{title}</h4>
          <p>{price}</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">
            Comprar
          </a>
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">
            Cancelar
          </a>
        </div>
      </div>
    );
  }
}
