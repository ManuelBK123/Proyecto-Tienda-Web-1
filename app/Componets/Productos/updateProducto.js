import React from 'react'
import APIInvoker from "../../utils/APIInvoker";
import update from "immutability-helper";

class updateProducto extends React.Component {
    constructor() {
        super();
        this.state = {
            idProveedor : '0',
            nombre : '',
            descripcion : '',
            precio : '',
            existencias : '',
            proveedorList : [],
            productosList : []
        }
        this.proveedorList = []
        this.productosList = []
        APIInvoker.invokeGET('/productos/getAllProductos',data => {  //Entrará acá cuando status = true
            this.setState({
                productosList : data.data
            })
            console.log(this.state.productosList)
        }, error => { //Entrará acá cuando status = false
        })
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
                                <h4> Actualizar Producto </h4>
                                <div className="form-floating">
                                    <select className="form-select"
                                            id="idProveedor"
                                            name="idProveedor"
                                            value={this.state.idProducto}
                                            aria-label="Floating label select example"
                                            onChange={this.changeField.bind(this)}>
                                        <option value='0'>Elige Producto</option>
                                        <For each="item" index="idx" of={ this.state.productosList}>
                                            <option key={idx} value={item.idProducto}>{item.nombre}</option>
                                        </For>
                                    </select>
                                    <label htmlFor="floatingSelectGrid">Producto</label>
                                </div>
                                <br/>
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
        )
    }
}
export default updateProducto;