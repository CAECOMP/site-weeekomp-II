import React from 'react'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api'
import '../CreateAccount/CreateAccount.css'


export default class Login extends React.Component{

    render(){

        const schema = Yup.object().shape({
            email: Yup.string().email().required('Seu email é obrigatório'),
            password: Yup.string().required('Uma senha é necessária')
        });
        
        async function handleSubmit(data) {
            api.post('/auth/signin',
            {email: data.email, password: data.password})
            .then((response)=>{
                const result = response.data.data
                console.log(result)
                localStorage.setItem('userToken', result.token)
            })
            .catch((error)=>{
                console.log(error.response.data)
            })
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