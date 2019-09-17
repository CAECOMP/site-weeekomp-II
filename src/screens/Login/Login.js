import React from 'react'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api'
import '../CreateAccount/CreateAccount.css'


export default class Login extends React.Component {
  
    constructor(props){
        super(props)
        this.state = {message: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        const userID = localStorage.getItem('userID')
        const authToken = localStorage.getItem('userToken')
        if (userID && authToken) window.open('/perfil', '_self')
    }
  
    cleanErrorMessage = () => {
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
    
    parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }
    
    handleSubmit = async (data) => {
        this.cleanErrorMessage()
        api.post('/auth/signin', {email: data.email, password: data.password})
          .then((response)=>{
              const result = response.data.data
              const payload = this.parseJwt(result.token)
              localStorage.setItem('userToken', result.token)
              localStorage.setItem('userID', String(payload.user_id))
              window.open('/perfil', '_self')
          })
          .catch((error)=>{
              if (error.response.data) {
                this.handleErrorMessage(error.response.data)
              }
          })
    }

    render() {
        const schema = Yup.object().shape({
            email: Yup.string().email().required('Seu email é obrigatório'),
            password: Yup.string().required('Uma senha é necessária')
        })
        
        return (
            <div className="containerCreateAccount" style={{backgroundColor: '#461000'}}>
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