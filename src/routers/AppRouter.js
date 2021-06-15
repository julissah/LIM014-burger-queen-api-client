import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function AppRouter(){
    return (
     <Router>
         <Switch>
            <Route path="/login">
                <h1>Aqui va el login</h1>
            </Route>
            <Route path="/products">
                <h1>Aqui van los productos</h1>
            </Route>
            <Route path="/orders">
                <h1>Aqui van las ordenes</h1>
            </Route>
            <Route path="/users">
                <h1>Aqui van los usuariitos</h1>
            </Route>
            <Route exact path="/">
                <h1>Home</h1>
            </Route>
            <Route path="*">
            <h1>NOOOT FOUND THIS ULR --- PLEASE SE INTELIGENTE</h1>
                
            </Route>
        </Switch>
       </Router>
    );
};
