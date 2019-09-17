import React,{Component} from 'react'
import Navbar from '../../components/commons/navbar'
import Footer from '../../components/commons/footer'
import CardDefault from '../../components/cards/cardRules'

class Rules extends Component{
   constructor(props){
       super(props)
       this.state ={
           InfoStore : ['A loja estará disponível para todos que fizerem a primeira parte da inscrição.',
           'PEDIDOS ATÉ DIA 27 DE SETEMBRO.','Após passado o prazo os pedidos estarão encerrados!',
           'Entrega de produtos serão feitas durante a Weekomp']
           ,infoSubs:['São duas etapas para se inscrever na WEEKOMP II:',
           '1 - Inscrição Pelo Site:',
           'Nessa fase você preenche seus dados e se inscreve nos eventos que desejarem.',
           'Você pode se matricular em um evento e sair a vontade, mas caso saia seu nome irá para o fim da lista de inscrição.',
           'Workshops, oficinas e maratonas possuem número limite de inscrições, após a lotação você entra para a lista de espera e poderá entrar no evento em caso de desistência.',
           'Caso você entre no evento pela lista de espera, você entrará automaticamente e receberá um email de confirmação.',
            '2 - Confirmação presencial:',
            'Para confirmar sua inscrição é preciso levar no Centro Acadêmico(localização no Footer do site) pelo menos 2 Quilos de alimentos.','Assim sua inscrição será confirmada e você poderá garantir sua vaga.',
            'Caso a segunda fase da inscrição não seja feita, as inscrições nos eventos serão desconsiderados após o fim do prazo de entrega dos alimentos.']
        ,infoDip:['Só irão ganhar certificados aqueles que passarem pelas duas fases de inscrições e confirmar sua presença nos eventos de acordo com o credenciamento.']
        ,infopart:['O Centro Acadêmico está em parceria com o instituto Céu no Sertão, que fará uma ação social durante o dia das crianças e além dos alimentos você pode levar:','- Mais alimentos','- Brinquedos','- Roupas','Dia 12 de outubro ocorrerá o IMPACTO SERTÃO KIDS']
        ,infoKids:['O que é o instituto?', 'O instituto céu no sertão existe a 4 anos na cidade de Sobral! Existe uma base de apoio na cidade, e trabalhos sendo desenvolvidos no sertão, numa comunidade chamada Boqueirão! Crianças tem assistência médica, famílias são beneficiadas com sextas básicas e muito amor!','O que irão fazer no dia das crianças ?', 'Nos Dias 11, 12 e 13 de outubro, estará acontecendo o impacto sertão kids, onde o instituto promoverá 3 dias de pura diversão e alegria para as crianças da comunidade, com jogos, brincadeiras, momentos de oração, e muita comida! Além disso, serão arrecadados e entregues as famílias das crianças, cestas básicas, roupas, brinquedos e etc !','Instagram:', <a href ="https://www.instagram.com/institutoceunosertao/">@institutoceunosertao</a>]
        // ,infopay:['Os pagamentos deverão ser feitos por transferência bancária, pick-pay','PicPay: @jardelalves_bf','Nuconta:','->  Nome: Italo Bruno Cunha da Silva','->  CPF: 054.888.993-75','->  Banco: 260 - Nu Pagamentos S.A.','->  Agência: 0001','->  Conta: 8270524-0','Pagamento em espécie: Confira horários de atendimento do CAECOMP no rodapé do site']
       }
   }
    render(){
        return(
            <div>
                <Navbar/>
                <CardDefault title='Informações  Loja:'  description={this.state.InfoStore} /> 
                <CardDefault title='Informações  Inscrições'  description={this.state.infoSubs} /> 
                <CardDefault title='Informações Certificados'  description={this.state.infoDip} />
                <CardDefault title='Parceria '  description={this.state.infopart} />
                <CardDefault title='Impacto Sertão Kids '  description={this.state.infoKids} />
                {/* <CardDefault title='Informações Pagamentos '  description={this.state.infopay} /> */}
                <Footer/>
            </div>
            
        )
    }
}


export default Rules