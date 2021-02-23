import React from "react";
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return(
            <div>
                <h1> Bienvenido al sistema de gestión de ventas.</h1>
                <Link to='/Login'>
                    <button class="btn btn-outline-dark">Login</button>

                </Link>
                <br/>
                <br/>
                <Link to='/Register'>
                    <button class="btn btn-outline-dark">Registrar</button>
                </Link>
            </div>
        )
    }
}
export default Home;