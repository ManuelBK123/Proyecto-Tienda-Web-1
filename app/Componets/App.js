import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom";

//componentes
import Header from "./Header";
import Footer from "./Footer"
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Login from './Login'
import Register from "./Register";
//productos
import Productos from "./Productos/Productos";
import AddProducto from "./Productos/AddProducto";
import deleteProducto from "./Productos/deleteProducto";
import updateProducto from "./Productos/updateProducto";
//proveedores
import Proveedores from "./Proveedores/Proveedores";
import AddProveedor from "./Proveedores/AddProveedor";
import deleteProveedor from "./Proveedores/deleteProveedor";
import updateProveedor from "./Proveedores/updateProveedor";
//ventas
import Ventas from "./Ventas/Ventas";


class App extends React.Component{
    render() {

        return (
            <div>
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/Login' component={Login}/>
                        <Route exact path='/' component={Login}/>
                        <Route exact path='/Home' component={Home}/>

                        <Route exact path='/Register' component={Register}/>

                        <Route exact path='/Productos' component={Productos}/>
                        <Route exact path='/AddProducto' component={AddProducto}/>
                        <Route exact path='/DeleteProducto' component={deleteProducto}/>
                        <Route exact path='/UpdateProducto' component={updateProducto}/>

                        <Route exact path='/Proveedores' component={Proveedores}/>
                        <Route exact path='/AddProveedor' component={AddProveedor}/>
                        <Route exact path='/DeleteProveedor' component={deleteProveedor}/>
                        <Route exact path='/UpdateProveedor' component={updateProveedor}/>

                        <Route exact path='/Ventas' component={Ventas}/>

                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>
            )
    }
}

export default App;