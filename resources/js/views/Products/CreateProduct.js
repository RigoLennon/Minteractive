import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import {browserHistory} from 'react-router-dom';

class CreateProduct extends Component{
    constructor(props){
        super(props);

        this.state={
            isLoggedIn: false,
            user:{},
            productName: '',
            productDescription: '',
            productPrice: '',
            productShortDescr: '',
            //productUser: ''
        }

        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleShortDescr = this.handleShortDescr.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        let state = localStorage["appState"];

        if(state){
            let AppState = JSON.parse(state);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user:AppState.user});
        }
    }

    handleName(e){
        this.setState({
            productName: e.target.value
        })
    }

    handleDescription(e){
        this.setState({
            productDescription: e.target.value
        })
    }

    handlePrice(e){
        this.setState({
            productPrice: e.target.value
        })
    }

    handleShortDescr(e){
        this.setState({
            productShortDescr: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const products = {
            name: this.state.productName,
            description: this.state.productDescription,
            price: this.state.productPrice,
            shortdescr: this.state.productShortDescr,
        }

        let uri = 'http://localhost:8000/api/products';

        axios.post(uri, products)
        .then((response)=>{
            console.log('producto añadido');
        })
    }

    render(){
        return(
            <div>
                <Header />
                <h1>Create An Item</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nombre:</label>
                                <input type="text" className="form-control" onChange={this.handleName}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Descripcion:</label>
                                <input type="text" className="form-control col-md-6" onChange={this.handleDescription}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Price:</label>
                                <input type="text" className="form-control col-md-6" onChange={this.handlePrice}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Resumen:</label>
                                <input type="text" className="form-control col-md-6" onChange={this.handleShortDescr}/>
                            </div>
                        </div>
                    </div><br />
                    <div className="form-group">
                        <button className="btn btn-primary">Agregar</button>
                    </div>
                </form>
        </div>
        );
    }
}

export default CreateProduct;