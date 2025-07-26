import { useState } from "react";
import axios from "axios";
import { formatMoney } from "../../utils/moneyFormat";

export function Product({ product , loadCart }){
    const [quantity , setQuantity] = useState(1);
    const [appear , setAppear] = useState(false);

    const addToCart = async () => {
            await axios.post('/api/cart-items' , {
                 productId : product.id,
                 quantity
            });
            await loadCart();
            setAppear(true);
            setTimeout( ()=>{
                setAppear(false);
            } , 2000)
        }     

    const selectQuantity = (event) =>{
                const quantitySelected = Number(event.target.value);
                setQuantity(quantitySelected);
            }
    return (
         <div key={product.id} className="product-container">
        <div className="product-image-container">
            <img data-testid = "product-image" className="product-image" src={product.image} />
        </div>

        <div className="product-name limit-text-to-2-lines">
            {product.name}
        </div>

        <div className="product-rating-container">
            <img className="product-rating-stars" 
            data-testid = "product-rating-image"
            src={`images/ratings/rating-${product.rating.stars * 10}.png`}
             />
            <div className="product-rating-count link-primary">
                {product.rating.count}
            </div>
        </div>

        <div className="product-price">
            {formatMoney(product.priceCents)}
        </div>

        <div className="product-quantity-container">
            <select value = {quantity} onChange = {selectQuantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>

        <div className="product-spacer"></div>

        <div className="added-to-cart"
        style = {{opacity : appear ?  1 : 0}}
        >
            <img src="images/icons/checkmark.png" />
            Added
        </div>

        <button
        data-testid = "add-to-cart-button"
         className="add-to-cart-button button-primary"
        onClick = {addToCart}>
            Add to Cart
        </button>
    </div>
    );
}