import React from 'react'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api'
import '../CreateAccount/CreateAccount.css'


export default class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {message: ''}
    }

    cleanErrorMessage = () =>{
        this.setState({message: ''})
    }

    handleErrorMessage = (message) =>  {
        switch(message.data){
            case 'Email or Password Invalid':
                this.setState({message: 'Email/Senha está inválido'})
                break;
            default:
                this.setState({message: 'Algum erro aconteceu :/, tente novamente'})
                break;
        }
    }
    
    handleSubmit = async (data) => {
        this.cleanErrorMessage()
        api.post('/auth/signin',
        {email: data.email, password: data.password})
        .then((response)=>{
            const result = response.data.data
            localStorage.setItem('userToken', result.token)
        })
        .catch((error)=>{
            this.handleErrorMessage(error.response.data)
        })
    }

    render(){

        const schema = Yup.object().shape({
            email: Yup.string().email().required('Seu email é obrigatório'),
            password: Yup.string().required('Uma senha é necessária')
        });
        


        return (
            <div className="containerCreateAccount">
                <img className="logoCreateAccount" src="logo.png" alt=""/>
                <p>{this.state.message}</p>
                <Form className="formCreateAccount" schema={schema} onSubmit={this.handleSubmit}>
                    <Input className="formInput" name="email" type="email" placeholder="Seu email"/>
                    <Input className="formInput" name="password" type="password" placeholder="Senha"/>
                    
                    <button className="submitBtn" type="submit">Entrar</button>
                </Form>
            </div>
            
        )
    }

}