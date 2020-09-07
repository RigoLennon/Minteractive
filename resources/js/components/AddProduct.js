import React from 'react';

class AddProduct extends Component{
    constructor(props){
        this.state = {
            newProduct:{
                title: '',
                description: '',
                price: 0
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(key, e){
        var state = Object.assign({}, this.state.newProduct);
        state[key] = e.target.value;
        this.setState({newProduct: state});
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.onAdd(this.state.newProduct);
    }

    render(){
        return(
            <div>
                <h2>Añadir producto</h2>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Titulo: 
                            <input type="text" onChange={(e) => this.handleInput('title', e) }/>
                        </label>

                        <label>
                            Descripcion:
                            <input type="text" onChange={(e) => this.handleInput('description', e)}/>
                        </label>

                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddProduct;