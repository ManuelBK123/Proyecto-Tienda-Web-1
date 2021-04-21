import React from 'react'
import update from "immutability-helper";
import APIInvoker from "../../utils/APIInvoker";

class AddProducto extends React.Component {
    constructor() {
        super();
        this.state = {
            idProveedor : '0',
            nombre : '',
            descripcion : '',
            precio : '',
            existencias : '',
            proveedorList : []
        }
        this.proveedorList = []
        APIInvoker.invokeGET('/proveedores/getAllProveedores',data => {
            this.setState({
                proveedorList : data.data
            })
        }, error => {
            alert(error.message)
        })
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
        if (this.state.idProveedor.length === 0) {
            this.idProveedor.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.nombre.innerHTML = ''

        if (this.state.nombre.length === 0) {
            this.nombre.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.nombre.innerHTML = ''

        if (this.state.descripcion.length === 0) {
            this.descripcion.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.descripcion.innerHTML = ''

        if (this.state.precio.length === 0) {
            this.precio.innerHTML = '* Campo obligatorio'
            estado = false;
        }else
            this.precio.innerHTML = ''

        if (this.state.existencias.length === 0) {
            this.existencias.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.existencias.innerHTML = ''

        if (estado === false)
            this.status = false
        else
            this.status = true

    }
    render() {
        return (
            <div className="center-Registrar">
                <div className="card">
                    <div className="card-body">
                        <div className="center-with-page">
                            <h4> Registrar Producto </h4>
                            <br/>
                            <div className="row g-2">
                                <div className="col-md">
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
                                    <label ref={self=> this.idProveedor = self} className="form-text text-danger"></label>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text"
                                               className="form-control"
                                               id="nombre"
                                               name="nombre"
                                               placeholder="Doraditas"
                                               value={this.state.nombre}
                                               onChange={this.changeField.bind(this)}/>
                                        <label htmlFor="floatingInputGrid">Nombre del producto</label>
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
                                               id="descripcion"
                                               name="descripcion"
                                               placeholder="Manuel" value={this.state.descripcion}
                                               onChange={this.changeField.bind(this)}/>
                                        <label htmlFor="floatingInputGrid">Descripción</label>
                                    </div>
                                    <label ref={self=> this.descripcion = self} className="form-text text-danger"></label>
                                </div>
                            </div>
                            <br/>
                            <div className="row g-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="number"
                                               className="form-control"
                                               id="precio"
                                               name="precio"
                                               placeholder="Manuel"
                                               value={this.state.precio}
                                               onChange={this.changeField.bind(this)}/>
                                        <label htmlFor="floatingInputGrid">Precio</label>
                                    </div>
                                    <label ref={self=> this.precio = self} className="form-text text-danger"></label>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="number"
                                               className="form-control"
                                               id="existencias"
                                               name="existencias"
                                               value={this.state.existencias}
                                               onChange={this.changeField.bind(this)}/>
                                        <label htmlFor="floatingInputGrid">Existencias</label>
                                    </div>
                                    <label ref={self=> this.existencias = self} className="form-text text-danger"></label>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="d-grid gap-2">
                                <button className="btn btn-outline-success"
                                        type="button"
                                        onClick={this.agregarProducto.bind(this)}>Registrar Producto
                                </button>
                            </div>
                            <div ref={self => this.messageError = self}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    agregarProducto(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        if(this.status){
            let producto = {
                idProveedor : this.state.idProveedor,
                nombre : this.state.nombre,
                descripcion : this.state.descripcion,
                precio : this.state.precio,
                existencias : this.state.existencias
            }
            APIInvoker.invokePOST('/productos/addProducto',producto, data =>{
                alert(data.message)
                this.setState(update(this.state, {
                    idProveedor : '0'
                }))
                this.setState(update(this.state, {
                    nombre : ''
                }))
                this.setState(update(this.state, {
                    descripcion : ''
                }))
                this.setState(update(this.state, {
                    precio : ''
                }))
                this.setState(update(this.state, {
                    existencias : ''
                }))
            },error =>{
                alert(error.message + error.error)
            })
        }
    }
}
export default AddProducto;