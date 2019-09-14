import React from 'react'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api'
import './CreateAccount.css'


export default class CreateAccount extends React.Component{

    constructor(props){
        super(props)
        this.state = {message: ''}
    }

    cleanErrorMessage = () =>{
        this.setState({message: ''})
    }

    handleErrorMessage = (message) =>  {
        switch(message.data){
            case 'User already exists':
                this.setState({message: 'Email/Senha está inválido'})
                break;
            default:
                this.setState({message: 'Algum erro aconteceu :/, tente novamente'})
                break;
        }
    }

    handleSubmit = (data) =>{
        this.cleanErrorMessage()
        api.post('/auth/signup', 
        {name: data.name_person, email: data.email, password: data.password})
        .then((response)=>{
            const result = response.data.data
            localStorage.setItem('userToken', result.token)
            localStorage.setItem('userID', result.userinfo.user_id)
            localStorage.setItem('userName', result.userinfo.name)
            
        })
        .catch((error)=>{
            this.handleErrorMessage(error.response.data)
        })
    }

    render(){

        const schema = Yup.object().shape({
            name_person: Yup.string().required('Seu nome é obrigatório'),
            email: Yup.string().email().required('Seu email é obrigatório'),
            password: Yup.string().required('Uma senha é necessária'),
            confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
        });

        return (
            <div className="containerCreateAccount">
                <img className="logoCreateAccount" src="logo.png" alt=""/>
                <p>{this.state.message}</p>
                <Form className="formCreateAccount" schema={schema} onSubmit={this.handleSubmit}>
                    <Input className="formInput" name="name_person" type="text" placeholder="Nome completo"/>
                    <Input className="formInput" name="email" type="email" placeholder="Seu email"/>
                    <Input className="formInput" name="password" type="password" placeholder="Senha"/>
                    <Input className="formInput" name="confirm_password" type="password" placeholder="Confirme senha"/>

                    <button className="submitBtn" type="submit">Cadastrar</button>
                </Form>
            </div>
            
        )
    }

}