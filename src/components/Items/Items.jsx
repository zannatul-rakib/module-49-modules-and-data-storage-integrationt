import React from 'react';
import "./Items.css"

const Items = (props) => {
    const { price, picture, name, id } = props.cosmetic;

    const addToCart = (id) => {
        console.log(id)
    }
    return (
        <div className='card'>
            <img src={picture} alt="" />
            <h3>Name: {name }</h3>
            <p>Price: {price}</p>
            <button onClick={()=> addToCart(id)}>Add to cart</button>
        </div>
    );
};

export default Items;