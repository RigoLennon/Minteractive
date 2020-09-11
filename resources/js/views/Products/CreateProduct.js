import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link, History} from 'react-router-dom';

class CreateProduct extends Component{
    constructor(props) {
        super(props);
           /* Initialize the state. */
           this.state = {
                  name: '',
                  description: '',
                  price: 0,
                  short_descrip: 0
            }
         
        this.handleChangeNombre = this.handleChangeNombre.bind(this);
        this.handleChangeDescp  = this.handleChangeDescp.bind(this);
        this.handleChangePreci  = this.handleChangePreci.bind(this);
        this.handleChangeShrtDescp  = this.handleChangeShrtDescp.bind(this);
      }

    handleChangeNombre(event) {
      this.setState({formNombre: event.target.value});
    }

    handleChangeDescp(event) {
      this.setState({formDescripcion: event.target.value});
    }

    handleChangePreci(event) {
      this.setState({formPrecio: event.target.value});
    }

    handleChangeShrtDescp(event) {
        this.setState({formShrtDescp: event.target.value});
    }

    sendNetworkProduct(){

        const formData = new FormData()
        formData.append('nombre',this.state.formNombre)
        formData.append('descripcion',this.state.formDescripcion)
        formData.append('precio',this.state.formPrecio)
        formData.append('short_descrip',this.state.formShrtDescp)
  
        axios.post('/api/products',formData).then(response=>{
  
             if (response.data.success==true) {
               alert(response.data.message)
             }
  
         }).catch(error=>{
           alert("Error "+error)
         })
  
      }
     
    render() {         
        return(
          <div> 
            <form>
            <div>
              <div>
                <div>
                  <div>
                    <h5 id="exampleModalLabel">Formulario de producto</h5>
                  </div>
                  <div>
                    <div>
                     <label>Nombre de producto </label>
                     <input type="text" value={this.state.formNombre} onChange={this.handleChangeNombre} />
                    </div>
                    <div>
                     <label >Descripcion de producto</label>
                     <textarea value={this.state.formDescripcion} onChange={this.handleChangeDescp}></textarea>
                    </div>
                    <div>
                     <label>Precio</label>
                     <input type="number" value={this.state.formPrecio} onChange={this.handleChangePreci} />
                    </div>
                    <div >
                     <label>Precio</label>
                     <input type="text" value={this.state.formShrtDescp} onChange={this.handleChangeShrtDescp} />
                    </div>
                  </div>
                  <div>
                    <button type="button" data-dismiss="modal">Cancelar</button>
                    
                    <Link to="/"><button type="button" onClick={()=>this.sendNetworkProduct()} >Guardar</button></Link>
                  </div>
                </div>
              </div>
            </div>
            </form>
        </div>)
      }
    }

export default CreateProduct;