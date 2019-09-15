import React from 'react'

import Navbar from '../../components/commons/navbar'
import Title from '../../components/title';
import Footer from '../../components/commons/footer';
import Divider from '../../components/divider';
import CardSmall from '../../components/cards/cardSmall';

export default class Tuesday extends React.Component {

    render() {

        return (
            <div>
                <Navbar />
                <Title>Bifrost's Day</Title>
                <h5 className="center">08/10/19 - Terça</h5>

                <div className="container">
                    <div className="section">
                        <div className="row">
                            <CardSmall
                                title="Leonardo Gomes - Introdução a IoT com Arduino"
                                content={
                                    <div>
                                        &emsp;
                                        <h6 className="amber-text text-accent-4">LOCAL: Sala LMC-01.</h6>
                                        <h6 className="amber-text text-accent-4">HORÁRIO: 8h - 12h.</h6>
                                        &emsp;
                                        <p>O workshop irá introduzir alguns conceitos de IoT utilizando Arduino, mostrando na prática como fazer algumas aplicações simples com WiFi.</p>
                                    </div>
                                }
                                imageSrc={require('../../persons/leonardo-gomes.jpg')}
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Jully Nobre - Quando e Porquê usar o Scrum?"
                                content={
                                    <div>
                                        &emsp;
                                        <h6 className="amber-text text-accent-4">LOCAL: Auditório Iran Raupp.</h6>
                                        <h6 className="amber-text text-accent-4">HORÁRIO: 14h.</h6>
                                        &emsp;
                                        <p>Nessa palestra será demonstrado casos em que o Scrum pode ajudar (ou não) na gerencia de projetos.</p>
                                    </div>
                                }
                                imageSrc={require('../../persons/jully-nobre.jpg')}
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Daniel e Ítalo - Ops! Como os devs podem ajudar?"
                                content={
                                    <div>
                                        &emsp;
                                        <h6 className="amber-text text-accent-4">LOCAL: Auditório Iran Raupp.</h6>
                                        <h6 className="amber-text text-accent-4">HORÁRIO: 14h50.</h6>
                                        &emsp;
                                        <p>-> "Devepos + Tests";</p>
                                        <p>-> Cultura Devops;</p>
                                        <p>-> Por que CI&CD?;</p>
                                        <p>-> Intro com Testes Unitários.</p>
                                    </div>
                                }
                                imageSrc={require('../../persons/daniel-silva-&-italo-silva.jpg')}
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Vinicius - Boas práticas de versionamento"
                                content={
                                    <div>
                                        &emsp;
                                        <h6 className="amber-text text-accent-4">LOCAL: Auditório Iran Raupp.</h6>
                                        <h6 className="amber-text text-accent-4">HORÁRIO: 16h.</h6>
                                        &emsp;
                                        <p>O versionamento de código é algo essencial para todo programador e é preciso estar atento as boas práticas para melhorar a sua produtividade a do seu time. Nesta palestra iremos demonstrar maneiras de garantir uma melhor gestão dos seus repositórios.</p>
                                    </div>
                                }
                                imageSrc={require('../../persons/vinicius-mangueira.jpg')}
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
