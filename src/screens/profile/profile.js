import React from 'react'
import Divider from '../../components/divider';
import Title from '../../components/title';
import Footer from '../../components/commons/footer';
import Navbar from '../../components/commons/navbar';
import CardHorizontal from '../../components/cards/cardHorizontal';
import api from '../../services/api'
import info from '../../staticInfo/store'
import { longStackSupport } from 'q';

export default class Profile extends React.Component {

    state = {
        userInfo: null,
        orders: [],
        registrations: []
    }

    constructor(props) {
        super(props)
        this.getUserInfo()
    }

    async getUserInfo() {
        const userID = localStorage.getItem('userID')
        const authToken = localStorage.getItem('userToken')
        const requestOptions = { headers: { 'Authorization': `Bearer ${authToken}` } }
        
        if (userID && authToken) {
            let infoResponse = await api.get(`/userinfo/${userID}`, requestOptions)
            if (infoResponse.data.error == true) return;
            this.setState({ userInfo: infoResponse.data.data })
            const registrationsResponse = await api.get(`/registrations/${userID}`, requestOptions)
            const ordersResponse = await api.get(`/salesorder/${userID}`, requestOptions)
            if (registrationsResponse.data.error == false) {}
                this.setState({ registrations: registrationsResponse.data.data.map(r => {
                    let day = new Date(r.event.day)
                    day.setHours(day.getHours() + 4)
                    r.event.day = day.toLocaleDateString()
                    return r
                }) })
            if (ordersResponse.data.error == false) 
                this.setState({ orders: ordersResponse.data.data })
        }
    }

    logout() {
        localStorage.removeItem('userToken')
        localStorage.removeItem('userID')
        localStorage.removeItem('userName')
        this.setState({ userInfo: null, orders: [], registrations: [] })
    }

    render() {
        return (
            <div>
                <Navbar />
                {!this.state.userInfo ?
                <div>
                    <Title>Entre na Weekomp</Title>
                    <div className="container">
                        <div class="row">
                            <div class="col s12 m6 l4 offset-l4">
                                <a href="/login" style={{ color: 'white' }}>
                                    <div class="card-panel red darken-4">
                                        <h5 className="center">Entrar</h5>
                                    </div>
                                </a>
                            </div>
                            <div class="col s12 m6 l4 offset-l4">
                                <a href="/cadastro" style={{ color: 'white' }}>
                                    <div class="card-panel red darken-4">
                                        <h5 className="center">Cadastrar</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <Title> {this.state.userInfo.name} </Title>
                    <div className="center-align">
                        <button class="btn-small waves-effect waves-light" style={{backgroundColor: '#461000', color: 'white'}} onClick={this.logout()}>
                            Logout
                        </button>
                    </div>
                    <div className="section"> <Divider /> <h4 className="center-align">Inscrições</h4>
                    <div className="container">
                        <table className=" highlight responsive-table">
                            <thead className="grey darken-3">
                                <tr>
                                    <th>Evento</th>
                                    <th>Data</th>
                                    <th>Confirmado</th>
                                </tr>
                            </thead>

                            <tbody className="">
                                {this.state.registrations.map(r => (
                                <tr>
                                    <td>{r.event.name}</td>
                                    <td>{r.event.day}</td>
                                    <td>{r.confirmed ? 'Sim' : 'Não'}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    </div>
                    
                    <div className="section"> 
                    <Divider />
                    <h4 className="center-align">Pedidos</h4>
                    <div className="container">
                        <div className="row">
                            {this.state.orders.map(o => (
                                <div className="col l4 m2 s12">
                                    <CardHorizontal
                                        title={(o.product_id > 0 && o.product_id < 6) ? 'Camisa Weekomp' : 
                                            info.products.filter(p => p.id === o.product_id)[0].name}
                                        content={`R$ ${o.value}`}
                                        imageSrc={(o.product_id > 0 && o.product_id < 6) ? '/static/media/shirt.98afe474.png' : 
                                            info.products.filter(p => p.id === o.product_id)[0].imgSrc}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>

                    <div className="section"> <Divider /><Title>Certificados</Title>
                    <div className="container">
                        <div className="row">
                            <p>Ainda não há certificados disponíveis.</p>
                            <p><b>Previsão: 10/11/2019</b></p>
                        </div>
                    </div>
                    </div>
                </div>
                }

                <div style={{ marginTop: 200 /*position: 'fixed', bottom: '0', width: '100%'*/ }}>
                    <Footer />
                </div>
            </div>
        )
    }
}