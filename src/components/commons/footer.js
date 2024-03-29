import React from 'react'

export default class Footer extends React.Component {

    render() {
        return (
            <div className="section" style={{backgroundColor: '#461000'}}>
            <div className="row">
                <div className="container">
                    <div className="col l4">
                        <h5>Horários de Atendimento - CAECOMP</h5>
                        <h5>-> 12h30 a 13h30</h5>
                        <h5>-> 15h30 a 16h</h5>
                        <h5>-> 18h a 18h30</h5>
                    </div>
                    <div className="col l4">
                        <h5>Informações</h5>
                        <p>A Weekomp II é a segunda semana de engenharia de computação do IFCE- campus fortaleza. Tem como objetivo a disseminação de conhecimentos da área de tecnologia através dos próprios alunos do curso. Alunos e ex-alunos realizarão palestras e workshops para ajudar nas escolhas dentro e fora do curso para guiar a formação profissional e também fortificar a comunidade local.
                        </p>
                    </div>
                    <div className="col l4">
                        <h5>Caecomp</h5>
                        <p>O Centro Acadêmico de engenharia de computação do IFCE visa melhorar o curso através de uma aproximação maior com os alunos. Estamos sempre abertos para feedbacks, sugestões e reclamações para que possamos melhorar nosso curso. Para acompanhar nosso posts nos sigam no Instagram.</p>
                        <p><a href ="https://www.instagram.com/caecompifce/">@caecompifce</a></p>
                        <p className="valign-wrapper"><i className="material-icons">place</i>Segundo andar do bloco central</p>
                        <p className="valign-wrapper"><i className="material-icons">mail</i>caecomp.ifce@gmail.com</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
