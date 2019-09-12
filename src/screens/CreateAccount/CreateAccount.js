import React from 'react'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api'
import AuthService from '../../services/authService'
import './CreateAccount.css'


export default class CreateAccount extends React.Component{


    render(){

        const schema = Yup.object().shape({
            name_person: Yup.string().required('Seu nome é obrigatório'),
            email: Yup.string().email().required('Seu email é obrigatório'),
            password: Yup.string().required('Uma senha é necessária'),
            confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
        });
        
        async function handleSubmit(data) {
            localStorage.setItem('userToken', data.email)
            const authService = new AuthService()
            const response = await authService.registerUser(data.name, data.email, data.password)

            console.log(response)
        }

        return (
            <div className="containerCreateAccount">
                <img className="logoCreateAccount" src="logo.png" alt=""/>
                <Form className="formCreateAccount" schema={schema} onSubmit={handleSubmit}>
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