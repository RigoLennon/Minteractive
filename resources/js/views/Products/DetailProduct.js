import React, { Component } from 'react';

import {Card, Button, Container, Row} from 'react-bootstrap';

import Header from '../../components/Header/Header';

class DetailProduct extends Component{
    constructor(props){
        super(props);

        this.state={
            isLoggedIn: false,
            user:{},
            products: {},
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
        fetch('/api/products/' + this.props.match.params.id
        )
        .then(response => {
            return response.json();
        })
        .then(products => {
            this.setState({ products });
        });
    }

    renderProduct(){
            return(
                <Container fluid="sm" key={this.state.products.id}>
                <Row className="justify-content-sm-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                            <Card.Title>{this.state.products.name}</Card.Title>
                                <Card.Text>
                                    {this.state.products.description}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                    </Card>
                </Row>
                </Container>
            );
    }

    render(){
        
            return(
                <div>
                    <Header />
                    <h1>Productos</h1>
                    {this.renderProduct()}
                </div>
            );
    }
}

export default DetailProduct;