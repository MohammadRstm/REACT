import { useState } from "react";
import "./Header.css"
import { NavLink, useNavigate , useSearchParams} from "react-router"

export function Header({cart}){
    const [searchParams] = useSearchParams();
    let iniValueOfSearch = "";
    if (searchParams.get('search')){
        iniValueOfSearch = searchParams.get('search')
    }
    const [inputText , setInputText] = useState(iniValueOfSearch);
    const navigate = useNavigate();



    let totalQuantity = 0;

    cart.forEach((cartItem) =>{
        totalQuantity += cartItem.quantity;
    });

    const searchForProduct = () =>{
        navigate(`/?search=${inputText}`);
    }
    const searchOnKeyDown = (e) =>{
        if (e.key === 'Enter'){
            searchForProduct();
        }
    }
return (
<>
    <div className="header">
        <div className="left-section">
            <NavLink to="/" className="header-link">
                <img className="logo" src="images/logo-white.png" />
                <img className="mobile-logo" src="images/mobile-logo-white.png" />
            </NavLink>
        </div>

        <div className="middle-section">
            <input 
            className="search-bar" 
            type="text" 
            placeholder="Search"
            value={inputText}
            onChange={(e) =>{
                setInputText(e.target.value);
            }}
            onKeyDown={searchOnKeyDown}
             />

            <button className="search-button"
             onClick={searchForProduct}
             >
                <img className="search-icon" src="images/icons/search-icon.png" />
            </button>
        </div>

        <div className="right-section">
            <NavLink className="orders-link header-link" to="/orders">
                <span className="orders-text">Orders</span>
            </NavLink>

            <NavLink className="cart-link header-link" to="/checkout">
                <img className="cart-icon" src="images/icons/cart-icon.png" />
                <div className="cart-quantity">{totalQuantity}</div>
                <div className="cart-text">Cart</div>
            </NavLink>
        </div>
    </div>

</>
)
}
