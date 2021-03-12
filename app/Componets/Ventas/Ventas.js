import React from 'react'
class Ventas extends React.Component {
    constructor() {
        super();
        this.state = {
            ventasList: []
        }
        this.ventasList = []
        //Extraer el catálogo de roles del backend
        /*
         APIInvoker.invokeGET('/roles/getAllRoles',data => {  //Entrará acá cuando status = true
             this.setState({
                 rolList : data.data
             })
             console.log(this.state.rolList)
         }, error => { //Entrará acá cuando status = false
         })
         */
    }
    render() {
        return(
            <div>
                <div className="cartaCentroGrande">
                    <h1> Ventas realizadas.</h1>
                    <div className="card">
                        <div className="card-body">
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" className="btn btn-outline-primary">Actualizar</button>
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
                                        <th scope="col">Hora</th>
                                        <th scope="col">ID Usuario</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>2</td>
                                        <td>5</td>
                                        <td>$75.8</td>
                                        <td>15-03-2021</td>
                                        <td>20:15:56</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>2</td>
                                        <td>5</td>
                                        <td>$75.8</td>
                                        <td>15-03-2021</td>
                                        <td>20:15:56</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>2</td>
                                        <td>5</td>
                                        <td>$75.8</td>
                                        <td>15-03-2021</td>
                                        <td>20:15:56</td>
                                        <td>1</td>
                                    </tr>
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