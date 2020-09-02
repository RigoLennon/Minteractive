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
                <span>Whatever normally goes into the home/index page; A Plea To Heal The World for instance</span>
                <p>{this.state.user.name} : p</p>
                <ShowProducts />
                <Footer />
            </div>
        );
    }
}

export default Home;