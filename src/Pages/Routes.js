import { Redirect, Route, Switch } from "react-router-dom";
import Main from './Main/Main';
import Login from './Login/Login';

const Routes = () =>{

    const user = true

    return(
        <>
            {
                user ? (
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Redirect to='/' /> 
                    </Switch>
                ) : (
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Redirect to='/login' />
                    </Switch>
                )
            }
        </>
    )
}

export default Routes;