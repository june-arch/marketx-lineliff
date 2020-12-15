import React from 'react'
import NumberFormat from 'react-number-format'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt=""/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>Rp. </small>
                    <strong><NumberFormat value={price} displayType={'text'} thousandSeparator={true} renderText={value => value} /></strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>&#127775;</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
