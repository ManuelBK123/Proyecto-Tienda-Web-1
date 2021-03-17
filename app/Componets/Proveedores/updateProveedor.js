import React from 'react'
import APIInvoker from "../../utils/APIInvoker";
import update from "immutability-helper";

class updateProveedor extends  React.Component {
    constructor() {
        super();
        this.state = {
            nombre : '',
            ciudad : '',
            pais : '',
            codigoPostal : '',
            telefono : '',
            proveedorList : []
        }
        this.proveedorList = []
        APIInvoker.invokeGET('/proveedores/getAllProveedores',data => {  //Entrará acá cuando status = true
            this.setState({
                proveedorList : data.data
            })
            console.log(this.state.proveedorList)
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
    render() {
        return (
            <div>
                <div className="centerRegister">
                    <div className="card">
                        <div className="card-body">
                            <div className="center-with-page">
                                <h4> Actualizar Proveedor </h4>
                                <div className="form-floating">
                                    <select className="form-select"
                                            id="idProveedor"
                                            name="idProveedor"
                                            value={this.state.idProveedor}
                                            aria-label="Floating label select example"
                                            onChange={this.changeField.bind(this)}>
                                        <option value='0'>Elige Proveedor</option>
                                        <For each="item" index="idx" of={ this.state.proveedorList}>
                                            <option key={idx} value={item.idProveedor}>{item.nombre}</option>
                                        </For>
                                    </select>
                                    <label htmlFor="floatingSelectGrid">Proveedor</label>
                                </div>
                                <br/>
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
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-outline-success"
                                                type="button">Guardar cambios
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default updateProveedor;