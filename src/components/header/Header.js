import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () =>{
    return (
        <div>
        
                <div className='header'>
                    <Link to='/'><h1>Тур Вихідно Дня</h1></Link>
                    
                    <Link to='/'><h3>Тури</h3></Link>
                    <Link to='/rentbus'><h3>Замовлення автобуса</h3></Link>
                    
                    
                    <p ><img src="http://s1.iconbird.com/ico/2013/9/446/w512h5121380376664MetroUIPhone.png"/>+380974523167</p>
                   
                    
                    
                </div>
            
            
        </div>
    )
}

export default Header;