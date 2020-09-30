import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import {Form, Row, Col, Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link, History} from 'react-router-dom';

class CreateProduct extends Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          description: '',
          price: 0,
          short_descrip: '',
          cat_id: '',
          categories: []
        }
        
        this.handleChangeNombre = this.handleChangeNombre.bind(this);
        this.handleChangeDescp  = this.handleChangeDescp.bind(this);
        this.handleChangePreci  = this.handleChangePreci.bind(this);
        this.handleChangeShrtDescp  = this.handleChangeShrtDescp.bind(this);
        this.handleChangeCategory  = this.handleChangeCategory.bind(this);
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

    handleChangeCategory(event){
      this.setState({formCategory: event.target.value})
    }

    sendNetworkProduct(){
      const formData = new FormData()
      formData.append('nombre',this.state.formNombre)
      formData.append('descripcion',this.state.formDescripcion)
      formData.append('precio',this.state.formPrecio)
      formData.append('short_descrip',this.state.formShrtDescp)
      formData.append('cat_id',this.state.formCategory)
  
      axios.post('/api/products',formData).then(response=>{
        if (response.data.success==true) {
          alert(response.data.message)
        }
      }).catch(error=>{
        alert("Error "+error)
      })
    }

    /*componentDidMount(){
      fetch('/api/products/categories')
      .then(response => {
          return response.json();
      })
      .then(categories => {
          this.setState({ categories });
      });
  }*/

  componentDidMount() {
    fetch('/api/products/categories')
    .then(res => res.json())
    .then(json => json.data)
    .then(data => this.setState({ 'categories': data }))
}

    render() {
        return(
          <div>
            <Header />
            <Form>
              <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={2}>
                  Nombre del producto
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" value={this.state.formNombre} onChange={this.handleChangeNombre} placeholder="Nombre..." />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalDescription">
                <Form.Label column sm={2}>
                  Descripcion del producto
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" value={this.state.formDescripcion} onChange={this.handleChangeDescp} placeholder="Descripcion..." />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalShortDescri">
                <Form.Label column sm={2}>
                  Resumen
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" value={this.state.formShrtDescp} onChange={this.handleChangeShrtDescp} placeholder="Resumen..." />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPrice">
                <Form.Label column sm={2}>
                  Precio
                </Form.Label>
                <Col sm={2}>
                  <Form.Control type="number" value={this.state.formPrecio} onChange={this.handleChangePreci} placeholder="$0.00" />
                </Col>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Selecciona una categoria</Form.Label>
                  <Form.Control as="select" defaultValue="Seleccionar..." value={this.state.formCategory} onChange={this.handleChangeCategory}>
                    <option>Seleccionar...</option>
                    {this.state.categories.map((cat, index)=>{
                      return <option key={index} value={cat.id}>{cat.cat_name}</option>
                    })}
                </Form.Control>
              </Form.Group>

                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Link to="/">
                      <Button type="submit" onClick={()=>this.sendNetworkProduct()}>Confirmar</Button>
                    </Link>
                  </Col>
                </Form.Group>
            </Form>
          </div>
        )
      }
    }

export default CreateProduct;