// import { Component } from "react";
import { Route, Redirect} from "react-router-dom"

// const user = null;
const user = {id: 1, username: "yenn"}

export default function PrivateRoute({component: Component, ...res}) {
    return (
        <Route {...res}>
        {user ?
            <Component /> : <Redirect to="/login" />}
        </Route>
    
    )
}
