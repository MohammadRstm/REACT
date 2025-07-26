import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { HomePage } from './Pages/home/HomePage'
import {Routes , Route} from 'react-router'
import { CheckoutPage } from './Pages/checkout/CheckoutPage'
import { OrdersPage } from './Pages/orders/OrdersPage'
import { TrackingPage } from './Pages/TrackingPage'
import { NotFoundPage } from './Pages/NotFoundPage'
import axios from 'axios'

function App() {
    const [cart , setCart] = useState([]);

        const loadCart = async () =>{
        let response = await axios.get('/api/cart-items?expand=product');
        setCart(response.data);
      }

    useEffect(() =>{
      loadCart();
    }, []);
      
window.axios = axios;
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage
      cart = {cart}
      loadCart = {loadCart}
      />} />
      <Route path="checkout" element={<CheckoutPage
      loadCart = {loadCart}
      cart = {cart}
      />} />
      <Route path="orders" element={<OrdersPage
      loadCart={loadCart}
      cart = {cart}
      />} />
      <Route path="tracking/:orderId/:productId" element={<TrackingPage
      cart = {cart}
      />} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </>
  )
}

export default App
