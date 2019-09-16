import React, { Component } from 'react';
import M from 'materialize-css';
import api from '../../services/api'

const EventID = {
  'TheLastOnes': 1, 'OdinsTable': 2,
  'IoT': 3, 'Scrum': 4, 'Ops!': 5, 'versionamento': 6,
  'Valhalla': 7, 'UIeUX': 8, 'ValhallaofDesign': 9,
  'CrackMe': 10, 'CTF': 11,
  'Intro': 12, 'Maratona': 13, 'RagnaKode': 14
}

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

  getRequestRequirements() {
    const userID = localStorage.getItem('userID');
    const authToken = localStorage.getItem('userToken');
    const requestOptions = { headers: { Authorization: `Bearer ${authToken}` } };
    return { userID, requestOptions };
  }

  async registerButtonDidPressed(e) {
    e.target.disabled = true
    const { eventId } = this.props
    const { userID, requestOptions } = this.getRequestRequirements()
    const body = [{ event_id: EventID[eventId] }]
    try {
      await api.post(`/registrations/${userID}`, body, requestOptions)
      this.setState({ subscribed: true })
    } catch (error) {
      this.setState({ subscribed: false })
    }
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
              {this.state.subscribed == null ?
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
                :
                <p
                class="center-align"
                style={this.state.subscribed ? { color: 'green' } : { color: 'red' }}
                >{this.state.subscribed ?
                  'Pré inscrição realizada, confirme sua presença junto ao Centro Acadêmico' : 
                  'Erro na inscrição, tente novamente mais tarde'}
                </p>
              }
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