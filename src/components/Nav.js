import React from 'react'
import logo from '../img/bagueton.svg'

export default function Nav() {
    return (
        <div>
            <nav>
                <div className="logo flex justify-center pt-5 ">
                    <img src={logo} alt="logo bagueton" />
                </div>
                <div className="navbar text-orange-950">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 glass ">
                                <li className='text-xl'><a href='www.google.fr'>Accueil</a></li>
                                <li>
                                    <a href='www.google.fr'>Documentation</a>
                                    <ul className="p-2">
                                        <li><a href='www.google.fr'>Submenu 1</a></li>
                                        <li><a href='www.google.fr'>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a href='www.google.fr'>A propos</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href='www.google.fr'>Accueil</a></li>
                            <li>
                                <details>
                                    <summary>Documentation</summary>
                                    <ul className="p-2 bg-transparent">
                                        <li><a href='www.google.fr'>Submenu 1</a></li>
                                        <li><a href='www.google.fr'>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a href='www.google.fr'>A propos</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                    </div>
                </div>
            </nav>
        </div>
    )
}