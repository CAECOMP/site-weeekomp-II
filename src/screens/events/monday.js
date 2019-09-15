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
                <h5 className="center"> 07/10/19 - Segunda </h5>

                <div className="container">
                    <div className="section">
                        <div className="row">
                            <CardBig
                                title="The Last Ones - Lucas Tavares, André Vieira, Gabriela Bezerra e Luiza Macedo"
                                content={
                                    <div>
                                        &emsp;
                                        <h6 className="amber-text text-accent-4">LOCAL: Auditório Iran Raupp.</h6>
                                        <h6 className="amber-text text-accent-4">HORÁRIO: 13h30.</h6>
                                        &emsp;
                                        <p>Alunos perto de se formar irão contar suas experiências durante o curso e suas expectativas para o dia depois da conquista do diploma.</p>
                                    </div>
                                }
                                imageSrc={require('../../talks/the-last-of-ones.png')}
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardBig
                                title="Odin's Table - David, Alan Rabelo, Leo Silveira, Levi Moreira"
                                content={
                                    <div>
                                        &emsp;
                                        <h6 className="amber-text text-accent-4">LOCAL: Auditório Iran Raupp.</h6>
                                        <h6 className="amber-text text-accent-4">HORÁRIO: 16h.</h6>
                                        &emsp;
                                        <p>Roda de conversa com ex-alunos que seguiram caminhos diferentes após a graduação. Falaremos com alunos de Mestrado, ex-alunos que abriram empresas ou foram para o mercado de trabalho. Eles irão tirar dúvidas e inspirar na hora de escolher o melhor caminho após a graduação.</p>
                                    </div>
                                }
                                imageSrc={require('../../talks/odins-table.png')}
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
