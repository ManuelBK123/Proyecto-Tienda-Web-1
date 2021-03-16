import React from 'react'
import APIInvoker from "../../utils/APIInvoker";
import update from "immutability-helper";


class deleteProveedor extends React.Component {
    constructor() {
        super();
        this.state = {
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
        return(
            <div>
                <div className="centerRegister">
                    <div className="card">
                        <div className="card-body">
                            <div className="center-with-page">
                                <h4> Eliminar Proveedor </h4>
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
                                <div className="d-grid gap-2">
                                    <button class="btn btn-outline-danger"
                                            type="button">Eliminar Proveedor
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
export default deleteProveedor;