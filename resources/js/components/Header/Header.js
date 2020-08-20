import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

{/*function AppBarD(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {/*<Link component={RouterLink} to="/" color="inherit">Inicio</Link>
                        Inicio
                        {this.state.isLoggedIn ? 
                        <li className="has-sub">
                            <Link to="/dashboard">Dashboard</Link>
                            <p onClick={this.logOut}>cerrar</p>
                        </li> : ""
                    }
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}*/}

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn
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

        const classes = {
            root: {
                flexGrow: 1,
            },
            menuButton: {
                justifyContent: 'flex-end',
                flex: 1,
                flexDirection: 'row',
            },
            title: {
                flexGrow: 1,
            },
        };

        return(
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {/*<Link component={RouterLink} to="/" color="inherit">Inicio</Link>*/}
                            Inicio
                        </Typography>
                        <Button color="inherit">Login</Button>
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
            </nav>
            </div>
        );
    }
}

export default withRouter(Header);