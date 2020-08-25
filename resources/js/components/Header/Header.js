import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

const pruebTexto = "Hola mundo";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

class Test extends Component{
    render(){
    return <p>{this.props.nombre}</p>
    }
}

function Prueba(){
    return(
        <p>hola desde la funcion</p>
    );
}

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn,
            prueba: pruebTexto,
            styles: useStyles
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

    test(){
        const [name, setName] = 'Prueba';
        return <p name={name}></p>
    }

    render(){
        const aStyle ={
            cursor: 'pointer'
        };

        const classes = this.state.styles;

        const open = this.state.open;
  
        const handleMenu = this.state.handleMenu;
  
        const handleClose = this.state.handleClose;

        const anchorEl = this.state.anchorEl;

        const auth = this.state.auth;

        const nombre = this.state.user.name;

        return(
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Inicio
                            <Test nombre={nombre}/>
                        </Typography>
                    </Toolbar>
                </AppBar>
                
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Index</Link></li>
                    {this.state.isLoggedIn ? 
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
                    }
                </ul>
                {this.state.prueba}
            </nav>
            </div>
        );
    }
}
export default withRouter(Header);