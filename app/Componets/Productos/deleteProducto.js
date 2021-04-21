import React from 'react'
import APIInvoker from "../../utils/APIInvoker";
import update from "immutability-helper";

class deleteProducto extends React.Component {
    constructor() {
        super();
        this.state = {
            idProducto : '',
            productosList : []
        }
        this.productosList = []
        APIInvoker.invokeGET('/productos/getAllProductos',data => {  //Entrará acá cuando status = true
            this.setState({
                productosList : data.data
            })
            console.log(this.state.productosList)
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
                                <h4> Eliminar Producto </h4>
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
                                <br/>
                                <br/>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-outline-danger"
                                            type="button"
                                            onClick={this.eliminarProducto.bind(this)}>Eliminar Producto
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
    eliminarProducto(e){
        let idProducto = this.state.idProducto
        APIInvoker.invokeDELETE(`/productos/deleteProducto/${idProducto}`,
            data => {
                alert(data.message)
            },
            error => {
                alert(error.message + error.error)
            })
        APIInvoker.invokeGET('/productos/getAllProductos',data => {  //Entrará acá cuando status = true
            this.setState({
                productosList : data.data
            })
            console.log(this.state.productosList)
        }, error => { //Entrará acá cuando status = false
        })
    }
}
export default deleteProducto;