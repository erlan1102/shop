import React from 'react'
import HeaderLeft from "./HeaderLeft";
import HeaderMenu from "./HeaderMenu";
import Form from "../form/Form";
import './Header.css'
const Header = () =>{
    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <HeaderLeft/>
                    <HeaderMenu/>
                    <Form/>
                </nav>
            </div>
        </header>
    )
};

export default Header