import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Button, Grid, CardHeader, CardMedia, CardContent, Typography, Card, CardActions} from '@material-ui/core';

import Product from './Product';
import AppBarD from './AppBar';

import test from '../../../public/images/test.png';

class Main extends Component {

    constructor(){
        super();

        this.state = {
            products: [],
            currentProduct: null,
        }
    }

    componentDidMount(){
        fetch('/api/products')
        .then(response => {
            return response.json();
        })
        .then(products => {
            this.setState({ products });
        });
    }

    renderProducts(){
        return this.state.products.map(product => {
            return(
                <Card key={product.id}>
                    <CardHeader
                    title={product.name}
                    subheader="Subtitulo de prueba"
                    />
                    <CardMedia
                    image={test}
                    title='test'
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button 
                        size="small" 
                        color="primary"
                        variant="contained"
                        onClick={() => this.handleClick(product)}
                        >
                            Ver mas
                        </Button>
                    </CardActions>
                </Card>                
            );
        })
    }

    handleClick(product){
        this.setState({currentProduct:product});
    }

    render() {
        return (
            <div>
                <AppBarD />
                <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                >
                    <h3>Todos los productos</h3>
                </Grid>
                <div>
                    { this.renderProducts() }
                </div>
                {/*<FullScreenDialog product={this.state.currentProduct}/>*/}
                <Product product={this.state.currentProduct}/>
            </div>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}