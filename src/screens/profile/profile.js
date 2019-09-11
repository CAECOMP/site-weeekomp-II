import React from 'react'
import Divider from '../../components/divider';
import Title from '../../components/title';
import Footer from '../../components/commons/footer';
import Navbar from '../../components/commons/navbar';
import CardHorizontal from '../../components/cards/cardHorizontal';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Title>Overview</Title>
                <div className="container">
                    <div class="row">
                        <div class="col s12 l3 offset-l3">
                            <div class="card-panel red darken-4">
                                <h5 className="center">3 Inscrições</h5>
                            </div>
                        </div>
                        <div class="col s12 m4 l3">
                            <div class="card-panel red darken-4">
                                <h5 className="center">1 Pedido</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section"> <Divider /> <Title>Inscrições</Title>
                <div className="container">
                    <table className=" highlight responsive-table">
                        <thead className="grey darken-4">
                            <tr>
                                <th>Inscrições</th>
                                <th>Cancelar Inscrição</th>
                            </tr>
                        </thead>

                        <tbody className="">
                            <tr>
                                <td>Alvin Alvin Alvin Alvin Alvin Alvin Alvin Alvin Alvin Alvin Alvin</td>
                                <td>$0.87</td>
                            </tr>
                            <tr>
                                <td>Alan</td>
                                <td>$3.76</td>
                            </tr>
                            <tr>
                                <td>Jonathan</td>
                                <td>$7.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                
                <div className="section"> 
                <Divider />
                <Title>Pedidos</Title>
                <div className="container">
                    <div className="row">
                        <div className="col l4 m2 s12">
                            <CardHorizontal
                                title="Caneca"
                                content="Caneca cósmica. R$ 50,00"
                                imageSrc="https://placegoat.com/600"
                                buttonLink="#" buttonName="Remover"
                            />
                        </div>
                        <div className="col l4 m2 s12">
                            <CardHorizontal
                                title="Caneca"
                                content="Caneca cósmica. R$ 50,00"
                                imageSrc="https://placegoat.com/600"
                                buttonLink="#" buttonName="Remover"
                            />
                        </div>
                        <div className="col l4 m2 s12">
                            <CardHorizontal
                                title="Caneca"
                                content="Caneca cósmica. R$ 50,00"
                                imageSrc="https://placegoat.com/600"
                                buttonLink="#" buttonName="Remover"
                            />
                        </div>
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
                <Footer />
            </div>
        )
    }
}