import React, { Component } from 'react';

const Product = ({ product }) => {
    const divStyle = {

    }

    if(!product){
        return(<div style={divStyle}>El producto no existe</div>)
    }

    return(
        <div>
            <h2>{ product.name }</h2>
            <p>{ product.description }</p>
            <h3>{ product.price }</h3>
        </div>
    )
}

export default Product;