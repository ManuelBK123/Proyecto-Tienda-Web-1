import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom";

//componentes
import Header from "./Header";
import Footer from "./Footer"
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Login from './Login'
import Register from "./Register";
import Productos from "./Productos/Productos";
import Proveedores from "./Proveedores/Proveedores";
import Ventas from "./Ventas/Ventas";

class App extends React.Component{
    render() {

        return (
            <div>
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/Login' component={Login}/>
                        <Route exact path='/Register' component={Register}/>
                        <Route exact path='/Productos' component={Productos}/>
                        <Route exact path='/Proveedores' component={Proveedores}/>
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