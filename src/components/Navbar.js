import { NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to='/' activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/orders' activeClassName="active">Orders</NavLink>
                </li>
                <li>
                    <NavLink to="/products" activeClassName="active">Products</NavLink>
                </li>
               
            </ul>
        </nav>
    )
}
