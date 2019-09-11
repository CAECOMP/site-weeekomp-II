import React from 'react'

import Navbar from '../../components/commons/navbar'
import Title from '../../components/title';
import Footer from '../../components/commons/footer';
import Divider from '../../components/divider';
import CardBig from '../../components/cards/cardBig';

export default class Monday extends React.Component {

    render() {

        return (
            <div>
                <Navbar />
                <Title>Kingdom's Day</Title>
                <h5 className="center">13.10.19 - Segunda</h5>

                <div className="container">
                    <div className="section">
                        <div className="row">
                            <CardBig
                                title="Lucas Tavares, André Vieira, Gabriela Bezerra e Luiza Macedo - The Last Ones"
                                content="Alunos perto de se formar irão contar suas experiências durante o curso e suas expectativas para o dia depois da conquista do diploma."
                                imageSrc="https://placegoat.com/600"
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardBig
                                title="David, Alan Rabelo, Leo Silveira, Levi Moreira - Távola redonda dos reinos"
                                content="Roda de conversa com ex-alunos que seguiram caminhos diferentes após a graduação. Falaremos com alunos de Mestrado, ex-alunos que abriram empresas ou foram para o mercado de trabalho para tirar dúvidas e inspirar na hora de escolher o melhor caminho após a graduação."
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
