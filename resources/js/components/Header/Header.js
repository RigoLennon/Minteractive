import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import { MdAccessibility } from "react-icons/md";

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn,
        };

        this.logOut = this.logOut.bind(this);
    }

    logOut(){
      let appState = {
          isLoggedIn: false,
          user: {}
      };

      localStorage["appState"] = JSON.stringify(appState);
      this.setState(appState);
      this.props.history.push('/login');
  }

    render(){
        const aStyle ={
            cursor: 'pointer'
        };

        /*{this.state.isLoggedIn ? 
                        <li className="has-sub">
                            <Link to="/dashboard">Dashboard</Link>
                            <p>{this.state.user.email}</p>
                            <p onClick={this.logOut}>cerrar</p>
                        </li> : ""
                    }
                    {!this.state.isLoggedIn ?
                        <li>
                            <Link to="/login">Login</Link>
                            |
                            <Link to="/register">Register</Link>
                        </li> : ""
                    }*/

        return (
          <div>
            {/*<Navbar bg="primary"  variant="dark">
              <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                {this.state.isLoggedIn ?
                  <Nav >
                    <Navbar.Text>Bienvenido {this.state.user.name}</Navbar.Text>
                    <NavDropdown title={<MdAccessibility />} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/dashboard">Mi cuenta</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.logOut}>Cerrar Sesion</NavDropdown.Item>
                  </NavDropdown>
                  </Nav>
                  : ""}
                </Navbar.Collapse>
                
                {!this.state.isLoggedIn ?

                <Nav className="mr-auto">
                  <NavDropdown title={<MdAccessibility />} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/login">Iniciar sesion</NavDropdown.Item>
                    <NavDropdown.Item href="/register">Registro</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                : ""}
              
                </Navbar>*/}

            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
              <Navbar.Brand href="/">Inicio</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              {this.state.isLoggedIn ?
                  <Nav >
                    <Navbar.Text>Bienvenido {this.state.user.name}</Navbar.Text>
                    <NavDropdown title={<MdAccessibility />} id="basic-nav-dropdown" drop={'left'}>
                    <NavDropdown.Item href="/dashboard">Mi cuenta</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.logOut}>Cerrar Sesion</NavDropdown.Item>
                  </NavDropdown>
                  </Nav>
                  : ""}
                
                {!this.state.isLoggedIn ?

                <Nav>
                  <NavDropdown title={<MdAccessibility />} id="basic-nav-dropdown" drop={'left'}>
                    <NavDropdown.Item href="/login">Iniciar sesion</NavDropdown.Item>
                    <NavDropdown.Item href="/register">Registro</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                : ""}
              </Navbar.Collapse>
            </Navbar>
          </div>
          );
    }

}
export default withRouter(Header);