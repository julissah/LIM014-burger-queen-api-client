import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProductsPage from '../pages/ProductsPage';
import OrdersPage from '../pages/OrdersPage';
import UsersPage from '../pages/UsersPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import Navbar from '../components/Navbar';
import PrivateRoute from '../routers/PrivateRoute'


export default function AppRouter(){
    return (
     <Router>
        <Navbar />
         <Switch>
         <Route path="/login" component={LoginPage}/>
         <Route path="/register" component={RegisterPage}/>
         <Route path="/products" component={ProductsPage}/>
         <PrivateRoute exact path="/orders" component={OrdersPage}/>
         {/* <Route exact={props.exact} path={props.path} component={props.component} /> */}
         <Route path="/users/:username" component={UsersPage}/>
         <Route exact path="/" component={HomePage}/>
         <Route path="*" component={NotFoundPage}/>

        </Switch>
       </Router>
    );
};
