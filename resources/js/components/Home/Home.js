import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ShowProducts from '../../views/Products/ShowProducts';

class Home extends Component{
    constructor(){
        super();

        this.state={
            isLoggedIn: false,
            user:{}
        }
    }

    componentWillMount(){
        let state = localStorage["appState"];

        if(state){
            let AppState = JSON.parse(state);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user:AppState.user});
        }
    }

    render(){
        return(
            <div>
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                <ShowProducts />
                <Footer />
            </div>
        );
    }
}

export default Home;