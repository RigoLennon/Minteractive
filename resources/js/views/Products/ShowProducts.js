import React, { Component } from 'react';

import {Card, Button} from 'react-bootstrap';

class ShowProducts extends Component{
    constructor(){
        super();

        this.state={
            isLoggedIn: false,
            user:{},
            products: [],
        }
    }
    componentWillMount(){
        let state = localStorage["appState"];

        if(state){
            let AppState = JSON.parse(state);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user:AppState.user});
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
        return this.state.products.map((product, index) => {
            return(
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title key={index}>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            );
        })
    }

    render(){
        
            return(
                <div>
                    <h1>Products</h1>
                    {this.renderProducts()}
                </div>
            );
    }
}

export default ShowProducts;