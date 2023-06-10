import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../logo/logo1.png'
import '../../style/header.css'

export default function Header() {
    return (

        <Navbar className="p-3 mb-2 bg-light text-white" bg="dark" variant='dark' expand="lg">
            <Navbar.Brand href="/home">
                <img className="logo"
                    src={logo}
                    width="100px"
                    height="35px" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto nav_link_wrapper">
                    <Link to="/login">Login</Link>
                    <Link to="/register">SignUp</Link>
                    <Link to='/dashboard'>DashBoard</Link>
                    <Link to='/logout' >Logout</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

