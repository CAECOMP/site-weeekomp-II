import React from 'react'

import Navbar from '../../components/commons/navbar'
import Title from '../../components/title';
import Footer from '../../components/commons/footer';
import Divider from '../../components/divider';
import CardSmall from '../../components/cards/cardSmall';

export default class Thursday extends React.Component {

    render() {

        return (
            <div>
                <Navbar />
                <Title>Locky's Day</Title>
                <h5 className="center">10/10/19 - Quinta</h5>

                <div className="container">
                    <div className="section">
                        <div className="row">
                            <CardSmall
                                title="Marcus Vinícius - Workshop 'Crack Me'"
                                content={
                                    <div>
                                        &emsp;
                                        <h6 className="amber-text text-accent-4">LOCAL: LMC 01.</h6>
                                        <h6 className="amber-text text-accent-4">HORÁRIO: 8h - 12h.</h6>
                                        &emsp;
                                        <p>O workshop será ministrado de forma que os participantes conheçam os conceitos básicos necessários para solucionar desafios do tipo “crack me”. Não será necessário de conhecimentos prévios de resolução de tais desafios mas é aconselhável ter uma boa base de programação utilizando a linguagem C para melhor entendimento dos problemas a serem resolvidos.</p>
                                    </div>
                                }
                                imageSrc={require('../../persons/marcus-vinicius.jpg')}
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Marcus Vinícius - Capture The Flag (CTF)"
                                content={
                                    <div>
                                        &emsp;
                                        <h6 className="amber-text text-accent-4">LOCAL: LMC 03.</h6>
                                        <h6 className="amber-text text-accent-4">HORÁRIO: 14h - 18h.</h6>
                                        &emsp;
                                        <p>O CTF da Weekomp desse ano abordará desafios do tipo “crack me” e tem como objetivo apresentar os problemas clássicos relacionados a essa categoria de problemas.</p>
                                    </div>
                                }
                                imageSrc={require('../../talks/capture-flag.png')}
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                        </div>
                    </div>
                </div>

                <Divider />
                <Footer />
            </div>
        )
    }
}
