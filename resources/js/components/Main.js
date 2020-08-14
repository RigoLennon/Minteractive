import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Button} from '@material-ui/core';

import Product from './Product';

class Main extends Component {

    constructor(){
        super();

        this.state = {
            products: [],
            currentProduct: null
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
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <Button variant="contained" onClick={() => this.handleClick(product)}>Ver mas</Button>
                </div>
                
            );
        })
    }

    handleClick(product){
        this.setState({currentProduct:product});
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Todos los productos</h3>
                    <ul>
                        { this.renderProducts() }
                    </ul>
                </div>

                <Product product={this.state.currentProduct} />
            </div>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}