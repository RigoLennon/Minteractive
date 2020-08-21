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

    render(){
        const aStyle ={
            cursor: 'pointer'
        };

        const classes = this.state.styles;

        /*const classes = {
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
        };*/

        return(
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Inicio
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

/*const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));*/
  
  function AppBarT() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Photos
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }

export default withRouter(Header);