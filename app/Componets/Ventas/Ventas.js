import React from 'react'
import APIInvoker from "../../utils/APIInvoker";
class Ventas extends React.Component {
    constructor() {
        super();
        this.state = {
            ventasList: []
        }
        this.ventasList = []
        APIInvoker.invokeGET('/ventas/getAllVentas',data => {
            this.setState({
                 ventasList : data.data
            })
            console.log(this.state.ventasList)
        }, error => {
            alert(error.message)
        })

    }
    actualizarTabla(e){
        APIInvoker.invokeGET('/ventas/getAllVentas',data => {
            this.setState({
                ventasList : data.data
            })
            console.log(this.state.ventasList)
        }, error => {
            alert(error.message)
        })
    }
    render() {
        return(
            <div>
                <div className="cartaCentroGrande">
                    <h1> Ventas realizadas.</h1>
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
                                        <th scope="col">ID Producto</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Fecha</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <For each="item" index="idx" of={ this.state.ventasList}>
                                            <tr key={idx}>
                                                <th scope="row">{item.idventas}</th>
                                                <td>{item.idProducto}</td>
                                                <td>{item.cantidad}</td>
                                                <td>{item.total}</td>
                                                <td>{item.fecha}</td>
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
export default Ventas;