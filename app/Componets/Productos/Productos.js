import React from 'react'
import APIInvoker from "../../utils/APIInvoker";

class Productos extends React.Component {
    constructor() {
        super();
        this.state ={
            productList: []
        }
        this.productList = []
         APIInvoker.invokeGET('/productos/getAllProductos',data => {
             this.setState({
                 productList : data.data
             })
             //console.log(this.state.productList)
         }, error => {
             alert(error.message)
         })
    }

    actualizarTabla(e){
        APIInvoker.invokeGET('/productos/getAllProductos',data => {
            this.setState({
                productList : data.data
            })
        }, error => {
            alert(error.message)
        })
    }
    render() {
        return(
            <div>
                <div className="cartaCentroGrande">
                    <h1> Lista de Productos.</h1>
                    <div className="card">
                        <div className="card-body">
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button"
                                        className="btn btn-outline-primary"
                                        onClick={this.actualizarTabla.bind(this)}>Actualizar</button>
                            </div>
                            <div>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">ID Proveedor</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Existencia</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <For each="item" index="idx" of={ this.state.productList}>
                                            <tr key={idx}>
                                                <th scope="row">{item.idProducto}</th>
                                                <td>{item.idProveedor}</td>
                                                <td>{item.nombre}</td>
                                                <td>{item.descripcion}</td>
                                                <td> $ {item.precio}</td>
                                                <td>{item.existencias}</td>
                                            </tr>
                                        </For>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Productos;