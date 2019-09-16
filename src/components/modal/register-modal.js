import React, { Component } from 'react';
import M from 'materialize-css';

export default class RegisterModal extends Component {

  constructor(props) {
    super(props)
    this.registerButtonDidPressed = this.registerButtonDidPressed.bind(this);
    this.state = {
      subscribed: null
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

  registerButtonDidPressed() {
    console.log('registration')
  }

  render() {
    const { eventId, title } = this.props;
    return (
      <div
          ref={Modal => { this.Modal = Modal; }}
          id={eventId}
          className="modal grey darken-4 text-center"
          style={{ zIndex: '1003' }}>
          <div className="modal-content container">
              <div className="row">
                  <h4 class="center-align"> {title} </h4>
              </div>
              <p className="center-align"> Deseja realizar sua pré inscrição? </p>
              <br />
              <div className="container center-align row">
                <button
                  class="btn waves-effect white red darken-4 waves-light"
                  type="submit"
                  name="action"
                  onClick={this.registerButtonDidPressed}
                >
                  Inscrever-se
                </button>
              </div>
              <div className="container center-align">
                <a href="#!" className="modal-close waves-effect white-text waves-green btn-flat">
                  {!this.state.subscribed ? 'Cancelar' : 'Fechar'}
                </a>
              </div>
          </div>
      </div>
    )
  }

}