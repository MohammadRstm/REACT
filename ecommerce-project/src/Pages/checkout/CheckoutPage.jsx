import { CheckoutHeader } from "./CheckoutHeader";
import "./CheckoutPage.css"
import {useEffect , useState} from 'react'
import axios from "axios"
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

export function ChecoutPage({cart}){
const [deliveryOptions , setDeliveryOptions] = useState([]);
const [paymentSummary , setPaymentSummary] = useState(null);

useEffect(()=>{
  const getCheckoutData = async () =>{
      let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);
      response = await axios.get('/api/payment-summary');
      setPaymentSummary(response.data);
  }
  getCheckoutData();
} , []);

return (
<>
    <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
    <title>Checkout</title>
    <CheckoutHeader />
    <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
          cart = {cart}
          deliveryOptions = {deliveryOptions}
          />
          <PaymentSummary
          paymentSummary={paymentSummary}
          />
        </div>
    </div>
</>
);
}
