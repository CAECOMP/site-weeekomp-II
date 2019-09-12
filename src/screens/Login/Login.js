import React from 'react'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import AuthService from '../../services/authService'
import '../CreateAccount/CreateAccount.css'


export default class Login extends React.Component{


    componentDidMount(){
        const userToken = localStorage.getItem('userToken')
        console.log(userToken)
    }

    render(){

        const schema = Yup.object().shape({
            email: Yup.string().email().required('Seu email é obrigatório'),
            password: Yup.string().required('Uma senha é necessária')
        });
        
        async function handleSubmit(data) {
            const authService = new AuthService()
            const response = await authService.login(data.email, data.password)

            console.log(response)
        }

        return (
            <div className="containerCreateAccount">
                <img className="logoCreateAccount" src="logo.png" alt=""/>
                <Form className="formCreateAccount" schema={schema} onSubmit={handleSubmit}>
                    <Input className="formInput" name="email" type="email" placeholder="Seu email"/>
                    <Input className="formInput" name="password" type="password" placeholder="Senha"/>
                    
                    <button className="submitBtn" type="submit">Entrar</button>
                </Form>
            </div>
            
        )
    }

}