import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Main extends Component{
    constructor(){
        super();

        this.state = {
            products: [],
            currentProduct: null
        }
    }

    componentDidMount(){

    }

    componentWillMount(){
        fetch('/api/products')
        .then(response=>{
            return response.json();
        })
        .then(products=>{
            this.setState({ products });
        });
    }

    renderProducts(){
        return this.state.products.map(product=>{
            return(
                <li onClick={
                    () => this.handleClick(product)} key={product.id}>
                    { product.name }
                </li>
            );
            
        });
    }

    handleClick(product){
        this.setState({ currentProduct:product });
    }

    render(){
        return(
            <div>
                <div>
                    <h3>All products</h3>
                    <ul>
                        { this.renderProducts() }
                    </ul>
                </div>
                <Product product={this.state.currentProduct} />
            </div>
        );
    }
}