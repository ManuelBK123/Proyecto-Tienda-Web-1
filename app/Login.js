import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "./utils/APIInvoker";

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
                this.label.innerHTML = data.message
            },
            error => {
                this.label.innerHTML = error.message
            })
    }

    render() {
        return(
            <div>
                <form >
                    <div>
                        <label htmlFor="username" >Nombre de usuario</label>
                        <br/>
                        <input type="text"
                               name="username"
                               id="username"
                               placeholder="Manuel"
                               aria-describedby="usernameHelp"
                               value={this.state.username}
                               onChange={this.changeField.bind(this)}
                               onBlur={this.usernameValidate.bind(this)}/>
                        <div id="usernameMessage"
                             ref={ self => this.label = self}
                             className="form-text text-black">
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <br/>
                        <input type="password"
                               name="password"
                               id="password"
                               placeholder="1234"
                               aria-describedby="passwordHelp"
                               value={this.state.password}
                               onChange={this.changeField.bind(this)}/>
                        <div id="passwordHelp"
                             className="form-text text-danger">
                        </div>
                    </div>
                    <div>
                        <button type="button" onClick={this.buttonOnClick.bind(this)}>Iniciar sesión</button>
                    </div>
                </form>
            </div>

            /*
            <section className="mt-5 mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-7 box-login text-center">
                            <img id="img-login" src="./public/images/img.png" alt="Logo"/>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-10 col-lg-7 box-login">
                            <form className="p-4">
                                <div className="mb-3">
                                    <label htmlFor="user" className="form-label">nombre de usuario</label>
                                    <input type="text" className="form-control" id="user" name="username"
                                           value={this.state.username} aria-describedby="emailHelp"
                                           onChange={this.changeField.bind(this)} placeholder="alilopez"
                                           onBlur={this.validateUsername.bind(this)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">contraseña</label>
                                    <input type="password" className="form-control" id="password"
                                           name="password" placeholder="contraseña"
                                           value={this.state.password}
                                           onChange={this.changeField.bind(this)}/>
                                </div>

                                <button onClick={this.buttonOnClick.bind(this)} className="btn btn-primary">Iniciar sesion</button>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
            */
        )
    }

    buttonOnClick(e){
        //Signup
        let user = {
            userName: this.state.username,
            password: this.state.password
        }
        APIInvoker.invokePOST('/users/login',user, data => {
            alert(JSON.stringify(data))
        }, error => {
            alert(JSON.stringify(error))
        })
        e.preventDefault();
    }
}

export default Login;