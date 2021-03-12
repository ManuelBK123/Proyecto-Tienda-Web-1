import React from 'react'
import APIInvoker from "../../utils/APIInvoker";
class Proveedores extends React.Component {
    constructor() {
        super();
        this.state = {
            proveedoresList: []

        }
        this.proveedoresList = []
        //Extraer el catálogo de roles del backend
         APIInvoker.invokeGET('/proveedores/getAllProveedores',data => {
             //Entrará acá cuando status = true
             this.setState({
                 proveedoresList : data.data
             })
             console.log(this.state.proveedoresList)
         }, error => {
             //Entrará acá cuando status = false
             alert(error.message)
         })

    }
    actualizarTabla(e){
        APIInvoker.invokeGET('/proveedores/getAllProveedores',data => {
            //Entrará acá cuando status = true
            this.setState({
                proveedoresList : data.data
            })
            console.log(this.state.proveedoresList)
        }, error => {
            //Entrará acá cuando status = false
            alert(error.message)
        })
    }
    render() {
        return(
            <div>
                <div className="cartaCentroGrande">
                    <h1> Lista de Proveedores..</h1>
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
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Ciudad</th>
                                        <th scope="col">Pais</th>
                                        <th scope="col">Codigo Postal</th>
                                        <th scope="col">Telefono</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <For each="item" index="idx" of={ this.state.proveedoresList}>
                                        <tr key={idx}>
                                            <th scope="row">{item.idProveedor}</th>
                                            <td>{item.nombre}</td>
                                            <td>{item.ciudad}</td>
                                            <td>{item.pais}</td>
                                            <td>{item.codigoPostal}</td>
                                            <td>{item.telefono}</td>
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
export default Proveedores;