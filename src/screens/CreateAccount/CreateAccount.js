import React from 'react'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api'
import './CreateAccount.css'


export default class CreateAccount extends React.Component{

    state = {errorMessage: ''}

    // function handleErrorMessage(message) {
    //     switch(message){
    //         case 'User already exists':
    //             this.setState({errorMessage: 'Uma conta já existe para esse email'})
    //             break;
    //         default:
    //             this.setState({errorMessage: ''})
    //             break;
    //     }
    //     return
    // }

    render(){

        const schema = Yup.object().shape({
            name_person: Yup.string().required('Seu nome é obrigatório'),
            email: Yup.string().email().required('Seu email é obrigatório'),
            password: Yup.string().required('Uma senha é necessária'),
            confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
        });
        
        function handleSubmit(data) {
            api.post('/auth/signup', 
            {name: data.name_person, email: data.email, password: data.password})
            .then((response)=>{
                //handleErrorMessage('')
                const result = response.data.data
                console.log(result)
                localStorage.setItem('userToken', result.token)
                localStorage.setItem('userID', result.userinfo.user_id)
                localStorage.setItem('userName', result.userinfo.name)
                
            })
            .catch((error)=>{
                console.log(error.response.data.data)
            })
        }

        return (
            <div className="containerCreateAccount">
                <img className="logoCreateAccount" src="logo.png" alt=""/>
                //<p>{this.state.errorMessage}</p>
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