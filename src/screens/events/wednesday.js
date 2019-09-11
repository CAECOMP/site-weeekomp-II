import React from 'react'

import Navbar from '../../components/commons/navbar'
import Title from '../../components/title';
import Footer from '../../components/commons/footer';
import Divider from '../../components/divider';
import CardSmall from '../../components/cards/cardSmall';
import CardBig from '../../components/cards/cardBig';

export default class Wednesday extends React.Component {

    render() {

        return (
            <div>
                <Navbar />
                <Title>GameArt's Day</Title>
                <h5 className="center">13.10.19 - Quarta</h5>

                <div className="container">
                    <div className="section">
                        <div className="row">
                            <CardSmall
                                title="Italo Furtado - Primeiros passos para Valhalla"
                                content="Neste Workshop iremos introduzir a prototipação e desenvolvimento de jogos através de uma experiência prática utilizando Construct 2 e Piskel, iremos fazer um passo a passo para a construção de um jogo, entendendo não somente as etapas, mas processos cruciais para o desenvolvimento de um entretenimento que atenda a demanda do público jogador."
                                imageSrc="../palestrantes/Ítalo Furtado.jpg"
                                buttonLink="#" buttonName="Inscrever-se"
                                class="offset-m3"
                            />
                            <CardSmall
                                title="Palestra Mato"
                                content="Teste. I am a very simple card. I am good at containing small bits of information."
                                imageSrc="https://placegoat.com/600"
                                buttonLink="#" buttonName="Inscrever-se"
                                class="offset-m3"
                            />
                            <CardBig
                                title="Valhalla of Design"
                                content="- Amanda Tavares
                                Tema: Pesquisa, referência e embasamento em design
                                
                                Descrição:Quando criamos novos projetos ou funcionalidades para nossos produtos, tendemos a acreditar muito no nosso próprio conhecimento. Será que apenas sua visão de mundo é capaz de representar o resto da população e especialistas na área? Nessa palestra, irei explanar sobre por que e como incluir pesquisas no seu processo como forma de trazer soluções ainda melhores para os seus desafios.
                                
                                - Levy Cristian
                                Tema: Priorização e Hierarquização no design
                                Descrição: Uma abordagem explanatoria sobre a Priorização e hierarquização que um Design deve ter em mente quando estiver trabalhando em um projeto
                                
                                - Vicenzo Pegazo
                                Tema: Tierarr -> Ite’arr -> Iterar
                                
                                Descrição: Nesta palestra será demonstrado como incrementar um bom design junto ao usuário para construir uma boa experiência."
                                imageSrc="https://placegoat.com/600"
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
