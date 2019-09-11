import React,{Component} from 'react'
import Navbar from '../../components/commons/navbar'
import Footer from '../../components/commons/footer'
import CardDefault from '../../components/cards/cardRules'
import { type } from 'os';

class Rules extends Component{
   constructor(props){
       super(props)
       this.state ={
           InfoStore : ['A loja estará disponível para todos que fizerem a primeira parte da inscrição.',
           'PEDIDOS ATÉ DIA 28 DE SETEMBRO.','Após passado o prazo os pedidos estarão encerrados!',
           'Entrega de produtos serão feitas durante a Weekomp']
           ,infoSubs:['São duas etapas para se inscrever na WEEKOMP II:',
           '1 - Inscrição Pelo Site:',
           'Nessa fase você preenche seus dados e se inscreve nos eventos que desejarem.',
           'Você pode se matricular em um evento e sair a vontade, mas caso saia seu nome irá para o fim da lista de inscrição.',
           'Workshops, oficinas e maratonas possuem número limite de inscrições, após a lotação você entra para a lista de espera e poderá entrar no evento em caso de desistência.',
           'Caso você entre no evento pela lista de espera, você entrará automaticamente e receberá um email de confirmação.',
            '2 - Confirmação presencial:',
            'Para confirmar sua inscrição é preciso levar no Centro Acadêmico(localização no Footer do site) pelo menos 2 Quilos de alimentos.','Assim sua inscrição será confirmada e você poderá garantir sua vaga.',
            'Caso a segunda fase da inscrição não seja feita, as inscrições nos eventos serão desconsiderados após o encerrado o prazo de entrega.']
        ,infoDip:['Só irão ganhar certificados aqueles que passarem pelas duas fases de inscrições e confirmar sua presença nos eventos de acordo com o credenciamento.']
        ,infopart:['O Centro Acadêmico está em parceria com o instituto Céu no Sertão, que fará uma ação social durante o dia das crianças e além dos alimentos você pode levar:','Mais alimentos','Brinquedos','Roupas','Para saber mais sobre o projeto e sobre a ação social que será realizada dia 12 de outubro clique abaixo:']
        ,infopay:['Os pagamentos deverão ser feitos por transferência bancária, pick-pay','PicPay: @jardelalves_bf','Nuconta:','Nome: Italo Bruno Cunha da Silva','CPF: 054.888.993-75','Banco: 260 - Nu Pagamentos S.A.','Agência: 0001','Conta: 8270524-0','*Pagamento em espécie: Confira horários de atendimento do CAECOMP no rodapé do site']
       }
   }
    render(){
        return(
            <div>
                <Navbar/>
                <CardDefault title='Sobre a loja:'  description={this.state.InfoStore} /> 
                <CardDefault title='Sobre as Inscrições'  description={this.state.infoSubs} /> 
                <CardDefault title='Sobre os Diplomas'  description={this.state.infoDip} />
                <CardDefault title='Parceria '  description={this.state.infopart} />
                <CardDefault title='Pagamentos '  description={this.state.infopay} />
                <Footer/>
            </div>
            
        )
    }
}


export default Rules