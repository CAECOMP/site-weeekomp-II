import React from 'react'

import Navbar from '../../components/commons/navbar'
import Title from '../../components/title';
import Footer from '../../components/commons/footer';
import Divider from '../../components/divider';
import CardSmall from '../../components/cards/cardSmall';

export default class Friday extends React.Component {

    render() {

        return (
            <div>
                <Navbar />
                <Title>For The Code!</Title>
                <h5 className="center">13.10.19 - Sexta</h5>

                <div className="container">
                    <div className="section">
                        <div className="row">
                            <CardSmall
                                title="Workshop de Capim"
                                content="Teste. I am a very simple card. I am good at containing small bits of information."
                                imageSrc="https://placegoat.com/600"
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Palestra Mato"
                                content="Teste. I am a very simple card. I am good at containing small bits of information."
                                imageSrc="https://placegoat.com/600"
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Cabritagem"
                                content="Teste. I am a very simple card. I am good at containing small bits of information."
                                imageSrc="https://placegoat.com/600"
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Cabesco"
                                content="Teste. I am a very simple card. I am good at containing small bits of information."
                                imageSrc="https://placegoat.com/600"
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Como ser cabra"
                                content="Teste. I am a very simple card. I am good at containing small bits of information."
                                imageSrc="https://placegoat.com/600"
                                buttonLink="#" buttonName="Inscrever-se"
                            />
                            <CardSmall
                                title="Como ser cabra"
                                content="Teste. I am a very simple card. I am good at containing small bits of information."
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
