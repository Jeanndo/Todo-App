import React from 'react';
import {Link} from 'react-router-dom';
import NavBarItems from'./NavBarItems';
export default function NavBar(){
    return (
        <nav className='navbar navbar-light bg-light d-flex justify-content-center'>
            <Link to ='/' className='navbar-brand'>
                 <h3>Todo-App</h3>
            </Link>
            <NavBarItems/>
            </nav>
    )
}