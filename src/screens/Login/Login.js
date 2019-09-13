import React from 'react'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api'
import '../CreateAccount/CreateAccount.css'


export default class Login extends React.Component{

    constructor(props) {
        super(props)
        const userID = localStorage.getItem('userID')
        const authToken = localStorage.getItem('userToken')
        if (userID && authToken) window.open('/perfil', '_self')
    }

    render(){

        const schema = Yup.object().shape({
            email: Yup.string().email().required('Seu email é obrigatório'),
            password: Yup.string().required('Uma senha é necessária')
        });

        function parseJwt (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        
            return JSON.parse(jsonPayload);
        }
        
        function handleSubmit(data) {
            api.post('/auth/signin',
            {email: data.email, password: data.password})
            .then((response)=>{
                const result = response.data.data
                const payload = parseJwt(result.token)
                localStorage.setItem('userToken', result.token)
                localStorage.setItem('userID', String(payload.user_id))
                window.open('/perfil', '_self')
            })
            .catch((error)=>{
                console.log(error.response.data)
            })
        }

        return (
            <div className="containerCreateAccount" style={{backgroundColor: '#461000'}}>
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