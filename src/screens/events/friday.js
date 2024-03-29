import React from 'react'

import Navbar from '../../components/commons/navbar'
import Title from '../../components/title';
import Footer from '../../components/commons/footer';
import Divider from '../../components/divider';
import CardSmall from '../../components/cards/cardSmall';
import CardBig from '../../components/cards/cardBig';
import RegisterModal from '../../components/modal/register-modal'

export default class Friday extends React.Component {

    render() {

        return (
            <div>
                <Navbar />
                <Title>For The Code!</Title>
                <h5 className="center">11/10/19 - Sexta</h5>

                <div className="container">
                    <div className="section">
                        <div className="row">
                            <CardSmall
                                title="Workshop de Introdução a Programação Funcional com Python"
                                content={
                                    <div>
                                        &emsp;
                                        <h6 className="amber-text text-accent-4">LOCAL: Redes 02.</h6>
                                        <h6 className="amber-text text-accent-4">HORÁRIO: 8h - 12h.</h6>
                                        &emsp;
                                        <p>O workshop apresentará alguns conceitos e termos relacionados a programação funcional e algumas abstrações simples.</p>
                                    </div>
                                }
                                imageSrc={require('../../persons/julio-oliveira.jpg')}
                                buttonLink="#Intro" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Maratona de Programação"
                                content={
                                    <div>
                                        &emsp;
                                        <h6 className="amber-text text-accent-4">LOCAL: LMC 03.</h6>
                                        <h6 className="amber-text text-accent-4">HORÁRIO: 14h - 18h.</h6>
                                        &emsp;
                                        <p>A maratona terá problemas diversos e de várias dificuldades que irão testar seus conhecimentos e suas formas de resolver problemas. Será usado o sistema URI Online Judge, podendo participar times de 1 a 3 integrantes, e será nas linguagens C, C++, Python e Java.</p>
                                    </div>
                                }
                                imageSrc={require('../../persons/alyson-noronha.jpg')}
                                buttonLink="#Maratona" buttonName="Inscrever-se"
                            />
                            <CardBig
                                title="RagnaKode"
                                content={
                                    <div>
                                        &emsp;
                                        <h6 className="amber-text text-accent-4">LOCAL: Auditório Castelo Branco.</h6>
                                        <h6 className="amber-text text-accent-4">HORÁRIO: 18h30.</h6>
                                        &emsp;
                                        <p className="amber-text text-accent-4">Levi Moreira:</p>
                                        <p>-> Tema: TensorFlow com Android - Incorporando Redes Neurais (e outros modelos) em aplicativos Android</p>
                                        <p>-> Descrição: Nessa palestra irei falar um pouco de como trazer seus modelos desenvolvidos no Tensor Flow para um dispositivo Android. Iremos discutir o que são redes neurais convolucionais e como um modelo primeiramente desenvolvido em um PC pode ser convertido e incorporado em aplicativos Android fazendo a classificação de novos exemplos no próprio dispositivo sem precisar consultar um servidor. Por fim irei falar um pouco sobre técnicas de privacidade envolvendo modelos on-device e introduzir o conceito de Federated Learning.</p>
                                        <p className="amber-text text-accent-4">Mario Matheus:</p>
                                        <p>-> Tema: Desenvolvendo sua primeira Linguagem de Programação</p>
                                        <p>-> Descrição: Nesta palestra será abordado alguns aspectos sobre compiladores e desenvolvimento de uma pequena Linguagem em JavaScript.</p>
                                        <p className="amber-text text-accent-4">Matheus Sales:</p>
                                        <p>-> Tema: Machine Learning voltado ao Mercado de Trabalho</p>
                                        <p>-> Descrição: Saiba como Machine Learning é usado nas empresas que estão no mercado."</p>
                                    </div>
                                }
                                imageSrc={require('../../talks/ragnakode.png')}
                                buttonLink="#RagnaKode" buttonName="Inscrever-se"
                            />
                        </div>
                    </div>
                </div>

                <RegisterModal eventId="Intro" title="Programação Funcional com Python" />
                <RegisterModal eventId="Maratona" title="Maratona de Programação" />
                <RegisterModal eventId="RagnaKode" title="RagnaKode" />
                
                <Divider />
                <Footer />
            </div>
        )
    }
}
