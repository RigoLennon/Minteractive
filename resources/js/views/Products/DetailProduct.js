import React, { Component } from 'react';

import {Card, Button, Container, Row, Carousel, Badge} from 'react-bootstrap';

import Header from '../../components/Header/Header';

class DetailProduct extends Component{
    constructor(props){
        super(props);

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
        fetch('/api/products/' + this.props.match.params.id
        )
        .then(response => response.json().then(result => {
            this.setState({ products: result });
        }))
        .catch((err) => { throw err; });
    }

    /*componentDidMount(){
        fetch('/api/products/' + this.props.match.params.id)
        .then(response => {
            return response.json();
        })
        .then(products => {
            this.setState({ products });
        });
    }*/

    render(){
        console.log(this.props.match.params.id);
        console.log(this.state.products);
            return(
                <div>
                    <Header />
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://picsum.photos/id/1080/800/500"
                            alt="First slide"
                            />
                            {/*<Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>*/}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://picsum.photos/id/1080/800/500"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://picsum.photos/id/1080/800/500"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    {/*<h2>{this.state.products.name}</h2>
                    <hr></hr>
                    <p>{this.state.products.description}</p>
                    <h3>Precio ${this.state.products.price}</h3>
                    <br></br>
                    <hr></hr>
                    <h5>Tipo de comida</h5>
                    <p><Badge variant="secondary">{this.state.products.cat_name}</Badge></p>
                    <p>{this.state.products.cat_name}</p>
                    <br></br>
                    <hr></hr>
                    <h5>Platillos similares</h5>*/}
                    <div>
                    {this.state.products.map((product, index) => (
                    <div key={index}>
                        <h2>{product.name}</h2>
                    <hr></hr>
                    <p>{product.description}</p>
                    <h3>Precio ${product.price}</h3>
                    <br></br>
                    <hr></hr>
                    <h5>Tipo de comida</h5>
                    <p><Badge variant="secondary">{product.cat_name}</Badge></p>
                    <p>{this.state.products.cat_name}</p>
                    <br></br>
                    <hr></hr>
                    <h5>Platillos similares</h5>
                    </div>
                    ))}
                </div>
                </div>
            );
    }
}

export default DetailProduct;