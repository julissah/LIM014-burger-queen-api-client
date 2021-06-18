import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import OrdersPage from '../pages/OrdersPage';
import UsersPage from '../pages/UsersPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import Navbar from '../components/Navbar';


export default function AppRouter(){
    return (
     <Router>
        <Navbar/>
         <Switch>
         <Route path="/login" component={LoginPage}/>
         <Route path="/products" component={ProductsPage}/>
         <Route path="/orders" component={OrdersPage}/>
         <Route path="/users/:username" component={UsersPage}/>
         <Route exact path="/" component={HomePage}/>
         <Route path="*" component={NotFoundPage}/>
        </Switch>
       </Router>
    );
};
