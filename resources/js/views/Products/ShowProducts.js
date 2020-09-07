import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Switch, useLocation} from 'react-router-dom';

import {Card, Button, Container, Row} from 'react-bootstrap';

import DetailProduct from '../Products/DetailProduct';

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
                                    {product.short_descrip}
                                </Card.Text>
                                {/*<Button variant="primary" onClick={this.handleClick.bind(this)} data-id={product.id}>Go somewhere</Button>*/}
                                <Link to={{pathname: '/product-detail/'+product.id}} className="btn btn-primary">View Details</Link> 
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