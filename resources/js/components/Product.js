import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Dialog,Chip,ListItem,List,Divider,AppBar,Toolbar,IconButton,Typography,Slide, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Product = ({ product }) => {
    const useStyles = makeStyles((theme) => ({
        appBar: {
            position: 'relative',
        },
        title: {
            textAlign: 'center',
            flex: 1,
        },
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        chip: {
            margin: theme.spacing(0.5),
        },
        section1: {
            margin: theme.spacing(3, 2),
        },
        section2: {
            margin: theme.spacing(2),
        },
        section3: {
            margin: theme.spacing(3, 1, 1),
        },
    }));
    
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    if(!product){
        return(<div style={{display: "none"}}>No existen datos</div>)
    }
    
    return (
    <div>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Detalles
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.root}>
                <div className={classes.section1}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h4">
                                {product.name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="h6">
                                ${product.price}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography color="textSecondary" variant="body2">
                        {product.description}
                    </Typography>
                </div>
                <Divider variant="middle" />
                <div className={classes.section2}>
                    <Typography gutterBottom variant="body1">
                        Select type
                    </Typography>
                    <div>
                        <Chip className={classes.chip} label="Extra Soft" />
                        <Chip className={classes.chip} color="primary" label="Soft" />
                        <Chip className={classes.chip} label="Medium" />
                        <Chip className={classes.chip} label="Hard" />
                    </div>
                </div>
                <div className={classes.section3}>
                    <Button color="primary">Add to cart</Button>
                </div>
            </div>
        </Dialog>
    </div>
    )
}

export default Product;