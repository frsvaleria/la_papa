import React from "react";
import { Navbar, NavDropdown } from 'react-bootstrap';


const Nav = () => {
    return (


        <Navbar bg="dark" variant="dark">



            <NavDropdown title="title" id="me-auto">
                <NavDropdown.Item href="#home">Home</NavDropdown.Item>
                <NavDropdown.Item href="#prod" >prod</NavDropdown.Item>
                <NavDropdown.Item href="#info" >Info</NavDropdown.Item>
            </NavDropdown>
        </Navbar>

    )
}

export default Nav;