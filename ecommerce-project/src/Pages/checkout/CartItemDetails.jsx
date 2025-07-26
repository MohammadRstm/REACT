import axios from "axios";
import { formatMoney } from "../../utils/moneyFormat";
import { useState } from "react";

export function CartItemDetails({cartItem , loadCart}){

    const [isUpdating , setIsUpdating] = useState(false);
    const [quantity , setQuantity] = useState(cartItem.quantity);

    const deleteCartItem = async () =>{
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    }

    const updateItem = () => {
        if (!isUpdating)
            setIsUpdating(true);
        else 
            setIsUpdating(false);
    }

    const updateOnKeyDown = 
        async (e) => {
                if (e.key === 'Enter') {
                    setIsUpdating(false);
                    await axios.put(`/api/cart-items/${cartItem.productId}`, {
                        quantity: Number(e.target.value)
                    });
                    await loadCart();
                }else if (e.key === 'Escape'){
                    setIsUpdating(false);
                    setQuantity(cartItem.quantity);
            }
        }
    


return(
<>
    <img className="product-image" src={cartItem.product.image} />

    <div className="cart-item-details">
        <div className="product-name">
            {cartItem.product.name}
        </div>
        <div className="product-price">
            {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
            <span>
                Quantity: <span className="quantity-label">{cartItem .quantity}</span>
            </span>
            <input 
            value={quantity}
            hidden = {!isUpdating} 
            type="text"  
            className="update-input"
            onChange={(e) => setQuantity(Number(e.target.value))}
            onKeyDown={updateOnKeyDown}
            />
            <span className="update-quantity-link link-primary"
            onClick = {updateItem}
            >
                Update
            </span>
            <span className="delete-quantity-link link-primary"
            onClick = {deleteCartItem}>
                Delete
            </span>
        </div>
    </div>
</>
);
}
