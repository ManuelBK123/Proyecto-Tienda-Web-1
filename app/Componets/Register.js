import React from 'react'
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";

class Register extends React.Component{
    constructor() {
        super();
        this.state = {
            idRol: '1',
            nombre: '',
            apellidoPaterno: '',
            userName:'',
            password:'',
            rolList: []
        }
        this.status = false
        this.usernameOk = false
        this.rolList = []

        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/roles/getAllRoles',data => {  //Entrará acá cuando status = true
            this.setState({
                rolList : data.data
            })
            console.log(this.state.rolList)
        }, error => { //Entrará acá cuando status = false
        })
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    usernameValidate(e){

        let userName = this.state.userName
        if (userName) {
            APIInvoker.invokeGET(`/users/usernameValidate/${userName}`,data => {
                this.username.innerHTML = '* El nombre de usuario no está disponible'
                this.usernameOk = false
            }, error => {
                this.username.innerHTML = ''
                this.usernameOk =  true
            })
        } else
            this.usernameOk = false
    }

    validarCampos(){
        let estado = true;

        if (this.state.idRol.length === 0) {
            this.idrRol.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.idrRol.innerHTML = ''

        if (this.state.nombre.length === 0) {
            this.nombre.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.nombre.innerHTML = ''

        if (this.state.apellidoPaterno.length === 0) {
            this.apellidoPaterno.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.apellidoPaterno.innerHTML = ''

        if (this.state.userName.length === 0) {
            this.username.innerHTML = '* Campo obligatorio'
            estado = false;
        }

        if (this.state.password.length === 0) {
            this.password.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.password.innerHTML = ''

        if (estado === false)
            this.status = false
        else
            this.status = true

    }

    render() {
        return(
            <div className="centerRegister">
                <div className="card">
                    <div className="card-body">
                        <div className="center-with-page">
                            <h4> Registrar </h4>
                            <form>
                                <div>
                                    <select className="form-select form-select-lg mb-3"
                                            name="idRol"
                                            id="idRol"
                                            value={this.state.idRol}
                                            onChange={this.changeField.bind(this)}>
                                        <option value='0'>Elige Rol</option>
                                        <For each="item" index="idx" of={ this.state.rolList }>
                                            <option key={idx} value={item.idRol}>{item.rol}</option>
                                        </For>
                                    </select>
                                </div>
                                <label ref={self=> this.idrRol = self} className="form-text text-danger"></label>
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="text"
                                           name="nombre"
                                           id="nombre"
                                           placeholder="Manuel"
                                           value={this.state.nombre}
                                           onChange={this.changeField.bind(this)}/>
                                    <label htmlFor="Nombre">Nombre</label>
                                </div>
                                <label ref={self=> this.nombre = self} className="form-text text-danger"></label>
                                <br/>
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="text"
                                           name="apellidoPaterno"
                                           id="apellidoPaterno"
                                           placeholder="Ballinas"
                                           value={this.state.apellidoPaterno}
                                           onChange={this.changeField.bind(this)}/>
                                    <label htmlFor="apellidoPaterno">Apellido Paterno</label>
                                </div>
                                <label ref={self=> this.apellidoPaterno = self} className="form-text text-danger"></label>
                                <br/>
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="text"
                                           name="userName"
                                           id="userName"
                                           placeholder="manu"
                                           value={this.state.username}
                                           onChange={this.changeField.bind(this)}
                                           onBlur={this.usernameValidate.bind(this)}/>
                                    <label htmlFor="username">Nombre de usuario</label>
                                </div>
                                <label ref={self=> this.username = self} className="form-text text-danger"></label>
                                <br/>
                                <div className="form-floating">
                                    <input className="form-control"
                                           type="password"
                                           name="password"
                                           id="password"
                                           placeholder="1234"
                                           value={this.state.password}
                                           onChange={this.changeField.bind(this)}/>
                                    <label htmlFor="password">Contraseña</label>
                                </div>
                                <label ref={self=> this.password = self} className="form-text text-danger"></label>
                                <br/>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-outline-success"
                                            type="button"
                                            onClick={this.crearCuenta.bind(this)}>Registrar
                                    </button>
                                </div>
                                <div ref={self => this.messageError = self}></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    crearCuenta(e){
        this.messageError.innerHTML = ''
        this.validarCampos()

        if (this.status && this.usernameOk) {
            //register
            let user = {
                idRol: 2,
                nombre: this.state.nombre,
                apellidoPaterno: this.state.apellidoPaterno,
                userName: this.state.userName,
                password: this.state.password
            }
            APIInvoker.invokePOST('/users/signup', user, data => {
                alert(data.message)
                this.usernameOk = false
                this.props.history.push('/')
            }, error => {
                alert(error.message + error.error)
            })
        }
        else {
            this.messageError.innerHTML = 'Los campos marcados con * son obligatorios'
        }
        e.preventDefault();
    }
}
export default Register;