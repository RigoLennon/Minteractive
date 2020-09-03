import React, { Component } from 'react';

import {Card, Button, Container, Row} from 'react-bootstrap';

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
        return this.state.products.map((product, id) => {
            return(
                <Container fluid="sm" key={id}>
                <Row className="justify-content-sm-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                    </Card>
                </Row>
                </Container>
            );
        })
    }

    render(){
        
            return(
                <div>
                    <h1>Productos</h1>
                    {this.renderProducts()}
                </div>
            );
    }
}

export default ShowProducts;