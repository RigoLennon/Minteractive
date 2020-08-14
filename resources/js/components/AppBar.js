import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
//import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

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

export default function AppBarD() {
    const classes = useStyles();

    return (
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
        </div>
    );
}