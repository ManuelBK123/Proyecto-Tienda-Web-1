import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom";

//componentes
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Login from './Login'
import Register from "./Register";

class App extends React.Component{
    render() {

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/Login' component={Login}/>
                        <Route exact path='/Register' component={Register}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </div>
            )
    }
}

export default App;