import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    console.log(window.screen.width)
    return (
        <nav>
            <div className = 'main'>
                <div>
                    <NavLink activeClassName = 'active' to = '/admin/chat/inbox'><img src = '/assets/header.png' className = 'logo'/></NavLink>
                </div>
                <div>
                    <NavLink activeClassName = 'active' to = '/admin/chat/inbox'>Inbox</NavLink>
                </div>
                <div>
                    <NavLink activeClassName = 'active' to = '/marketing'>Marketing</NavLink>
                </div>
                <div>
                    <NavLink activeClassName = 'active' to = '/payments'>Payments</NavLink>
                </div>
                <div>
                    <NavLink activeClassName = 'active' to = '/reporting'>Reporting</NavLink>
                </div>
            </div> 
            
        </nav>
    )
}
