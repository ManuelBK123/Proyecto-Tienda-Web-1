import React from 'react'
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">INICIO</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav ">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" role="button"
                                       data-bs-toggle="dropdown" >Productos
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/Productos">Lista de Productos</a></li>
                                        <li><a className="dropdown-item" href="#">Agregar Nuevo Producto</a></li>
                                        <li><a className="dropdown-item" href="#">Modificar Producto</a></li>
                                        <li><a className="dropdown-item" href="#">Eliminar Producto</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav ">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" role="button"
                                       data-bs-toggle="dropdown" >Proveedores
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/Proveedores">Lista de Proveedores</a></li>
                                        <li><a className="dropdown-item" href="#">Agregar Nuevo Proveedor</a></li>
                                        <li><a className="dropdown-item" href="#">Eliminar Proveedor</a></li>
                                        <li><a className="dropdown-item" href="#">Modificar Proveedor</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" role="button"
                                       data-bs-toggle="dropdown" >Ventas
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/Ventas">Lista de Ventas</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="/Login">Login</a>
                                <a className="nav-link active" href="/Register">Register</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            /*
            <div className="collapse navbar-collapse" id="navbarSupportedContent">>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" role="button"
                                       data-bs-toggle="dropdown" >Productos
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/Productos">Lista de disponibilidad</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
             */
        )
    }
}
export default Header;