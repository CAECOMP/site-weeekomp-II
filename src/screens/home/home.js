import React from 'react'

import Navbar from '../../components/commons/navbar'
import Banner from '../../components/banner'
import Title from '../../components/title';
import Divider from '../../components/divider';
// import Carousel from '../../components/carousel';
import Footer from '../../components/commons/footer';
import CardDefault from '../../components/cards/cardDefault';

import './home.css'
import { isTemplateElement } from '@babel/types';


export default class Home extends React.Component {

    render() {
        const carouselItens = [
            {name: "1 camisa + 3 bottons + 1 caderno", description: "R$ 35,00", imageSrc:"https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"},
            {name: "1 camisa + 3 bottons", description: "R$ 30,00", imageSrc:"https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"},
            {name: "2 camisas + 3 bottons + 1 caderno", description: "R$ 60,00", imageSrc:"https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"}
        ]

        const cronogramaItens = [
            {title: "", imageSrc: "seg.png", pageLink: "/evento/segunda", description: "Kingsdom's day é o dia voltado aos grandes reinos da computação. Teremos palestras e mesa redonda para ajudar a nortear na escolha do caminho a se seguir durante e depois do curso."},
            {title: "", imageSrc: "ter.png", pageLink: "/evento/terca", description: "Bifrost's Day é o dia de aprendermos mais sobre conectividade! Abordaremos tanto conexão entre componentes como também entre pessoas com palestras voltadas a gerenciamento de projetos e também de times."},
            {title: "", imageSrc: "quar.png", pageLink: "/evento/quarta", description: "GameArt’s Day é o dia para aqueles que gostam da carreira de desenvolvimento de jogos e construção de interfaces. Teremos práticas voltadas a essa área e de noite teremos o Valhala Of Design!"},
            {title: "", imageSrc: "quin.png", pageLink: "/evento/quinta", description: "Locky's Day é o dia voltado para a área de segurança, teremos um treinamento para os desenvolvedores porem a prova no CFT de tarde."},
            {title: "", imageSrc: "sex.png", pageLink: "/evento/sexta", description: "Neste dia teremos um treinamento para melhorar as habilidades dos desenvolvedores e quebrarem a cabeça na resolução de problemas durante a maratona de programação. De noite teremos o ultimo evento da Weekomp II, o RagnaKode com palestras incríveis voltadas para a área de inteligência artificial e desenvolvimento inteligente."},
        ]

        return (
            <div>
                <Navbar/>
                <Banner imageSrc={require('../../talks/banner.png')}/>

                <div className="containerCronograma">
                    <Title>Cronograma</Title>
                    <div className="section">

                        <div className="row">
                            {cronogramaItens.map((item) =>
                                <CardDefault 
                                key={item.imageSrc}
                                title={item.title} 
                                imageSrc={item.imageSrc} 
                                description={item.description}
                                pageLink={item.pageLink}
                                class={item.pageLink === "/evento/quinta" ? "offset-m2" : ""}
                                />
                            )}
                        </div>
                    
                        {/* <div className="row">
                            <CardDefault title="" 
                                imageSrc="seg.png" 
                                description="Kingsdom's day é o dia voltado aos grandes reinos da computação. Teremos palestras e mesa redonda para ajudar a nortear a escolha do caminho a se seguir durante e depois do curso."
                                pageLink="/evento/segunda"
                            />
                            <CardDefault title="" 
                                imageSrc="ter.png" 
                                description="Bifrost's Day é o dia de aprendermos mais sobre conectividade! Abordaremos tanto conexão entre componentes como também entre pessoas com palestras voltadas a gerenciamento de projetos e também de times."
                                pageLink="/evento/terca"
                            />
                            <CardDefault title="" 
                                imageSrc="quar.png" 
                                description="GameArt’s Day é o dia para aqueles que gostam da carreira de desenvolvimento de jogos e ilustração. Teremos práticas voltadas a essa área e de noite teremos o Walhalla Of Design!"
                                pageLink="/evento/quarta"
                            />
                        </div>

                        <div className="row">
                            <CardDefault title="" 
                                imageSrc="quin.png" 
                                description="Locky's Day é o dia voltado para a área de segurança, teremos um treinamento para os desenvolvedores porem a prova no CFT de tarde."
                                pageLink="/evento/quinta"
                                class="offset-m2"
                            />
                            <CardDefault title="" 
                                imageSrc="sex.png" 
                                description="Neste dia teremos um treinamento para melhorar as habilidades dos desenvolvedores e quebrarem a cabeça na resolução de problemas durante a maratona de programação. De noite teremos o ultimo evento da Weekomp II, o RagnaKode com palestras incríveis voltadas para a área de inteligência artificial e desenvolvimento inteligente."
                                pageLink="/evento/sexta"
                            />
                        </div> */}
                    </div> 
                </div>

                {/* <Divider/>
                <Title>Loja</Title>
                <Carousel itens={carouselItens}/> */}

                <Divider/>
                <Footer/>
            </div>
        )
    }
}
