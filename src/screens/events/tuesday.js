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
                <h5 className="center">13.10.19 - Terça</h5>

                <div className="container">
                    <div className="section">
                        <div className="row">
                            <CardSmall
                                title="Leonardo Gomes - Introdução a IoT com Arduino"
                                content="O workshop irá introduzir alguns conceitos de IoT utilizando Arduino, mostrando na prática como fazer algumas aplicações simples com WiFi."
                                imageSrc="../palestrantes/Leonardo Gomes.jpg"
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Jully Nobre - Quando e porquê usar o Scrum?"
                                content="Nessa palestra será demonstrado casos em que o Scrum pode ajudar (ou não) na gerencia de projetos."
                                imageSrc="../palestrantes/Jully Nobre.jpg"
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Daniel e Ítalo - Ops! Como os devs podem ajudar?"
                                content="Cultura devops -> Por que CI&CD -> intro com testes unitarios."
                                imageSrc="../palestrantes/Daniel Silva e Italo Silva.png"
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Vinicius - Boas práticas de versionamento"
                                content="O versionamento de código é algo essencial para todo programador e é preciso estar atento as boas práticas para melhorar a sua produtividade a do seu time. Nesta palestra iremos demonstrar maneiras de garantir uma melhor gestão dos seus repositórios."
                                imageSrc="../palestrantes/Vinicius Mangueira.jpg"
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
