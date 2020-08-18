import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import ReactDom from 'react-dom';
import FlasMessage from 'react-flash-message';
import Axios from 'axios';

class RegisterContainer extends Component{
    constructor(props){
        super(props);

        this.state={
            isRegistered: false,
            error: '',
            errorMessage: '',
            formSubmitting: false,
            user:{
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            redirect: props.redirect
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
    }

    componentWillMount(){
        let state = localStorage["appState"];

        if (state){
            let AppState = JSON.parse(state);
            this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState});
        }
        if(this.state.isRegistered){
            return this.props.history.push("/dashboard");
        }
    }

    componentDidMount(){
        const {prevLocation} = this.state.redirect.state || {prevLocation: {pathname: '/dashboard'}};

        if (prevLocation && this.state.isLoggedIn){
            return this.props.history.push(prevLocation);
        }
    }

    handleSubmit(e){
        e.preventDefault();

        this.setState({ formSubmitting: true });

        ReactDom.findDOMNode(this).scrollIntoView();
        
        let userData = this.state.user;

        Axios.post("/api/auth/signup", userData)
            .then(response => {
                return response;
            }).then(json => {
                if(json.data.success){
                    let userData = {
                        id: json.data.id,
                        name: json.data.name,
                        email: json.data.email,
                        activation_token: json.data.activation_token,
                    };

                    let appState = {
                        isRegistered: true,
                        user: userData
                    };

                    localStorage["appState"] = JSON.stringify(appState);
                    this.setState({
                        isRegistered: appState.isRegistered,
                        user: appState.user
                    });
                }else{
                    alert ("El sistema fallo al registar el usuario");
                }
            }).catch(error => { if(error.response){
                let err = error.response.data;

                this.setState({
                    error: err.message,
                    errorMessage: err.errors,
                    formSubmitting: false 
                });
            }else if(error.request){                
                let err = error.request;

                this.setState({
                    error: err,
                    formSubmitting: false
                });
            }else{
                let err = error.message;

                this.setState({
                    error:err,
                    formSubmitting: false
                });
            }
        }).finally(this.setState({error: ''}));
    }

    handleName(e){
        let value = e.target.value;

        this.setState(prevState => ({
            user:{
                ...prevState.user, first_name: value
            }
        }));
    }

    handleEmail(e){
        let value = e.target.value;

        this.setState(prevState => ({
            user: {
                ...prevState.user, email:value
            }
        }));
    }

    handlePassword(e){
        let value = e.target.value;

        this.setState(prevState => ({
            user:{
                ...prevState.user, password:value
            }
        }));
    }

    handlePasswordConfirm(e){
        let value = e.target.value;

        this.setState(prevState => ({
            user:{
                ...prevState.user, password_confirmation:value
            }
        }));
    }

    render(){
        let errorMessage = this.state.errorMessage;
        let arr = [];
        Object.values(errorMessage).forEach((value) => (
            arr.push(value)
        ));

        return(
            <div className="container">
                <div className="row">
                    <div className="offset-xl-3 col-xl-6 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12">
                        <h2>Crear cuenta</h2>
                        {this.state.isRegistered ? <FlasMessage duration={600000} persistOnHover={true}>
                            <h5 className={"alert alert-success"}>Registro exitoso, redirigiendo...</h5></FlasMessage> : ''}
                        {this.state.error ? <FlasMessage duration={900000} persistOnHover={true}>
                            <h5 className={"alert alert-danger"}>Error: {this.state.error}</h5>
                            <ul>
                                {arr.map((item), i => (
                                    <li key={i}><h5 style={{color: 'red'}}>{item}</h5></li>
                                ))}
                            </ul></FlasMessage> : ''}

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input id="name" type="text" placeholder="Nombre" className="form-control" required onChange={this.handleName} />
                            </div>

                            <div className="form-group">
                                <input id="email" type="email" name="email" placeholder="Correo" className="form-control" required onChange={this.handleEmail} />
                            </div>

                            <div className="form-group">
                                <input id="password" type="password" name="password" placeholder="Contraseña" className="form-control" required onChange={this.handlePassword} />
                            </div>

                            <div className="form-group">
                                <input id="password_confirm" type="password" name="password_confirm" placeholder="Confirmar la contraseña" className="form-control" required onChange={this.handlePasswordConfirm} />
                            </div>

                            <button type="submit" name="singlebutton" className="btn btn-default btn-lg btn-block mb10" disabled={this.state.formSubmitting ? "disabled" : ""}>
                                Crear cuenta
                            </button>
                        </form>

                        <p className="text-white">
                            Ya tienes una cuenta? <Link to="/login" className="text-yellow">Inicia sesion</Link>
                            <span className="pull-right">
                                <Link to="/" className="text-white">Volver al inicio</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(RegisterContainer);