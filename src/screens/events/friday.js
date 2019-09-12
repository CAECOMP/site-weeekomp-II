import React from 'react'

import Navbar from '../../components/commons/navbar'
import Title from '../../components/title';
import Footer from '../../components/commons/footer';
import Divider from '../../components/divider';
import CardSmall from '../../components/cards/cardSmall';
import CardBig from '../../components/cards/cardBig';

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
                                content="O workshop apresentará alguns conceitos e termos relacionados a programação funcional e algumas abstrações simples."
                                imageSrc={require('../../persons/julio-oliveira.jpg')}
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Maratona de Programação"
                                content="A maratona terá problemas diversos e de várias dificuldades que irão testar seus conhecimentos e suas formas de resolver problemas. Será usado o sistema URI Online Judge, podendo participar times de 1 a 3 integrantes, e será nas linguagens C, C++, Python e Java."
                                imageSrc={require('../../persons/alyson-noronha.jpg')}
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardBig
                                title="RagnaKode"
                                content={
                                    <div>
                                        <p>Levi Moreira:</p>
                                        <p>-> TensorFlow com Android: Incorporando Redes Neurais (e outros modelos) em aplicativos Android;</p>
                                        <p>-> Nessa palestra irei falar um pouco de como trazer seus modelos desenvolvidos no Tensor Flow para um dispositivo Android. Iremos discutir o que são redes neurais convolucionais e como um modelo primeiramente desenvolvido em um PC pode ser convertido e incorporado em aplicativos Android fazendo a classificação de novos exemplos no próprio dispositivo sem precisar consultar um servidor. Por fim irei falar um pouco sobre técnicas de privacidade envolvendo modelos on-device e introduzir o conceito de Federated Learning.</p>
                                        <p>Mario:</p>
                                        <p>-> Desenvolvendo sua primeira Linguagem de Programação;</p>
                                        <p>-> Nesta palestra será abordado alguns aspectos sobre compiladores e desenvolvimento de uma pequena Linguagem em JavaScript.</p>
                                        <p>Matheus Sales:</p>
                                        <p>-> Machine Learning voltado ao Mercado de Trabalho;</p>
                                        <p>-> Saiba como Machine Learning é usado nas empresas que estão no mercado."</p>
                                    </div>
                                }
                                imageSrc={require('../../talks/ragnakode.png')}
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
