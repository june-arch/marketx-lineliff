import React, {useState} from 'react'
import './Product.css'
import NumberFormat from 'react-number-format'
import { useStateValue } from './StateProvider'
function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    
    console.log("this is the basket >> ", basket)

    const addToBasket = () => {
         dispatch({
             type: "ADD_TO_BASKET",
             item: {
                 id:id,
                 title:title,
                 image:image,
                 price:price,
                 rating:rating
             },
         });
    };

    return (
        <div className="product">
            <h1></h1>
            <p>{title}</p>
            <p className="product_price">
                <small>Rp. </small>
                <strong><NumberFormat value={price} displayType={'text'} thousandSeparator={true} renderText={value => value} /></strong>
            </p>
            <div className="product_rating">
                {Array(rating).fill().map((_,i) => (
                    <p>&#127775;</p>
                ))}
            </div>
            <img src={image} alt=""/>
            <div className="product_button">
                <button onClick={addToBasket}>Add to Basket</button>
                <button>Remove Basket</button>
            </div>
        </div>
    )
}

export default Product
