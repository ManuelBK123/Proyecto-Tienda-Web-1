import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";
import Logo from "../assets/images/logo.jpeg"
import {Link} from "react-router-dom";

class Login extends React.Component{

    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        }
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    usernameValidate(e){
        let username = this.state.username
        APIInvoker.invokeGET(`/users/usernameValidate/${username}`,
            data => {
                this.label.innerHTML = ""
            },
            error => {
                this.label.innerHTML = "El usuario no existe."
            })
    }

    render() {
        return(
            <div>
                <br/>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link to='/Register'>
                        <button className="btn btn-outline-dark">Registrar</button>
                    </Link>
                </div>

                <div className="centerLogin">
                    <div className="card">
                        <div className="card-body">
                            <br/>
                            <img src={Logo}
                                 width="150px" height="150px"/>
                             <br/>
                             <br/>
                            <form>
                                <h4>Iniciar sesión</h4>
                                <div className="form-floating mb-3">
                                    <input className="form-control"
                                           type="text"
                                           name="username"
                                           id="username"
                                           placeholder="Manuel"
                                           aria-describedby="usernameHelp"
                                           value={this.state.username}
                                           onChange={this.changeField.bind(this)}
                                           onBlur={this.usernameValidate.bind(this)}/>
                                    <label htmlFor="username">Nombre de usuario</label>
                                    <div id="usernameMessage"
                                         ref={self => this.label = self}
                                         className="form-text text-black">
                                    </div>
                                </div>
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="password"
                                           name="password"
                                           id="password"
                                           placeholder="1234"
                                           aria-describedby="passwordHelp"
                                           value={this.state.password}
                                           onChange={this.changeField.bind(this)}/>
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <div id="passwordHelp"
                                         className="form-text text-danger">
                                    </div>
                                </div>
                                <br/>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-outline-success"
                                            type="button"
                                            onClick={this.iniciarSesion.bind(this)}>Iniciar sesión
                                    </button>
                                </div>
                            </form>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }

    iniciarSesion(e){
        //Signup
        let user = {
            userName: this.state.username,
            password: this.state.password
        }
        APIInvoker.invokePOST('/users/login',user, data => {
            alert(data.message)
            window.localStorage.setItem('token', data.token)
        }, error => {
            alert(error.message)
            this.pass.innerHTML = error.message
        })
        e.preventDefault();
    }
}

export default Login;