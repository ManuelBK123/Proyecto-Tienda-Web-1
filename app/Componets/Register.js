import React from 'react'
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";

class Register extends React.Component{
    constructor() {
        super();
        this.state = {
            idRol: '',
            nombre: '',
            apellidoPaterno: '',
            userName:'',
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
            <div class="center">
                <div className="card">
                    <div className="card-body">
                        <div className="center-with-page">
                            <h4> Registrar </h4>
                            <form>
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="text"
                                           name="nombre"
                                           id="nombre"
                                           placeholder="Manuel"
                                           aria-describedby="nombreHelp"
                                           value={this.state.username}
                                           onChange={this.changeField.bind(this)}/>
                                    <label htmlFor="Nombre">Nombre</label>
                                </div>
                                <br/>
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="text"
                                           name="apellidoPaterno"
                                           id="apellidoPaterno"
                                           placeholder="Ballinas"
                                           aria-describedby="apellidoPaternoHelp"
                                           value={this.state.username}
                                           onChange={this.changeField.bind(this)}/>
                                    <label htmlFor="apellidoPaterno">Apellido Paterno</label>
                                </div>
                                <br/>
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="text"
                                           name="userName"
                                           id="userName"
                                           placeholder="manu"
                                           aria-describedby="usernameHelp"
                                           value={this.state.username}
                                           onChange={this.changeField.bind(this)}
                                           onBlur={this.usernameValidate.bind(this)}/>
                                    <label htmlFor="username">Nombre de usuario</label>
                                </div>
                                <div id="usernameMessage"
                                     ref={self => this.label = self}
                                     className="form-text text-danger">
                                </div>
                                <br/>
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
                                </div>
                                <div className="form-text text-danger"
                                     id="passwordMessage"
                                     ref={self => this.pass = self}>
                                </div>
                                <br/>
                                <div>
                                    <button className="btn btn-outline-success"
                                            type="button"
                                            onClick={this.buttonOnClick.bind(this)}>Iniciar sesión
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    buttonOnClick(e){
        //Login
        let user = {
            idRol: 2,
            nombre: this.state.nombre,
            apellidoPaterno: this.state.apellidoPaterno,
            userName: this.state.userName,
            password: this.state.password
        }
        APIInvoker.invokePOST('/users/signup',user, data => {
            alert(JSON.stringify(data))
        }, error => {
            alert(JSON.stringify(error))
        })
        e.preventDefault();
    }
}
export default Register;