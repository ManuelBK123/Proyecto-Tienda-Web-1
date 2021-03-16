import React from 'react'
import update from "immutability-helper";
import APIInvoker from "../../utils/APIInvoker";

class AddProveedor extends React.Component {
    constructor() {
        super();
        this.state = {
            nombre : '',
            ciudad : '',
            pais : '',
            codigoPostal : '',
            telefono : ''
        }
        this.status = false
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    validarCampos(){
        let estado = true;
        if (this.state.nombre.length === 0) {
            this.nombre.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.nombre.innerHTML = ''

        if (this.state.ciudad.length === 0) {
            this.ciudad.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.ciudad.innerHTML = ''

        if (this.state.pais.length === 0) {
            this.pais.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.pais.innerHTML = ''

        if (this.state.codigoPostal.length === 0) {
            this.codigoPostal.innerHTML = '* Campo obligatorio'
            estado = false;
        }

        if (this.state.telefono.length === 0) {
            this.telefono.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.telefono.innerHTML = ''

        if (estado === false)
            this.status = false
        else
            this.status = true

    }
    render() {
        return(
            <div className="center-Registrar">
                <div className="card">
                    <div className="card-body">
                        <div className="center-with-page">
                            <h4> Registrar Proveedor </h4>
                            <br/>
                            <div className="row g-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text"
                                               className="form-control"
                                               id="nombre"
                                               name="nombre"
                                               placeholder="Manuel"
                                               value={this.state.nombre}
                                               onChange={this.changeField.bind(this)}/>
                                        <label htmlFor="floatingInputGrid">Nombre de la Empresa</label>
                                    </div>
                                    <label ref={self=> this.nombre = self} className="form-text text-danger"></label>
                                </div>
                            </div>
                            <br/>
                            <div className="row g-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text"
                                               className="form-control"
                                               id="ciudad"
                                               name="ciudad"
                                               placeholder="Manuel"
                                               value={this.state.ciudad}
                                               onChange={this.changeField.bind(this)}/>
                                        <label htmlFor="floatingInputGrid">Ciudad</label>
                                    </div>
                                    <label ref={self=> this.ciudad = self} className="form-text text-danger"></label>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text"
                                               className="form-control"
                                               id="pais"
                                               name="pais"
                                               placeholder="Manuel"
                                               value={this.state.pais}
                                               onChange={this.changeField.bind(this)}/>
                                        <label htmlFor="floatingInputGrid">Pais</label>
                                    </div>
                                    <label ref={self=> this.pais = self} className="form-text text-danger"></label>
                                </div>
                            </div>
                            <br/>
                            <div className="row g-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text"
                                               className="form-control"
                                               id="codigoPostal"
                                               name="codigoPostal"
                                               placeholder="Manuel"
                                               value={this.state.codigoPostal}
                                               onChange={this.changeField.bind(this)}/>
                                        <label htmlFor="floatingInputGrid">Codigo Postal</label>
                                    </div>
                                    <label ref={self=> this.codigoPostal = self} className="form-text text-danger"></label>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text"
                                               className="form-control"
                                               id="telefono"
                                               name="telefono"
                                               placeholder="967-154-85-96"
                                               value={this.state.telefono}
                                               onChange={this.changeField.bind(this)}/>
                                        <label htmlFor="floatingInputGrid">Telefono</label>
                                    </div>
                                    <label ref={self=> this.telefono = self} className="form-text text-danger"></label>
                                </div>
                            </div>
                            <br/>
                            <div className="d-grid gap-2">
                                <button className="btn btn-outline-success"
                                        type="button"
                                        onClick={this.agregarProveedor.bind(this)}>Registrar Proveedor
                                </button>
                            </div>
                            <div ref={self => this.messageError = self}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    agregarProveedor(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        if(this.status){
            let proveedor = {
                nombre : this.state.nombre,
                ciudad : this.state.ciudad,
                pais : this.state.pais,
                codigoPostal : this.state.codigoPostal,
                telefono : this.state.telefono
            }
            APIInvoker.invokePOST('/proveedores/addProveedor',proveedor, data =>{
                alert(data.message)
                this.state.nombre = ''
                this.state.ciudad = ''
                this.state.pais= ''
                this.state.codigoPostal = ''
                this.state.telefono = ''
            },error =>{
                alert(error.message + error.error)
            })
            console.log(proveedor)
        }

    }
}

export default AddProveedor;