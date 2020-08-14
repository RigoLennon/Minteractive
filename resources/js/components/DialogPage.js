import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Dialog,ListItemText,ListItem,List,Divider,AppBar,Toolbar,IconButton,Typography,Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const FullScreenDialog = ({ product }) => {
    const useStyles = makeStyles((theme) => ({
        appBar: {
          position: 'relative',
        },
        title: {
          marginLeft: theme.spacing(2),
          flex: 1,
        },
      }));
      
      const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

    if(!product){
        return(<div>El producto no existe</div>)
    }

    {/*return(
        <div>
            <h2>{ product.name }</h2>
            <p>{ product.description }</p>
            <h3>{ product.price }</h3>
        </div>
    )*/}

    return (
        <div>
          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Sound
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  save
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem button>
                <ListItemText primary="Phone ringtone" secondary="Titania" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Default notification ringtone" secondary="Tethys" />
              </ListItem>
            </List>
          </Dialog>
        </div>
      );
}
export default FullScreenDialog;