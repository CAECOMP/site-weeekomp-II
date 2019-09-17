import React from 'react'

import Navbar from '../../components/commons/navbar'
import Title from '../../components/title';
import Footer from '../../components/commons/footer';
import Divider from '../../components/divider';
import CardSmall from '../../components/cards/cardSmall';
import CardBig from '../../components/cards/cardBig';
import RegisterModal from '../../components/modal/register-modal'

export default class Wednesday extends React.Component {

    render() {

        return (
            <div>
                <Navbar />
                <Title>GameArt's Day</Title>
                <h5 className="center">09/10/19 - Quarta</h5>

                <div className="container">
                    <div className="section">
                        <div className="row">
                            <CardSmall
                                title="Italo Furtado - Primeiros passos para Valhalla"
                                content="Neste Workshop iremos introduzir a prototipação e desenvolvimento de jogos através de uma experiência prática utilizando Construct 2 e Piskel, iremos fazer um passo a passo para a construção de um jogo, entendendo não somente as etapas, mas processos cruciais para o desenvolvimento de um entretenimento que atenda a demanda do público jogador."
                                imageSrc={require('../../persons/italo-furtado.jpg')}
                                buttonLink="#Valhalla" buttonName="Inscrever-se"
                                class="offset-m3"
                            />
                            <CardSmall
                                title="Gustavo Chaves - UI e UX: Teoria e Prática com Adobe XD"
                                content="Nesta oficina será ensinado sobre os entregáveis de UX e como usá-los para construir interfaces de apps."
                                imageSrc={require('../../persons/gustavo-chaves.jpeg')}
                                buttonLink="#UIeUX" buttonName="Inscrever-se"
                                class="offset-m3"
                            />
                            <CardBig
                                title="Valhalla of Design"
                                content={
                                    <div>
                                        <p>Amanda Tavares</p>
                                        <p>-> Tema: Pesquisa, Referência e Embasamento em Design</p>
                                        <p>-> Descrição: Quando criamos novos projetos ou funcionalidades para nossos produtos, tendemos a acreditar muito no nosso próprio conhecimento. Será que apenas sua visão de mundo é capaz de representar o resto da população e especialistas na área? Nessa palestra, irei explanar sobre por que e como incluir pesquisas no seu processo como forma de trazer soluções ainda melhores para os seus desafios.</p>
                                        <p>Levy Christian</p>
                                        <p>-> Tema: Priorização e Hierarquização no Design.</p>
                                        <p>-> Descrição: Uma abordagem explanatoria sobre a priorização e hierarquização que um Design deve ter em mente quando estiver trabalhando em um projeto.</p>
                                        <p>Vicenzo Pegazo</p>
                                        <p>-> Tema: Tierarr -> Ite’arr -> Iterar</p>
                                        <p>-> Descrição: Nesta palestra será demonstrado como incrementar um bom design junto ao usuário para construir uma boa experiência.</p>
                                    </div>
                                }
                                imageSrc={require('../../talks/walhalla-of-design.png')}
                                buttonLink="#ValhallaofDesign" buttonName="Inscrever-se"
                            />
                        </div>
                    </div>
                </div>

                <RegisterModal eventId="Valhalla" title="Primeiros passos para Valhalla" />
                <RegisterModal eventId="UIeUX" title="UI e UX: Teoria e Prática com Adobe XD" />
                <RegisterModal eventId="ValhallaofDesign" title="Valhalla of Design" />\

                <Divider />
                <Footer />
            </div>
        )
    }
}
