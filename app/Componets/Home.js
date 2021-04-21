import React from "react";
import {Link} from "react-router-dom";
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            idProducto : '',
            cantidad : '',
            productosList : [],
            listSell : []
        }
        this.productosList = []
        APIInvoker.invokeGET('/productos/getAllProductos',data => {
            this.setState({
                productosList : data.data
            })
            console.log('lista de productos')
            console.log(this.state.productosList)
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
    render() {
        return(
            <div className="cartaCentroGrande">
                <h2> Realizar venta</h2>
                <br/>
                <div className="card">
                    <div className="card-body">
                        <div className="card">
                            <div className="card-body">
                                <div className="row g-2">
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <select className="form-select"
                                                    id="idProducto"
                                                    name="idProducto"
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
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="number"
                                                   className="form-control"
                                                   id="cantidad"
                                                   name="cantidad"
                                                   value={this.state.cantidad}
                                                   onChange={this.changeField.bind(this)}/>
                                            <label htmlFor="floatingInputGrid">Cantidad</label>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                    <div className="d-grid gap-2 col-6 mx-auto">
                                        <button type="button" className="btn btn-outline-info">Ingresar</button>
                                    </div>
                                    <br/>
                                <div>
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">ID Producto</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>$88</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-grid gap-2 col-6 mx-auto justify-content-md-end">
                                <label className="form-text text-dark fs-3">TOTAL: $</label>
                            </div>
                            <br/>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="button" className="btn btn-outline-success btn-lg">PAGAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;