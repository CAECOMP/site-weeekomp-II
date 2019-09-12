import React from 'react'
import { Form, Input } from '@rocketseat/unform';
import './CreateAccount.css'


export default class CreateAccount extends React.Component{


    render(){

        
        function handleSubmit(data) {
            console.log(data);
        }

        return (

            <div className="containerCreateAccount">
                <img className="logoCreateAccount" src="logo.png" alt=""/>
                <Form className="formCreateAccount" onSubmit={handleSubmit}>
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