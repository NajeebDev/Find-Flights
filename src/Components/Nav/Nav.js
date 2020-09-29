import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../img/logo.png'


export default function Nav() {

    return (
        <div id='header'>

            <img id="logo" src={logo} alt={"logo"}/>

                <ul className='nav'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>

                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>

                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link to={'/signup'}>Sign up</Link>
                    </li>

                    <li>
                        <Link to={'/help'}>Help</Link>
                    </li>
                </ul>

        </div>
    )
}
