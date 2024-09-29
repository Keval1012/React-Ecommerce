import React, { useContext, useState } from 'react';
import './Navbar.css';
import Logo from './../../Assets/logo.png';
import Cart_Icon from './../../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const { getTotalCartItems } = useContext(ShopContext);
    const [menu, setMenu] = useState('shop');

    return (
        <div className='navbar'>
        <div className="nav-logo">
            <img src={Logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => { setMenu('shop') }}><Link to='/' className='nav-link'>Shop</Link> {menu === 'shop' ? <hr/> : <></>}</li>
            <li onClick={() => { setMenu('men') }}><Link to='/men' className='nav-link'>Men</Link> {menu === 'men' ? <hr/> : <></>}</li>
            <li onClick={() => { setMenu('women') }}><Link to='/women' className='nav-link'>Women</Link> {menu === 'women' ? <hr/> : <></>}</li>
            <li onClick={() => { setMenu('kids') }}><Link to='/kids' className='nav-link'>Kids</Link> {menu === 'kids' ? <hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={Cart_Icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        </div>
    );
}

export default Navbar;